'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Ingredient } from '@/domain/entities/Ingredient';

interface IngredientItemProps {
  ingredient: Ingredient;
  onDragStart: (ingredient: Ingredient) => void;
  disabled?: boolean;
}

export const IngredientItem: React.FC<IngredientItemProps> = ({
  ingredient,
  onDragStart,
  disabled = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    if (disabled) return;
    setIsDragging(true);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('ingredient', JSON.stringify(ingredient));
    onDragStart(ingredient);
    
    // Crear imagen de arrastre personalizada
    const dragImage = e.currentTarget.cloneNode(true) as HTMLElement;
    dragImage.style.opacity = '0.8';
    dragImage.style.transform = 'rotate(5deg)';
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 40, 40);
    setTimeout(() => document.body.removeChild(dragImage), 0);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const getCategoryColor = () => {
    switch (ingredient.category) {
      case 'base':
        return 'border-yellow-400 bg-yellow-50';
      case 'protein':
        return 'border-red-400 bg-red-50';
      case 'vegetable':
        return 'border-green-400 bg-green-50';
      case 'sauce':
        return 'border-orange-400 bg-orange-50';
      case 'topping':
        return 'border-purple-400 bg-purple-50';
      default:
        return 'border-gray-400 bg-gray-50';
    }
  };

  return (
    <div
      draggable={!disabled}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`
        relative w-20 h-20 md:w-24 md:h-24 bg-white border-2 rounded-xl flex items-center justify-center
        ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-grab active:cursor-grabbing'} 
        transition-all duration-200 shadow-md
        ${getCategoryColor()}
        ${!disabled && !isDragging ? 'hover:scale-110 hover:shadow-xl hover:z-10' : ''}
        ${isDragging ? 'opacity-50 scale-95' : ''}
      `}
    >
      <Image
        src={ingredient.imagePath}
        alt={ingredient.name}
        width={56}
        height={56}
        className="object-contain pixelated p-1"
        style={{ imageRendering: 'pixelated' }}
        draggable={false}
      />
      <div className="absolute -bottom-6 left-0 right-0 bg-black/80 text-white text-[10px] font-bold text-center py-1 rounded truncate px-1">
        {ingredient.name}
      </div>
    </div>
  );
};
