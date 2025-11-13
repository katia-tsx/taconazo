import {
  Game,
  GameState,
  GameLevel,
  GameStats,
} from '@/domain/entities/Game';
import { Order } from '@/domain/entities/Order';
import { RecipeType } from '@/domain/entities/Recipe';
import { RecipeService } from './RecipeService';
import { ValidationService, ValidationResult, TacoQuality } from './ValidationService';
import { IngredientType } from '@/domain/entities/Ingredient';
import { CookingStation } from '@/domain/entities/CookingStation';
import { CookingService } from './CookingService';
import { Customer, CustomerType } from '@/domain/entities/Customer';
import { CustomerService } from './CustomerService';
import { TipService } from './TipService';

export class GameService {
  private static game: Game = {
    state: GameState.MENU,
    level: GameLevel.TUTORIAL,
    stats: {
      score: 0,
      coins: 0,
      ordersCompleted: 0,
      ordersFailed: 0,
      perfectTacos: 0,
      currentLevel: GameLevel.TUTORIAL,
      timeRemaining: 0,
    },
    currentOrder: null,
    ordersQueue: [],
    completedOrders: [],
    isPaused: false,
  };

  private static cookingStation: CookingStation = CookingService.createStation('grill-1');
  private static currentCustomer: Customer | null = null;

  static getGame(): Game {
    return { ...this.game };
  }

  static startLevel(level: GameLevel): Game {
    const ordersNeeded = this.getOrdersForLevel(level);
    const timeLimit = this.getTimeLimitForLevel(level);

    this.game = {
      state: GameState.PLAYING,
      level,
      stats: {
        score: 0,
        coins: 0,
        ordersCompleted: 0,
        ordersFailed: 0,
        perfectTacos: 0,
        currentLevel: level,
        timeRemaining: timeLimit * ordersNeeded,
      },
      currentOrder: null,
      ordersQueue: this.generateOrders(ordersNeeded, level),
      completedOrders: [],
      isPaused: false,
    };

    this.game.currentOrder = this.game.ordersQueue[0];
    if (this.game.currentOrder) {
      this.game.currentOrder.startTime = Date.now();
      this.game.currentOrder.status = 'in-progress';
      
      // Crear cliente para esta orden
      const customerType = this.game.currentOrder.customerType || CustomerType.REGULAR;
      this.currentCustomer = CustomerService.createCustomer(
        this.game.currentOrder.customerId,
        customerType
      );
    }

    // Resetear estación de cocción
    this.cookingStation = CookingService.createStation('grill-1');

    return this.getGame();
  }

  static generateOrders(count: number, level: GameLevel): Order[] {
    const orders: Order[] = [];
    const availableRecipes = this.getAvailableRecipesForLevel(level);
    const timeLimit = this.getTimeLimitForLevel(level);

    // Tipos de clientes según el nivel
    const customerTypes: CustomerType[] = [
      CustomerType.REGULAR,
      ...(level >= GameLevel.MEDIUM ? [CustomerType.CLOSER] : []),
      ...(level >= GameLevel.HARD ? [CustomerType.PATIENT] : []),
    ];

    for (let i = 0; i < count; i++) {
      const randomRecipe = availableRecipes[
        Math.floor(Math.random() * availableRecipes.length)
      ];
      const randomCustomerType = customerTypes[
        Math.floor(Math.random() * customerTypes.length)
      ];
      
      orders.push({
        id: `order-${i + 1}`,
        recipeType: randomRecipe,
        timeLimit,
        customerId: `customer-${i + 1}`,
        customerType: randomCustomerType,
        status: 'pending',
      });
    }

    return orders;
  }

  static getAvailableRecipesForLevel(level: GameLevel): RecipeType[] {
    switch (level) {
      case GameLevel.TUTORIAL:
        return [RecipeType.PASTOR];
      case GameLevel.EASY:
        return [RecipeType.PASTOR, RecipeType.ASADA];
      case GameLevel.MEDIUM:
        return [RecipeType.PASTOR, RecipeType.ASADA, RecipeType.CARNITAS];
      case GameLevel.HARD:
        return [
          RecipeType.PASTOR,
          RecipeType.ASADA,
          RecipeType.CARNITAS,
          RecipeType.BARBACOA,
        ];
      case GameLevel.EXPERT:
        return [
          RecipeType.PASTOR,
          RecipeType.ASADA,
          RecipeType.CARNITAS,
          RecipeType.BARBACOA,
          RecipeType.PESCADO,
          RecipeType.CHORIZO,
        ];
      default:
        return [RecipeType.PASTOR];
    }
  }

  static getOrdersForLevel(level: GameLevel): number {
    switch (level) {
      case GameLevel.TUTORIAL:
        return 3;
      case GameLevel.EASY:
        return 5;
      case GameLevel.MEDIUM:
        return 8;
      case GameLevel.HARD:
        return 12;
      case GameLevel.EXPERT:
        return 15;
      default:
        return 3;
    }
  }

  static getTimeLimitForLevel(level: GameLevel): number {
    switch (level) {
      case GameLevel.TUTORIAL:
        return 90;
      case GameLevel.EASY:
        return 60;
      case GameLevel.MEDIUM:
        return 45;
      case GameLevel.HARD:
        return 30;
      case GameLevel.EXPERT:
        return 20;
      default:
        return 60;
    }
  }

  static submitTaco(ingredients: IngredientType[]): ValidationResult | null {
    if (!this.game.currentOrder) return null;

    const recipe = RecipeService.getRecipeByType(this.game.currentOrder.recipeType);
    if (!recipe) return null;

    const result = ValidationService.validateTaco(ingredients, recipe);

    // Calcular tiempo tomado
    const timeTaken = this.game.currentOrder.startTime
      ? Math.floor((Date.now() - this.game.currentOrder.startTime) / 1000)
      : this.game.currentOrder.timeLimit;

    // Calcular propina si hay cliente
    let tip = 0;
    if (this.currentCustomer) {
      const tipCalculation = TipService.calculateTip(
        this.currentCustomer,
        result.quality as TacoQuality,
        timeTaken,
        this.game.currentOrder.timeLimit
      );
      tip = tipCalculation.totalTip;
    }

    // Actualizar estadísticas
    this.game.stats.score += result.score;
    this.game.stats.coins += result.coins + tip;

    if (result.quality === 'perfect') {
      this.game.stats.perfectTacos++;
    }

    // Marcar orden como completada
    this.game.currentOrder.status = 'completed';
    this.game.completedOrders.push(this.game.currentOrder);
    this.game.stats.ordersCompleted++;

    // Pasar a la siguiente orden
    this.game.ordersQueue.shift();
    if (this.game.ordersQueue.length > 0) {
      this.game.currentOrder = this.game.ordersQueue[0];
      if (this.game.currentOrder) {
        this.game.currentOrder.startTime = Date.now();
        this.game.currentOrder.status = 'in-progress';
        
        // Crear nuevo cliente
        const customerType = this.game.currentOrder.customerType || CustomerType.REGULAR;
        this.currentCustomer = CustomerService.createCustomer(
          this.game.currentOrder.customerId,
          customerType
        );
      }
    } else {
      // Nivel completado
      this.game.currentOrder = null;
      this.currentCustomer = null;
      this.game.state = GameState.VICTORY;
    }

    // Resetear estación de cocción
    this.cookingStation = CookingService.createStation('grill-1');

    return {
      ...result,
      coins: result.coins + tip,
      message: tip > 0 ? `${result.message} (+${tip} propina)` : result.message,
    };
  }

  static failOrder(): void {
    if (!this.game.currentOrder) return;

    this.game.currentOrder.status = 'failed';
    this.game.stats.ordersFailed++;
    this.game.stats.score -= 20;

    // Pasar a la siguiente orden
    this.game.ordersQueue.shift();
    if (this.game.ordersQueue.length > 0) {
      this.game.currentOrder = this.game.ordersQueue[0];
      if (this.game.currentOrder) {
        this.game.currentOrder.startTime = Date.now();
        this.game.currentOrder.status = 'in-progress';
      }
    } else {
      this.game.currentOrder = null;
      this.game.state = GameState.GAME_OVER;
    }
  }

  static updateTimeRemaining(seconds: number): void {
    this.game.stats.timeRemaining = Math.max(0, seconds);
    if (this.game.stats.timeRemaining === 0 && this.game.state === GameState.PLAYING) {
      this.game.state = GameState.GAME_OVER;
    }
  }

  static pauseGame(): void {
    if (this.game.state === GameState.PLAYING) {
      this.game.isPaused = true;
      this.game.state = GameState.PAUSED;
    }
  }

  static resumeGame(): void {
    if (this.game.state === GameState.PAUSED) {
      this.game.isPaused = false;
      this.game.state = GameState.PLAYING;
    }
  }

  static resetGame(): void {
    this.game = {
      state: GameState.MENU,
      level: GameLevel.TUTORIAL,
      stats: {
        score: 0,
        coins: 0,
        ordersCompleted: 0,
        ordersFailed: 0,
        perfectTacos: 0,
        currentLevel: GameLevel.TUTORIAL,
        timeRemaining: 0,
      },
      currentOrder: null,
      ordersQueue: [],
      completedOrders: [],
      isPaused: false,
    };
  }

  static setState(state: GameState): void {
    this.game.state = state;
  }

  // Métodos para estación de cocción
  static getCookingStation(): CookingStation {
    return { ...this.cookingStation };
  }

  static startCooking(ingredientType: IngredientType): boolean {
    if (this.cookingStation.item) {
      return false; // Ya hay algo cocinando
    }
    if (!CookingService.canCook(ingredientType)) {
      return false; // No se puede cocinar este ingrediente
    }
    this.cookingStation = CookingService.startCooking(this.cookingStation, ingredientType);
    return true;
  }

  static updateCooking(): void {
    this.cookingStation = CookingService.updateCooking(this.cookingStation);
  }

  static removeFromGrill(): IngredientType | null {
    if (!this.cookingStation.item) {
      return null;
    }
    const { station, item } = CookingService.removeFromGrill(this.cookingStation);
    this.cookingStation = station;
    
    // Solo retornar si está cocido (no quemado)
    if (item.state === 'ready') {
      return item.ingredientType as IngredientType;
    }
    return null;
  }

  static isCookingReady(): boolean {
    return CookingService.isReady(this.cookingStation);
  }

  static isCookingBurned(): boolean {
    return CookingService.isBurned(this.cookingStation);
  }

  static getCookingProgress(): number {
    return CookingService.getCookingProgress(this.cookingStation);
  }

  // Métodos para cliente
  static getCurrentCustomer(): Customer | null {
    return this.currentCustomer ? { ...this.currentCustomer } : null;
  }

  static updateCustomerPatience(): void {
    if (!this.currentCustomer || !this.game.currentOrder) {
      return;
    }

    const elapsed = this.game.currentOrder.startTime
      ? Math.floor((Date.now() - this.game.currentOrder.startTime) / 1000)
      : 0;

    this.currentCustomer = CustomerService.updatePatience(
      this.currentCustomer,
      elapsed,
      this.game.currentOrder.timeLimit
    );
  }
}

