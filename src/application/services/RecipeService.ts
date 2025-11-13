import { Recipe, RecipeType } from '@/domain/entities/Recipe';
import { IngredientType } from '@/domain/entities/Ingredient';

export class RecipeService {
  private static recipes: Recipe[] = [
    {
      id: 'pastor-1',
      type: RecipeType.PASTOR,
      name: 'Taco al Pastor',
      ingredients: [
        IngredientType.TORTILLA,
        IngredientType.CARNE_PASTOR,
        IngredientType.CEBOLLA,
        IngredientType.CILANTRO,
        IngredientType.SALSA_ROJA,
      ],
      imagePath: '/game/carte/receta-pastor.png',
      description: 'Taco tradicional con carne al pastor',
    },
    {
      id: 'asada-1',
      type: RecipeType.ASADA,
      name: 'Taco de Asada',
      ingredients: [
        IngredientType.TORTILLA,
        IngredientType.CARNE_ASADA,
        IngredientType.CEBOLLA,
        IngredientType.CILANTRO,
        IngredientType.SALSA_VERDE,
      ],
      imagePath: '/game/carte/receta-asada.png',
      description: 'Taco con carne asada a la parrilla',
    },
    {
      id: 'carnitas-1',
      type: RecipeType.CARNITAS,
      name: 'Taco de Carnitas',
      ingredients: [
        IngredientType.TORTILLA,
        IngredientType.CARNE_CARNITAS,
        IngredientType.CEBOLLA,
        IngredientType.CILANTRO,
        IngredientType.SALSA_ROJA,
      ],
      imagePath: '/game/carte/receta-carnitas..png',
      description: 'Taco con carnitas de cerdo',
    },
    {
      id: 'barbacoa-1',
      type: RecipeType.BARBACOA,
      name: 'Taco de Barbacoa',
      ingredients: [
        IngredientType.TORTILLA,
        IngredientType.CARNE_BARBACOA,
        IngredientType.CEBOLLA,
        IngredientType.CILANTRO,
        IngredientType.LIMON,
      ],
      imagePath: '/game/carte/receta-barbacoa.png',
      description: 'Taco con barbacoa cocida lentamente',
    },
    {
      id: 'pescado-1',
      type: RecipeType.PESCADO,
      name: 'Taco de Pescado',
      ingredients: [
        IngredientType.TORTILLA,
        IngredientType.PESCADO,
        IngredientType.LECHUGA,
        IngredientType.SALSA_VERDE,
        IngredientType.LIMON,
      ],
      imagePath: '/game/carte/receta-pescado.png',
      description: 'Taco con pescado empanizado',
    },
    {
      id: 'chorizo-1',
      type: RecipeType.CHORIZO,
      name: 'Taco de Chorizo',
      ingredients: [
        IngredientType.TORTILLA,
        IngredientType.CHORIZO,
        IngredientType.CEBOLLA,
        IngredientType.QUESO,
        IngredientType.SALSA_ROJA,
      ],
      imagePath: '/game/carte/orden-papel.png',
      description: 'Taco con chorizo especiado',
    },
  ];

  static getRecipeByType(type: RecipeType): Recipe | undefined {
    return this.recipes.find((r) => r.type === type);
  }

  static getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  static getRandomRecipe(): Recipe {
    const randomIndex = Math.floor(Math.random() * this.recipes.length);
    return this.recipes[randomIndex];
  }
}

