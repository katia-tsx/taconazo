'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface PixelButtonProps {
  onClick: () => void;
  disabled?: boolean;
  imagePath?: string;
  fallbackText: string;
  fallbackIcon?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const PixelButton: React.FC<PixelButtonProps> = ({
  onClick,
  disabled = false,
  imagePath,
  fallbackText,
  fallbackIcon,
  className = '',
  variant = 'primary',
}) => {
  const [imageError, setImageError] = useState(false);

  const getFallbackStyles = () => {
    if (variant === 'primary') {
      return {
        background: 'linear-gradient(to right, #E91E63, #C2185B, #E91E63)',
        border: '4px solid #AD1457',
        color: '#FFFFFF',
      };
    } else {
      return {
        background: 'linear-gradient(to right, #757575, #616161, #757575)',
        border: '4px solid #424242',
        color: '#FFFFFF',
      };
    }
  };

  if (imageError || !imagePath) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg md:text-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${className}`}
        style={{
          ...getFallbackStyles(),
          fontFamily: 'monospace',
          letterSpacing: '0.1em',
          boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
          textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
        }}
      >
        <span className="flex items-center justify-center gap-2">
          {fallbackIcon && <span>{fallbackIcon}</span>}
          {fallbackText}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative group transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${className}`}
    >
      <Image
        src={imagePath}
        alt={fallbackText}
        width={400}
        height={120}
        className="h-auto pixelated"
        style={{
          imageRendering: 'pixelated',
          filter: disabled ? 'grayscale(100%) opacity(0.5)' : 'none',
          width: 'auto',
          height: 'clamp(100px, 12vh, 140px)',
        }}
        onError={() => setImageError(true)}
      />
    </button>
  );
};

