'use client';

import React from 'react';
import Image from 'next/image';
import { GameStats } from '@/domain/entities/Game';

interface VictoryProps {
  stats: GameStats;
  onNextLevel: () => void;
  onMenu: () => void;
}

export const Victory: React.FC<VictoryProps> = ({
  stats,
  onNextLevel,
  onMenu,
}) => {
  return (
    <div 
      className="h-screen w-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
      style={{
        backgroundImage: "url('/game/scenarios/game-win.jpg')",
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
          className="bg-black/30 backdrop-blur-md rounded-3xl p-2 sm:p-3 border-2 border-white/20 relative flex flex-col items-center w-full"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            maxHeight: '85vh',
            overflow: 'hidden',
          }}
        >
          {/* Título Victoria */}
          <div className="mb-2 sm:mb-3 flex justify-center w-full">
            <Image
              src="/game/ui/titulo-victoria.png"
              alt="Victoria"
              width={600}
              height={150}
              className="mx-auto pixelated drop-shadow-2xl w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* Estadísticas: Monedas, Órdenes, Puntuación - Sin cards, centrado y grande */}
          <div className="mb-3 sm:mb-4 w-full flex flex-col items-center gap-2 sm:gap-3">
            {/* Monedas */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Image
                src="/game/ui/icono-monedas.png"
                alt="Monedas"
                width={64}
                height={64}
                className="pixelated flex-shrink-0"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="flex flex-col items-center">
                <p 
                  className="text-xs sm:text-sm text-white/90 font-bold uppercase pixel-font mb-0.5"
                  style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
                >
                  Monedas
                </p>
                <p 
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-white pixel-font pixel-text-shadow leading-none"
                  style={{ 
                    fontFamily: 'monospace',
                    textShadow: '3px 3px 0px rgba(0,0,0,0.9), 6px 6px 0px rgba(0,0,0,0.7)',
                  }}
                >
                  {stats.coins}
                </p>
              </div>
            </div>

            {/* Órdenes */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Image
                src="/game/ui/icono-ordenes.png"
                alt="Órdenes"
                width={64}
                height={64}
                className="pixelated flex-shrink-0"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="flex flex-col items-center">
                <p 
                  className="text-xs sm:text-sm text-white/90 font-bold uppercase pixel-font mb-0.5"
                  style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
                >
                  Órdenes
                </p>
                <p 
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-white pixel-font pixel-text-shadow leading-none"
                  style={{ 
                    fontFamily: 'monospace',
                    textShadow: '3px 3px 0px rgba(0,0,0,0.9), 6px 6px 0px rgba(0,0,0,0.7)',
                  }}
                >
                  {stats.ordersCompleted}
                </p>
              </div>
            </div>

            {/* Puntuación */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Image
                src="/game/ui/icono-puntuacion.png"
                alt="Puntuación"
                width={64}
                height={64}
                className="pixelated flex-shrink-0"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="flex flex-col items-center">
                <p 
                  className="text-xs sm:text-sm text-white/90 font-bold uppercase pixel-font mb-0.5"
                  style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
                >
                  Puntuación
                </p>
                <p 
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-white pixel-font pixel-text-shadow leading-none"
                  style={{ 
                    fontFamily: 'monospace',
                    textShadow: '3px 3px 0px rgba(0,0,0,0.9), 6px 6px 0px rgba(0,0,0,0.7)',
                  }}
                >
                  {stats.score}
                </p>
              </div>
            </div>
          </div>

          {/* Botones con imágenes pixel art */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center w-full">
            <button
              onClick={onNextLevel}
              className="relative group transform transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <Image
                src="/game/ui/boton-jugar.png"
                alt="Siguiente Nivel"
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
