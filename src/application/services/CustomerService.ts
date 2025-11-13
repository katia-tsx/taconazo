import { Customer, CustomerMood, CustomerType } from '@/domain/entities/Customer';

export class CustomerService {
  static createCustomer(
    id: string,
    type: CustomerType = CustomerType.REGULAR
  ): Customer {
    const config = this.getCustomerConfig(type);
    
    return {
      id,
      type,
      mood: CustomerMood.NEUTRAL,
      patience: 100,
      patienceDecreaseRate: config.patienceDecreaseRate,
      tipMultiplier: config.tipMultiplier,
      orderTime: Date.now(),
    };
  }

  static updatePatience(
    customer: Customer,
    elapsedSeconds: number,
    timeLimit: number
  ): Customer {
    const patiencePercent = Math.max(
      0,
      100 - (elapsedSeconds / timeLimit) * 100
    );

    // Actualizar mood basado en paciencia
    let mood = CustomerMood.NEUTRAL;
    if (patiencePercent > 70) {
      mood = CustomerMood.HAPPY;
    } else if (patiencePercent > 40) {
      mood = CustomerMood.NEUTRAL;
    } else if (patiencePercent > 15) {
      mood = CustomerMood.IMPATIENT;
    } else {
      mood = CustomerMood.ANGRY;
    }

    return {
      ...customer,
      patience: patiencePercent,
      mood,
    };
  }

  static calculateTip(
    customer: Customer,
    quality: 'perfect' | 'good' | 'regular' | 'bad',
    timeTaken: number,
    timeLimit: number
  ): number {
    const qualityMultipliers = {
      perfect: 2.0,
      good: 1.5,
      regular: 1.0,
      bad: 0.5,
    };

    const timeMultiplier = Math.max(
      0.5,
      1.0 - (timeTaken / timeLimit) * 0.5
    ); // Menos tiempo = más propina

    const baseTip = 10;
    const qualityMultiplier = qualityMultipliers[quality];
    const totalMultiplier = qualityMultiplier * timeMultiplier * customer.tipMultiplier;

    return Math.round(baseTip * totalMultiplier);
  }

  private static getCustomerConfig(type: CustomerType) {
    switch (type) {
      case CustomerType.CLOSER:
        return {
          patienceDecreaseRate: 2.0, // Se impacienta más rápido
          tipMultiplier: 1.5, // Da más propina si está satisfecho
        };
      case CustomerType.PATIENT:
        return {
          patienceDecreaseRate: 0.5, // Se impacienta más lento
          tipMultiplier: 0.8, // Da menos propina pero es más tolerante
        };
      default:
        return {
          patienceDecreaseRate: 1.0,
          tipMultiplier: 1.0,
        };
    }
  }
}

