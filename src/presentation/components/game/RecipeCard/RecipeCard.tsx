'use client';

import React from 'react';
import Image from 'next/image';
import { Recipe } from '@/domain/entities/Recipe';
import { IngredientService } from '@/application/services/IngredientService';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const ingredients = recipe.ingredients
    .map((type) => IngredientService.getIngredientByType(type))
    .filter(Boolean);

  return (
    <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl border-2 border-[#E91E63] relative overflow-hidden h-full flex flex-col">
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-[#E91E63]/10 rounded-full -mr-10 -mt-10" />
      
      <div className="relative z-10 flex flex-col h-full min-h-0">
        {/* Header con imagen y título */}
        <div className="flex items-start gap-2 sm:gap-3 mb-2 pb-2 border-b-2 border-gray-200 flex-shrink-0">
          <div className="relative flex-shrink-0">
            <Image
              src={recipe.imagePath}
              alt={recipe.name}
              width={48}
              height={48}
              className="object-contain pixelated rounded bg-gray-50 p-1"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-black text-[#E91E63] mb-0.5 leading-tight" style={{ fontFamily: 'monospace' }}>
              {recipe.name.toUpperCase()}
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-600 leading-tight line-clamp-2">
              {recipe.description}
            </p>
          </div>
        </div>

        {/* Lista de ingredientes con scroll interno */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
          <h4 className="font-bold text-gray-800 text-xs sm:text-sm mb-1.5 flex items-center gap-1" style={{ fontFamily: 'monospace' }}>
            <span className="text-[#E91E63]">📋</span>
            INGREDIENTES:
          </h4>
          <div className="space-y-1">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded px-2 py-1 border-l-2 border-[#E91E63]"
              >
                <span className="flex-shrink-0 w-5 h-5 bg-[#E91E63] text-white rounded-full flex items-center justify-center text-[10px] font-black" style={{ fontFamily: 'monospace' }}>
                  {index + 1}
                </span>
                {ingredient && (
                  <>
                    <Image
                      src={ingredient.imagePath}
                      alt={ingredient.name}
                      width={24}
                      height={24}
                      className="object-contain pixelated flex-shrink-0"
                      style={{ imageRendering: 'pixelated' }}
                    />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 flex-1 truncate" style={{ fontFamily: 'monospace' }}>
                      {ingredient.name.toUpperCase()}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
