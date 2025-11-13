'use client';

import React from 'react';
import Image from 'next/image';
import { Ingredient } from '@/domain/entities/Ingredient';

interface IngredientSlotProps {
  ingredient: Ingredient | null;
  index: number;
  onDrop: (ingredient: Ingredient, index: number) => void;
  onRemove: (index: number) => void;
  isActive: boolean;
}

export const IngredientSlot: React.FC<IngredientSlotProps> = ({
  ingredient,
  index,
  onDrop,
  onRemove,
  isActive,
}) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add('ring-4', 'ring-[#E91E63]');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('ring-4', 'ring-[#E91E63]');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove('ring-4', 'ring-[#E91E63]');
    const ingredientData = e.dataTransfer.getData('ingredient');
    if (ingredientData) {
      const parsed = JSON.parse(ingredientData);
      onDrop(parsed, index);
    }
  };

  return (
    <div
      className={`
        relative w-20 h-20 md:w-24 md:h-24 border-4 rounded-xl flex items-center justify-center
        transition-all duration-200 shadow-lg
        ${isActive 
          ? ingredient 
            ? 'border-green-500 bg-green-50 shadow-green-200' 
            : 'border-[#E91E63] bg-[#FCE4EC] border-dashed'
          : 'border-gray-300 bg-gray-100 opacity-60'
        }
        ${!ingredient ? 'hover:border-[#C2185B] hover:bg-[#F8BBD0]' : ''}
      `}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {ingredient ? (
        <div className="relative w-full h-full group">
          <div className="absolute -top-1 -right-1 bg-[#E91E63] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center z-10">
            {index + 1}
          </div>
          <Image
            src={ingredient.imagePath}
            alt={ingredient.name}
            fill
            className="object-contain pixelated p-1"
            style={{ imageRendering: 'pixelated' }}
          />
          <button
            onClick={() => onRemove(index)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs font-bold hover:bg-red-600 hover:scale-110 z-20 shadow-lg"
            aria-label="Eliminar ingrediente"
          >
            ×
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[10px] font-bold text-center py-0.5 truncate px-1">
            {ingredient.name}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <span className={`text-xs md:text-sm font-bold ${isActive ? 'text-[#E91E63]' : 'text-gray-400'}`}>
            {index + 1}
          </span>
        </div>
      )}
    </div>
  );
};
