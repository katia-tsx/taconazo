export enum CustomerMood {
  HAPPY = 'happy',
  NEUTRAL = 'neutral',
  IMPATIENT = 'impatient',
  ANGRY = 'angry',
}

export enum CustomerType {
  REGULAR = 'regular',
  CLOSER = 'closer', // Más exigente
  PATIENT = 'patient', // Más paciente
}

export interface Customer {
  id: string;
  type: CustomerType;
  mood: CustomerMood;
  patience: number; // 0-100
  patienceDecreaseRate: number; // Cuánto disminuye por segundo
  tipMultiplier: number; // Multiplicador de propina (0.5 - 2.0)
  orderTime: number; // Tiempo en que llegó la orden
}
