export enum IngredientType {
  TORTILLA = 'tortilla',
  CARNE_PASTOR = 'carne-al-pastor',
  CARNE_ASADA = 'carne-asada',
  CARNE_CARNITAS = 'carne-carnitas',
  CARNE_BARBACOA = 'carne-barbacoa',
  PESCADO = 'pescado',
  CHORIZO = 'chorizo',
  LECHUGA = 'lechuga',
  CEBOLLA = 'cebolla',
  CILANTRO = 'cilantro',
  QUESO = 'queso',
  SALSA_ROJA = 'salsa-roja',
  SALSA_VERDE = 'salsa-verde',
  GUACAMOLE = 'guacamole',
  LIMON = 'limon',
  TOMATE = 'tomate',
  CREMA = 'crema',
}

export interface Ingredient {
  id: string;
  type: IngredientType;
  name: string;
  imagePath: string;
  category: 'base' | 'protein' | 'vegetable' | 'sauce' | 'topping';
}

