import { Order } from './Order';
import { RecipeType } from './Recipe';

export enum GameState {
  MENU = 'menu',
  LEVEL_SELECT = 'level-select',
  PLAYING = 'playing',
  PAUSED = 'paused',
  GAME_OVER = 'game-over',
  VICTORY = 'victory',
}

export enum GameLevel {
  TUTORIAL = 1,
  EASY = 2,
  MEDIUM = 3,
  HARD = 4,
  EXPERT = 5,
}

export interface GameStats {
  score: number;
  coins: number;
  ordersCompleted: number;
  ordersFailed: number;
  perfectTacos: number;
  currentLevel: GameLevel;
  timeRemaining: number;
}

export interface Game {
  state: GameState;
  level: GameLevel;
  stats: GameStats;
  currentOrder: Order | null;
  ordersQueue: Order[];
  completedOrders: Order[];
  isPaused: boolean;
}

