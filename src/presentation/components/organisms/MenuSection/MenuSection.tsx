import React from 'react';
import { Heading } from '@/presentation/components/atoms/Heading';
import { MenuCard } from '@/presentation/components/molecules/MenuCard';
import { Icon } from '@/presentation/components/atoms/Icon';
import { MenuItem } from '@/domain/entities/MenuItem';
import { TranslationService } from '@/application/services/TranslationService';

export interface MenuSectionProps {
  items: MenuItem[];
  onAddToCart?: (item: MenuItem) => void;
  onAddToWishlist?: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  onAddToCart,
  onAddToWishlist,
}) => {
  const menu = TranslationService.getSection('menu');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <div className="flex justify-between items-center mb-10 md:mb-12">
          <Heading level={2} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black">
            {menu.title}
          </Heading>
          <div className="flex gap-2.5 md:gap-3">
            <button className="bg-white border-2 border-gray-300 rounded-full p-2.5 md:p-3 hover:border-[#E91E63] transition-all w-11 h-11 md:w-12 md:h-12 flex items-center justify-center hover:shadow-md">
              <Icon name="arrow-left" size={20} />
            </button>
            <button className="bg-[#E91E63] text-white rounded-full p-2.5 md:p-3 hover:bg-[#C2185B] transition-all w-11 h-11 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:shadow-xl">
              <Icon name="arrow-right" size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

