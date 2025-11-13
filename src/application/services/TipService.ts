import { Customer } from '@/domain/entities/Customer';
import { TacoQuality } from './ValidationService';

export interface TipCalculation {
  baseTip: number;
  qualityBonus: number;
  timeBonus: number;
  customerMultiplier: number;
  totalTip: number;
}

export class TipService {
  static calculateTip(
    customer: Customer,
    quality: TacoQuality,
    timeTaken: number, // segundos
    timeLimit: number // segundos
  ): TipCalculation {
    // Base tip
    const baseTip = 10;

    // Quality bonus
    const qualityMultipliers = {
      perfect: 2.0,
      good: 1.5,
      regular: 1.0,
      bad: 0.3,
    };
    const qualityBonus = baseTip * (qualityMultipliers[quality] - 1);

    // Time bonus (más rápido = más propina)
    const timeRatio = timeTaken / timeLimit;
    const timeMultiplier = Math.max(0.5, 1.5 - timeRatio); // Si entregas en la mitad del tiempo, x2 propina
    const timeBonus = baseTip * (timeMultiplier - 1);

    // Customer multiplier
    const customerMultiplier = customer.tipMultiplier;

    // Total
    const totalTip = Math.round(
      (baseTip + qualityBonus + timeBonus) * customerMultiplier
    );

    return {
      baseTip,
      qualityBonus: Math.round(qualityBonus),
      timeBonus: Math.round(timeBonus),
      customerMultiplier,
      totalTip,
    };
  }

  static getTipMessage(tip: TipCalculation): string {
    if (tip.totalTip >= 30) {
      return '¡Propina generosa!';
    } else if (tip.totalTip >= 20) {
      return '¡Buena propina!';
    } else if (tip.totalTip >= 10) {
      return 'Propina estándar';
    } else {
      return 'Propina mínima';
    }
  }
}

