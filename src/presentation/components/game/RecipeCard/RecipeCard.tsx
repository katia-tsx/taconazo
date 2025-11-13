'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Recipe } from '@/domain/entities/Recipe';
import { IngredientService } from '@/application/services/IngredientService';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ingredients = recipe.ingredients
    .map((type) => IngredientService.getIngredientByType(type))
    .filter(Boolean);

  return (
    <>
      <div className="bg-black/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl border-4 border-yellow-500/50 relative overflow-hidden flex flex-col h-full">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-500/10 rounded-full -ml-12 -mt-12 sm:-ml-16 sm:-mt-16" />
      
      <div className="relative z-10 flex flex-col h-full min-h-0">
        {/* Header con imagen y título */}
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b-4 border-yellow-500/30 flex-shrink-0">
          <div 
            className="relative flex-shrink-0 cursor-pointer hover:scale-110 transition-transform duration-300 group"
            onClick={() => setIsExpanded(true)}
          >
            <div className="absolute inset-0 bg-yellow-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image
              src={recipe.imagePath}
              alt={recipe.name}
              width={80}
              height={80}
              className="object-contain pixelated rounded-lg bg-yellow-500/20 p-2 border-2 border-yellow-500/50 relative z-10"
              style={{ imageRendering: 'pixelated' }}
            />
            <div className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs font-black rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pixel-font" style={{ fontFamily: 'monospace' }}>
              👁️
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-yellow-400 mb-1 leading-tight pixel-font pixel-text-shadow" style={{ 
              fontFamily: 'monospace',
              textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
            }}>
              {recipe.name.toUpperCase()}
            </h3>
            <p className="text-xs sm:text-sm text-yellow-300/80 leading-tight line-clamp-2 pixel-font">
              {recipe.description}
            </p>
          </div>
        </div>

        {/* Lista de ingredientes con scroll interno */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
          <h4 className="font-black text-yellow-400 text-sm sm:text-base mb-2 sm:mb-3 flex items-center gap-2 pixel-font pixel-text-shadow" style={{ fontFamily: 'monospace' }}>
            <span className="text-2xl">📋</span>
            INGREDIENTES:
          </h4>
          <div className="space-y-2 sm:space-y-2.5">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 bg-yellow-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-yellow-500/40"
              >
                <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-yellow-500 text-black rounded-full flex items-center justify-center text-xs sm:text-sm font-black pixel-font border-2 border-yellow-400" style={{ fontFamily: 'monospace' }}>
                  {index + 1}
                </span>
                {ingredient && (
                  <>
                    <div className="relative flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                      <Image
                        src={ingredient.imagePath}
                        alt={ingredient.name}
                        fill
                        className="object-contain pixelated"
                        style={{ imageRendering: 'pixelated' }}
                      />
                    </div>
                    <span className="text-sm sm:text-base font-black text-yellow-300 flex-1 truncate pixel-font pixel-text-shadow" style={{ fontFamily: 'monospace' }}>
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

    {/* Modal expandido - solo imagen */}
    {isExpanded && (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
        onClick={() => setIsExpanded(false)}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      >
        <div 
          className="relative max-w-4xl w-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón cerrar */}
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 bg-yellow-500 text-black font-black hover:bg-yellow-400 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 pixel-font rounded-full w-12 h-12 flex items-center justify-center z-20"
            style={{ 
              fontFamily: 'monospace',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              border: '4px solid #000000',
            }}
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* Imagen expandida */}
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500/20 rounded-3xl blur-3xl scale-150" />
            <Image
              src={recipe.imagePath}
              alt={recipe.name}
              width={600}
              height={600}
              className="relative z-10 object-contain pixelated rounded-3xl border-4 border-yellow-500/70 bg-black/40 p-8 shadow-2xl"
              style={{ 
                imageRendering: 'pixelated',
                maxWidth: '90vw',
                maxHeight: '90vh',
              }}
            />
          </div>
        </div>
      </div>
    )}
    </>
  );
};
