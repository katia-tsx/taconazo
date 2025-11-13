'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Ingredient } from '@/domain/entities/Ingredient';

interface IngredientDockProps {
  ingredients: Ingredient[];
  onDragStart: (ingredient: Ingredient) => void;
}

export const IngredientDock: React.FC<IngredientDockProps> = ({
  ingredients,
  onDragStart,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    handleScroll();
    const interval = setInterval(handleScroll, 100);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ingredients]);

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black/95 via-black/85 to-black/70 pb-2 sm:pb-2.5 pt-3 sm:pt-4 border-t-4 border-[#E91E63]/50 flex items-center"
      style={{
        height: '120px',
        maxHeight: '120px',
        minHeight: '120px',
      }}
    >
      {/* Flecha izquierda */}
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#E91E63]/80 backdrop-blur-md rounded-full p-2 sm:p-3 hover:bg-[#E91E63] transition-all z-20 shadow-xl border-2 border-white/30"
          aria-label="Scroll izquierda"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-lg"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* Contenedor scrollable */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-12 sm:px-16 md:px-20"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.id}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.effectAllowed = 'move';
              e.dataTransfer.setData('ingredient', JSON.stringify(ingredient));
              onDragStart(ingredient);
            }}
            className="flex-shrink-0 group cursor-grab active:cursor-grabbing transform transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 border-3 border-white/60 shadow-xl hover:shadow-2xl hover:border-[#E91E63] transition-all relative"
              style={{
                boxShadow: '0 4px 12px rgba(0,0,0,0.3), 0 2px 4px rgba(233,30,99,0.2)'
              }}
            >
              <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 relative">
                <Image
                  src={ingredient.imagePath}
                  alt={ingredient.name}
                  fill
                  className="object-contain pixelated"
                  style={{ imageRendering: 'pixelated' }}
                  draggable={false}
                />
              </div>
              <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/20">
                {ingredient.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flecha derecha */}
      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#E91E63]/80 backdrop-blur-md rounded-full p-2 sm:p-3 hover:bg-[#E91E63] transition-all z-20 shadow-xl border-2 border-white/30"
          aria-label="Scroll derecha"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-lg"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
    </div>
  );
};

