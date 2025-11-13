import { MenuItem } from '@/domain/entities/MenuItem';
import { TranslationService } from './TranslationService';

export class MenuService {
  static getMenuItems(): MenuItem[] {
    const menu = TranslationService.getSection('menu');
    const items = menu.items;

    return [
      {
        id: '1',
        name: items.tacoAlPastor,
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        category: 'tacos',
      },
      {
        id: '2',
        name: items.tacoDeCarnitas,
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        category: 'tacos',
      },
      {
        id: '3',
        name: items.tacoDeAsada,
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        category: 'tacos',
      },
      {
        id: '4',
        name: items.tacoDeBarbacoa,
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        category: 'tacos',
      },
      {
        id: '5',
        name: items.tacoDePescado,
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        category: 'tacos',
      },
      {
        id: '6',
        name: items.tacoDeChorizo,
        price: 2.50,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
        category: 'tacos',
      },
    ];
  }
}

