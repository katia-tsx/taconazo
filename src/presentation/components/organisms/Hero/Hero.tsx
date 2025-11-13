import React from 'react';
import { Heading } from '@/presentation/components/atoms/Heading';
import { Text } from '@/presentation/components/atoms/Text';
import { Button } from '@/presentation/components/atoms/Button';
import { TranslationService } from '@/application/services/TranslationService';
import Image from 'next/image';

export const Hero: React.FC = () => {
  const hero = TranslationService.getSection('hero');
  const common = TranslationService.getSection('common');

  return (
    <section className="bg-[#FCE4EC] py-16 md:py-24 pb-32 md:pb-40">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 lg:w-1/2">
            <Heading level={1} className="mb-5 md:mb-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] text-black">
              {hero.title}
            </Heading>
            <Text className="text-black mb-7 md:mb-8 text-base md:text-lg lg:text-xl leading-relaxed">
              {hero.subtitle}
            </Text>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button variant="primary" className="px-7 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all">
                {common.orderNow}
              </Button>
              <Button variant="outline" className="px-7 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-lg border-2 hover:shadow-lg transition-all">
                {common.seeMore}
              </Button>
            </div>
          </div>
          <div className="flex-1 lg:w-1/2 relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-xl lg:max-w-2xl mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80&fit=crop"
                alt="Taco delicioso con ingredientes frescos"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

