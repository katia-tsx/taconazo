import React from 'react';
import { PromotionCard } from '@/presentation/components/molecules/PromotionCard';
import { Promotion } from '@/domain/entities/Promotion';

export interface PromotionalSectionProps {
  promotions: Promotion[];
}

export const PromotionalSection: React.FC<PromotionalSectionProps> = ({
  promotions,
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {promotions.map((promotion) => (
            <PromotionCard key={promotion.id} promotion={promotion} />
          ))}
        </div>
      </div>
    </section>
  );
};

