import React from 'react';
import { MenuItem } from '@/domain/entities/MenuItem';
import { Icon } from '@/presentation/components/atoms/Icon';
import Image from 'next/image';

export interface MenuCardProps {
  item: MenuItem;
  onAddToCart?: (item: MenuItem) => void;
  onAddToWishlist?: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  item,
  onAddToCart,
  onAddToWishlist,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="relative w-full h-52 md:h-56 lg:h-60 flex items-center justify-center">
        <div className="relative w-full h-full max-w-full mx-auto">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded-t-2xl"
          />
          <div className="absolute top-3 right-3 flex gap-2 z-10">
            <button
              onClick={() => onAddToWishlist?.(item)}
              className="bg-white/95 backdrop-blur-sm text-[#E91E63] hover:bg-white hover:text-[#C2185B] transition-all rounded-full p-2 shadow-lg hover:shadow-xl hover:scale-110"
            >
              <Icon name="heart" size={18} />
            </button>
            <button
              onClick={() => onAddToCart?.(item)}
              className="bg-white/95 backdrop-blur-sm text-[#E91E63] hover:bg-white hover:text-[#C2185B] transition-all rounded-full p-2 shadow-lg hover:shadow-xl hover:scale-110"
            >
              <Icon name="cart" size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="p-5 md:p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-black text-lg md:text-xl lg:text-2xl text-black mb-1.5">{item.name}</h3>
            <p className="text-[#E91E63] font-black text-lg md:text-xl">${item.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

