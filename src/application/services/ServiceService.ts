import { Service } from '@/domain/entities/Service';

export class ServiceService {
  static getService(): Service {
    return {
      satisfiedCustomers: '250+',
      foodCategories: '13+',
      awards: '20+',
    };
  }
}

