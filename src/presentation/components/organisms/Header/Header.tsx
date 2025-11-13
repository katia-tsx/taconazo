import React from 'react';
import { Logo } from '@/presentation/components/atoms/Logo';
import { Navigation } from '@/presentation/components/molecules/Navigation';
import { Icon } from '@/presentation/components/atoms/Icon';
import { TranslationService } from '@/application/services/TranslationService';

export const Header: React.FC = () => {
  const navigation = TranslationService.getSection('navigation');
  const navItems = [
    navigation.home,
    navigation.about,
    navigation.pages,
    navigation.menu,
    navigation.blog,
    navigation.contact,
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-8 py-5 max-w-[1400px]">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation items={navItems} className="hidden lg:flex" />
          <div className="flex gap-5 items-center">
            <button className="text-gray-700 hover:text-[#E91E63] transition-colors p-1.5">
              <Icon name="heart" size={22} />
            </button>
            <button className="text-gray-700 hover:text-[#E91E63] transition-colors p-1.5">
              <Icon name="cart" size={22} />
            </button>
            <button className="text-gray-700 hover:text-[#E91E63] transition-colors p-1.5">
              <Icon name="user" size={22} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

