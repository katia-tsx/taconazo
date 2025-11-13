import { Promotion } from '@/domain/entities/Promotion';
import { TranslationService } from './TranslationService';

export class PromotionService {
  static getPromotions(): Promotion[] {
    const promotions = TranslationService.getSection('promotions');
    const common = TranslationService.getSection('common');

    return [
      {
        id: '1',
        title: promotions.promotion1.title,
        subtitle: promotions.promotion1.subtitle,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        backgroundColor: '#FF9800',
        discount: promotions.promotion1.discount,
        buttonText: promotions.promotion1.buttonText,
      },
      {
        id: '2',
        title: promotions.promotion2.title,
        subtitle: promotions.promotion2.subtitle,
        description: promotions.promotion2.description,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        backgroundColor: '#8B4513',
        buttonText: promotions.promotion2.buttonText,
      },
      {
        id: '3',
        title: promotions.promotion3.title,
        subtitle: promotions.promotion3.subtitle,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        backgroundColor: '#2C2C2C',
        discount: promotions.promotion3.discount,
        buttonText: promotions.promotion3.buttonText,
      },
    ];
  }
}

