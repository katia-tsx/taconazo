import React from 'react';

export interface SelectProps {
  placeholder: string;
  options?: string[];
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  placeholder,
  options = [],
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      <select className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 appearance-none bg-white text-gray-800 font-medium focus:outline-none focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 transition-all">
        <option value="" disabled>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

