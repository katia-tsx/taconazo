import React from 'react';
import { Select } from '@/presentation/components/atoms/Select';
import { Icon } from '@/presentation/components/atoms/Icon';
import { TranslationService } from '@/application/services/TranslationService';

export interface SearchBarProps {
  onSearch?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const search = TranslationService.getSection('search');

  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 flex flex-col md:flex-row gap-4 md:gap-5 items-end max-w-6xl mx-auto border border-gray-100">
      <div className="flex-1 w-full">
        <label className="block text-sm font-bold text-gray-900 mb-2.5">{search.food}</label>
        <Select placeholder={search.select} />
      </div>
      <div className="flex-1 w-full">
        <label className="block text-sm font-bold text-gray-900 mb-2.5">{search.product}</label>
        <Select placeholder={search.select} />
      </div>
      <div className="flex-1 w-full">
        <label className="block text-sm font-bold text-gray-900 mb-2.5">{search.price}</label>
        <Select placeholder={search.priceRange} />
      </div>
      <button
        onClick={onSearch}
        className="bg-[#E91E63] text-white rounded-full p-3.5 md:p-4 hover:bg-[#C2185B] transition-all flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
      >
        <Icon name="search" size={22} className="text-white" />
      </button>
    </div>
  );
};

