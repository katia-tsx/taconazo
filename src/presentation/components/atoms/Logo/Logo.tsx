import React from 'react';
import Image from 'next/image';

export interface LogoProps {
  variant?: 'default' | 'footer';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  const isFooter = variant === 'footer';
  const logoSrc = isFooter ? '/logo-blanco.png' : '/logo-rosado.png';
  
  return (
    <div className={`${className} flex items-center`}>
      <Image
        src={logoSrc}
        alt="Taco Nazo Logo"
        width={140}
        height={70}
        className="object-contain"
        priority
      />
    </div>
  );
};

