import React from 'react';
import { Logo } from '@/presentation/components/atoms/Logo';
import { Heading } from '@/presentation/components/atoms/Heading';
import { Text } from '@/presentation/components/atoms/Text';
import { Button } from '@/presentation/components/atoms/Button';
import { Icon } from '@/presentation/components/atoms/Icon';
import { TranslationService } from '@/application/services/TranslationService';

export const Footer: React.FC = () => {
  const footer = TranslationService.getSection('footer');

  return (
    <footer className="bg-[#E91E63] rounded-t-[3rem] md:rounded-t-[4rem] pt-16 md:pt-20 pb-10 md:pb-12 mt-16 md:mt-20">
      <div className="container mx-auto px-8 max-w-[1400px]">
        <div className="text-center mb-12 md:mb-16">
          <Heading level={2} className="text-white mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl font-black">
            {footer.title}
          </Heading>
          <Text className="text-white mb-7 md:mb-8 text-base md:text-lg lg:text-xl opacity-95">
            {footer.subtitle}
          </Text>
          <Button variant="secondary" className="px-7 md:px-8 py-3.5 md:py-4 text-base md:text-lg font-bold rounded-lg border-2 shadow-lg hover:shadow-xl transition-all">
            {footer.contactButton}
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-10 border-t border-white/30">
          <Logo variant="footer" />
          <div className="flex gap-6 md:gap-8 my-5 md:my-0">
            <a href="#" className="text-white hover:opacity-80 transition-opacity font-semibold text-sm md:text-base">{footer.terms}</a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity font-semibold text-sm md:text-base">{footer.about}</a>
            <a href="#" className="text-white hover:opacity-80 transition-opacity font-semibold text-sm md:text-base">{footer.policy}</a>
          </div>
          <div className="flex gap-4 md:gap-5">
            <a href="#" className="text-white hover:opacity-80 transition-all bg-white/10 rounded-full p-2.5 hover:bg-white/20">
              <Icon name="facebook" size={20} />
            </a>
            <a href="#" className="text-white hover:opacity-80 transition-all bg-white/10 rounded-full p-2.5 hover:bg-white/20">
              <Icon name="instagram" size={20} />
            </a>
            <a href="#" className="text-white hover:opacity-80 transition-all bg-white/10 rounded-full p-2.5 hover:bg-white/20">
              <Icon name="social" size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/30">
          <Text className="text-white text-xs md:text-sm lg:text-base opacity-90">
            {footer.copyright}
          </Text>
        </div>
      </div>
    </footer>
  );
};

