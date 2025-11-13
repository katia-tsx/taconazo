import { Ingredient, IngredientType } from '@/domain/entities/Ingredient';

export class IngredientService {
  private static ingredients: Ingredient[] = [
    {
      id: 'tortilla-1',
      type: IngredientType.TORTILLA,
      name: 'Tortilla',
      imagePath: '/game/ingredients/taco.png',
      category: 'base',
    },
    {
      id: 'carne-pastor-1',
      type: IngredientType.CARNE_PASTOR,
      name: 'Carne al Pastor',
      imagePath: '/game/ingredients/carne-al-pastor.png',
      category: 'protein',
    },
    {
      id: 'carne-asada-1',
      type: IngredientType.CARNE_ASADA,
      name: 'Carne Asada',
      imagePath: '/game/ingredients/carne-asada.png',
      category: 'protein',
    },
    {
      id: 'carne-carnitas-1',
      type: IngredientType.CARNE_CARNITAS,
      name: 'Carnitas',
      imagePath: '/game/ingredients/carne-carnitas.png',
      category: 'protein',
    },
    {
      id: 'carne-barbacoa-1',
      type: IngredientType.CARNE_BARBACOA,
      name: 'Barbacoa',
      imagePath: '/game/ingredients/carne-barbacoa.png',
      category: 'protein',
    },
    {
      id: 'pescado-1',
      type: IngredientType.PESCADO,
      name: 'Pescado',
      imagePath: '/game/ingredients/pescado.png',
      category: 'protein',
    },
    {
      id: 'chorizo-1',
      type: IngredientType.CHORIZO,
      name: 'Chorizo',
      imagePath: '/game/ingredients/chorizo.png',
      category: 'protein',
    },
    {
      id: 'lechuga-1',
      type: IngredientType.LECHUGA,
      name: 'Lechuga',
      imagePath: '/game/ingredients/lechuga.png',
      category: 'vegetable',
    },
    {
      id: 'cebolla-1',
      type: IngredientType.CEBOLLA,
      name: 'Cebolla',
      imagePath: '/game/ingredients/cebolla.png',
      category: 'vegetable',
    },
    {
      id: 'cilantro-1',
      type: IngredientType.CILANTRO,
      name: 'Cilantro',
      imagePath: '/game/ingredients/cilantro.png',
      category: 'vegetable',
    },
    {
      id: 'queso-1',
      type: IngredientType.QUESO,
      name: 'Queso',
      imagePath: '/game/ingredients/queso.png',
      category: 'topping',
    },
    {
      id: 'salsa-roja-1',
      type: IngredientType.SALSA_ROJA,
      name: 'Salsa Roja',
      imagePath: '/game/ingredients/salsa-roja..png',
      category: 'sauce',
    },
    {
      id: 'salsa-verde-1',
      type: IngredientType.SALSA_VERDE,
      name: 'Salsa Verde',
      imagePath: '/game/ingredients/salsa-verde.png',
      category: 'sauce',
    },
    {
      id: 'guacamole-1',
      type: IngredientType.GUACAMOLE,
      name: 'Guacamole',
      imagePath: '/game/ingredients/guacamole.png',
      category: 'sauce',
    },
    {
      id: 'limon-1',
      type: IngredientType.LIMON,
      name: 'Limón',
      imagePath: '/game/ingredients/limon.png',
      category: 'topping',
    },
    {
      id: 'tomate-1',
      type: IngredientType.TOMATE,
      name: 'Tomate',
      imagePath: '/game/ingredients/tomate.png',
      category: 'vegetable',
    },
    {
      id: 'crema-1',
      type: IngredientType.CREMA,
      name: 'Crema',
      imagePath: '/game/ingredients/crema.png',
      category: 'topping',
    },
  ];

  static getIngredientByType(type: IngredientType): Ingredient | undefined {
    return this.ingredients.find((i) => i.type === type);
  }

  static getAllIngredients(): Ingredient[] {
    return this.ingredients;
  }

  static getIngredientsByCategory(category: Ingredient['category']): Ingredient[] {
    return this.ingredients.filter((i) => i.category === category);
  }
}

