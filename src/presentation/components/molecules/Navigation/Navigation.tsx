import React from 'react';

export interface NavigationProps {
  items: string[];
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  className = '',
}) => {
  return (
    <nav className={`${className}`}>
      <ul className="flex gap-6 lg:gap-8">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-800 hover:text-[#E91E63] transition-colors font-bold text-sm md:text-base"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

