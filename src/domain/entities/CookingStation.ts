export enum CookingState {
  EMPTY = 'empty',
  COOKING = 'cooking',
  READY = 'ready',
  BURNED = 'burned',
}

export interface CookingItem {
  ingredientType: string;
  state: CookingState;
  startTime: number;
  cookingTime: number; // Tiempo necesario para cocinar (ms)
  burnTime: number; // Tiempo antes de quemarse (ms)
  progress: number; // 0-100
}

export interface CookingStation {
  id: string;
  item: CookingItem | null;
  isActive: boolean;
}

