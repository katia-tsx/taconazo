import React from 'react';

export interface TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'small' | 'large';
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  className = '',
}) => {
  const variants = {
    body: 'text-base',
    small: 'text-sm',
    large: 'text-lg',
  };

  return (
    <p className={`${variants[variant]} ${className}`}>
      {children}
    </p>
  );
};

