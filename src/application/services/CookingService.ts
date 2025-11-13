import { CookingStation, CookingItem, CookingState } from '@/domain/entities/CookingStation';
import { IngredientType } from '@/domain/entities/Ingredient';

export class CookingService {
  // Tiempos de cocción en milisegundos para cada tipo de carne
  private static cookingTimes: Record<string, { cook: number; burn: number }> = {
    [IngredientType.CARNE_PASTOR]: { cook: 5000, burn: 10000 }, // 5s para cocer, 10s para quemar
    [IngredientType.CARNE_ASADA]: { cook: 6000, burn: 12000 },
    [IngredientType.CARNE_CARNITAS]: { cook: 7000, burn: 14000 },
    [IngredientType.CARNE_BARBACOA]: { cook: 8000, burn: 16000 },
    [IngredientType.PESCADO]: { cook: 4000, burn: 8000 },
    [IngredientType.CHORIZO]: { cook: 5000, burn: 10000 },
  };

  static createStation(id: string): CookingStation {
    return {
      id,
      item: null,
      isActive: false,
    };
  }

  static startCooking(
    station: CookingStation,
    ingredientType: IngredientType
  ): CookingStation {
    const times = this.cookingTimes[ingredientType];
    if (!times) {
      return station; // No se puede cocinar este ingrediente
    }

    const item: CookingItem = {
      ingredientType,
      state: CookingState.COOKING,
      startTime: Date.now(),
      cookingTime: times.cook,
      burnTime: times.burn,
      progress: 0,
    };

    return {
      ...station,
      item,
      isActive: true,
    };
  }

  static updateCooking(station: CookingStation): CookingStation {
    if (!station.item || station.item.state === CookingState.EMPTY) {
      return station;
    }

    const now = Date.now();
    const elapsed = now - station.item.startTime;
    const item = { ...station.item };

    // Calcular progreso
    if (elapsed < item.cookingTime) {
      // Aún cocinando
      item.progress = (elapsed / item.cookingTime) * 100;
      item.state = CookingState.COOKING;
    } else if (elapsed < item.burnTime) {
      // Cocido y listo
      item.progress = 100;
      item.state = CookingState.READY;
    } else {
      // Quemado
      item.progress = 100;
      item.state = CookingState.BURNED;
    }

    return {
      ...station,
      item,
    };
  }

  static removeFromGrill(station: CookingStation): { station: CookingStation; item: CookingItem | null } {
    const item = station.item;
    return {
      station: {
        ...station,
        item: null,
        isActive: false,
      },
      item,
    };
  }

  static canCook(ingredientType: IngredientType): boolean {
    return ingredientType in this.cookingTimes;
  }

  static getCookingProgress(station: CookingStation): number {
    if (!station.item) return 0;
    return station.item.progress;
  }

  static isReady(station: CookingStation): boolean {
    return station.item?.state === CookingState.READY;
  }

  static isBurned(station: CookingStation): boolean {
    return station.item?.state === CookingState.BURNED;
  }

  static isCooking(station: CookingStation): boolean {
    return station.item?.state === CookingState.COOKING;
  }
}

