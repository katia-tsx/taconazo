import React from 'react';
import { Heading } from '@/presentation/components/atoms/Heading';
import { Text } from '@/presentation/components/atoms/Text';
import { Button } from '@/presentation/components/atoms/Button';
import { Service } from '@/domain/entities/Service';
import { TranslationService } from '@/application/services/TranslationService';
import Image from 'next/image';

export interface ServicesSectionProps {
  service: Service;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ service }) => {
  const services = TranslationService.getSection('services');
  const common = TranslationService.getSection('common');

  return (
    <section className="bg-[#FFF8E1] py-16 md:py-24">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 relative w-full">
            <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center">
              <div className="relative w-full h-full max-w-lg lg:max-w-xl mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[380px] h-[380px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full bg-[#C2185B] opacity-25 absolute"></div>
                  <div className="relative z-10 w-full h-full">
                    <Image
                      src="/chef.png"
                      alt="Chef con taco"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Heading level={2} highlight={services.highlight} className="mb-5 md:mb-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
              {services.title}
            </Heading>
            <Text className="text-black mb-8 md:mb-10 text-base md:text-lg lg:text-xl leading-relaxed">
              {services.description}
            </Text>
            <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10">
              <div>
                <p className="text-[#E91E63] font-black text-3xl md:text-4xl lg:text-5xl mb-2">{service.satisfiedCustomers}</p>
                <p className="text-black text-xs md:text-sm lg:text-base font-medium">{services.satisfiedCustomers}</p>
              </div>
              <div>
                <p className="text-[#E91E63] font-black text-3xl md:text-4xl lg:text-5xl mb-2">{service.foodCategories}</p>
                <p className="text-black text-xs md:text-sm lg:text-base font-medium">{services.foodCategories}</p>
              </div>
              <div>
                <p className="text-[#E91E63] font-black text-3xl md:text-4xl lg:text-5xl mb-2">{service.awards}</p>
                <p className="text-black text-xs md:text-sm lg:text-base font-medium">{services.awards}</p>
              </div>
            </div>
            <Button variant="primary" className="px-7 md:px-8 py-3.5 md:py-4 text-base md:text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all">
              {common.orderNow}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

