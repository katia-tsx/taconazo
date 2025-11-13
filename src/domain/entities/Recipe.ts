import { IngredientType } from './Ingredient';

export enum RecipeType {
  PASTOR = 'pastor',
  ASADA = 'asada',
  CARNITAS = 'carnitas',
  BARBACOA = 'barbacoa',
  PESCADO = 'pescado',
  CHORIZO = 'chorizo',
}

export interface Recipe {
  id: string;
  type: RecipeType;
  name: string;
  ingredients: IngredientType[];
  imagePath: string;
  description: string;
}

