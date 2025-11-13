import { IngredientType } from '@/domain/entities/Ingredient';
import { Recipe } from '@/domain/entities/Recipe';

export enum TacoQuality {
  PERFECT = 'perfect',
  GOOD = 'good',
  REGULAR = 'regular',
  BAD = 'bad',
}

export interface ValidationResult {
  quality: TacoQuality;
  score: number;
  coins: number;
  correctIngredients: number;
  correctOrder: boolean;
  message: string;
}

export class ValidationService {
  static validateTaco(
    selectedIngredients: IngredientType[],
    recipe: Recipe
  ): ValidationResult {
    const expectedIngredients = recipe.ingredients;
    let correctIngredients = 0;
    let correctOrder = true;

    // Verificar orden y ingredientes correctos
    for (let i = 0; i < expectedIngredients.length; i++) {
      if (i < selectedIngredients.length) {
        if (selectedIngredients[i] === expectedIngredients[i]) {
          correctIngredients++;
        } else {
          correctOrder = false;
        }
      } else {
        correctOrder = false;
      }
    }

    // Verificar ingredientes extra o incorrectos
    const hasExtraIngredients = selectedIngredients.length > expectedIngredients.length;
    const hasWrongIngredients = selectedIngredients.some(
      (ing, index) => index < expectedIngredients.length && ing !== expectedIngredients[index]
    );

    // Calcular calidad y puntuación
    let quality: TacoQuality;
    let score: number;
    let coins: number;
    let message: string;

    if (
      correctIngredients === expectedIngredients.length &&
      selectedIngredients.length === expectedIngredients.length &&
      correctOrder
    ) {
      quality = TacoQuality.PERFECT;
      score = 100;
      coins = 10;
      message = '¡Taco Perfecto!';
    } else if (
      correctIngredients >= expectedIngredients.length * 0.8 &&
      !hasWrongIngredients
    ) {
      quality = TacoQuality.GOOD;
      score = 50;
      coins = 5;
      message = '¡Buen taco!';
    } else if (
      correctIngredients >= expectedIngredients.length * 0.5 &&
      !hasWrongIngredients
    ) {
      quality = TacoQuality.REGULAR;
      score = 25;
      coins = 2;
      message = 'Taco regular';
    } else {
      quality = TacoQuality.BAD;
      score = -10;
      coins = 0;
      message = 'Taco incorrecto';
    }

    return {
      quality,
      score,
      coins,
      correctIngredients,
      correctOrder,
      message,
    };
  }
}

