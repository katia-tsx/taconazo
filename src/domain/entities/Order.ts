import { RecipeType } from './Recipe';
import { IngredientType } from './Ingredient';
import { CustomerType } from './Customer';

export interface Order {
  id: string;
  recipeType: RecipeType;
  timeLimit: number; // en segundos
  customerId: string;
  customerType?: CustomerType;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  startTime?: number;
}

export interface TacoAssembly {
  ingredients: IngredientType[];
  orderId: string;
}

