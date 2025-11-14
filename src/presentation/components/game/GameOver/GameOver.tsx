'use client';

import React from 'react';
import Image from 'next/image';
import { GameStats } from '@/domain/entities/Game';

interface GameOverProps {
  stats: GameStats;
  onRestart: () => void;
  onMenu: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({
  stats,
  onRestart,
  onMenu,
}) => {
  return (
    <div 
      className="h-screen w-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
      style={{
        backgroundImage: "url('/game/scenarios/game-over.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        maxHeight: '100vh',
        maxWidth: '100vw',
      }}
    >
      {/* Panel transparente con backdrop-filter */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 flex items-center justify-center">
        <div 
          className="bg-black/30 backdrop-blur-md rounded-3xl p-4 sm:p-5 md:p-6 border-2 border-white/20 relative flex flex-col items-center w-full"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Título Game Over */}
          <div className="mb-4 sm:mb-5 flex justify-center w-full">
            <Image
              src="/game/ui/titulo-game-over.png"
              alt="Game Over"
              width={600}
              height={150}
              className="mx-auto pixelated drop-shadow-2xl w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* Puntuación */}
          <div className="mb-5 sm:mb-6 flex flex-col items-center w-full">
            <p 
              className="text-xs sm:text-sm text-white/90 font-bold mb-2 uppercase pixel-font"
              style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
            >
              Puntuación Final
            </p>
            <p 
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white pixel-font pixel-text-shadow-xl leading-none"
              style={{ 
                fontFamily: 'monospace',
                textShadow: '4px 4px 0px rgba(0,0,0,0.9), 8px 8px 0px rgba(0,0,0,0.7)',
              }}
            >
              {stats.score}
            </p>
          </div>

          {/* Botones con imágenes pixel art */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
            <button
              onClick={onRestart}
              className="relative group transform transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <Image
                src="/game/ui/boton-reiniciar.png"
                alt="Reintentar"
                width={200}
                height={60}
                className="pixelated drop-shadow-xl mx-auto sm:mx-0"
                style={{ imageRendering: 'pixelated' }}
              />
            </button>
            <button
              onClick={onMenu}
              className="relative group transform transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <Image
                src="/game/ui/boton-menu.png"
                alt="Menú Principal"
                width={200}
                height={60}
                className="pixelated drop-shadow-xl mx-auto sm:mx-0"
                style={{ imageRendering: 'pixelated' }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
