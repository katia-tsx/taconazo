import React from 'react';
import { Promotion } from '@/domain/entities/Promotion';
import { Button } from '@/presentation/components/atoms/Button';
import Image from 'next/image';

export interface PromotionCardProps {
  promotion: Promotion;
  onClick?: () => void;
}

export const PromotionCard: React.FC<PromotionCardProps> = ({
  promotion,
  onClick,
}) => {
  return (
    <div
      className="rounded-2xl p-6 md:p-7 text-white relative overflow-hidden min-h-[480px] md:min-h-[520px] flex flex-col shadow-xl"
      style={{ backgroundColor: promotion.backgroundColor }}
    >
      {promotion.discount && (
        <div className="absolute top-5 right-5 bg-white text-black rounded-full px-4 py-2 text-[10px] md:text-xs font-black z-10 whitespace-nowrap shadow-lg">
          {promotion.discount}
        </div>
      )}
      <div className="flex-1 flex flex-col">
        <div className="mb-5">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2 leading-tight">{promotion.title}</h3>
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">{promotion.subtitle}</h4>
          {promotion.description && (
            <p className="text-sm md:text-base opacity-95 mb-4 font-medium">{promotion.description}</p>
          )}
        </div>
        <div className="relative w-full h-60 md:h-64 mb-6 flex-1 flex items-center justify-center">
          <div className="relative w-full h-full max-w-full mx-auto">
            <Image
              src={promotion.image}
              alt={promotion.subtitle}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <button
          onClick={onClick}
          className="w-full mt-auto bg-white text-center py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          style={{ 
            color: promotion.backgroundColor,
          }}
        >
          {promotion.buttonText}
        </button>
      </div>
    </div>
  );
};

