import React from 'react';

export interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  highlight?: string;
  highlightColor?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  className = '',
  highlight,
  highlightColor = 'text-[#E91E63]',
}) => {
  const baseStyles = 'font-bold text-black';
  const sizes = {
    1: 'text-5xl md:text-6xl',
    2: 'text-4xl md:text-5xl',
    3: 'text-3xl md:text-4xl',
    4: 'text-2xl md:text-3xl',
    5: 'text-xl md:text-2xl',
    6: 'text-lg md:text-xl',
  };

  const content = highlight && typeof children === 'string' ? (
    <>
      {children.split(new RegExp(`(${highlight})`, 'gi')).map((part, index) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className={highlightColor}>{part}</span>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </>
  ) : children;

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className={`${baseStyles} ${sizes[level]} ${className}`}>
      {content}
    </Tag>
  );
};

