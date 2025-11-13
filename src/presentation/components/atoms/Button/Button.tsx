import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-colors';
  
  const variants = {
    primary: 'bg-[#E91E63] text-white hover:bg-[#C2185B]',
    secondary: 'bg-white text-[#E91E63] border-2 border-[#E91E63] hover:bg-[#E91E63] hover:text-white',
    outline: 'bg-white text-[#E91E63] border-2 border-[#E91E63] hover:bg-[#E91E63] hover:text-white',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

