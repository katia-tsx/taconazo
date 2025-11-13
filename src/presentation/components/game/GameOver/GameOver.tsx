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
        backgroundImage: "url('/game/scenarios/fondo-cocina.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        maxHeight: '100vh',
        maxWidth: '100vw',
      }}
    >
      {/* Overlay simple */}
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border-4 border-white/30 relative">
          {/* Imagen Game Over */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <Image
              src="/game/ui/game-over.png"
              alt="Game Over"
              width={400}
              height={300}
              className="mx-auto pixelated drop-shadow-2xl w-full max-w-[300px] sm:max-w-[400px]"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* Estadísticas simples */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            {/* Puntuación */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-2 border-white/20">
              <p 
                className="text-sm sm:text-base text-white/80 font-bold mb-2 uppercase text-center pixel-font"
                style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
              >
                Puntuación Final
              </p>
              <p 
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none text-center pixel-font pixel-text-shadow-xl"
                style={{ 
                  fontFamily: 'monospace',
                  textShadow: '4px 4px 0px rgba(0,0,0,0.8)',
                }}
              >
                {stats.score}
              </p>
            </div>

            {/* Grid de estadísticas */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border-2 border-white/20">
                <p 
                  className="text-xs sm:text-sm text-white/80 font-bold mb-1 uppercase text-center pixel-font"
                  style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
                >
                  Órdenes
                </p>
                <p 
                  className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none text-center pixel-font pixel-text-shadow"
                  style={{ 
                    fontFamily: 'monospace',
                    textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
                  }}
                >
                  {stats.ordersCompleted}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border-2 border-white/20">
                <p 
                  className="text-xs sm:text-sm text-white/80 font-bold mb-1 uppercase text-center pixel-font"
                  style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
                >
                  Perfectos
                </p>
                <p 
                  className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none text-center pixel-font pixel-text-shadow"
                  style={{ 
                    fontFamily: 'monospace',
                    textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
                  }}
                >
                  {stats.perfectTacos}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border-2 border-white/20">
                <p 
                  className="text-xs sm:text-sm text-white/80 font-bold mb-1 uppercase text-center pixel-font"
                  style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
                >
                  Monedas
                </p>
                <p 
                  className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none text-center pixel-font pixel-text-shadow"
                  style={{ 
                    fontFamily: 'monospace',
                    textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
                  }}
                >
                  {stats.coins}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border-2 border-white/20">
                <p 
                  className="text-xs sm:text-sm text-white/80 font-bold mb-1 uppercase text-center pixel-font"
                  style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
                >
                  Fallidas
                </p>
                <p 
                  className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none text-center pixel-font pixel-text-shadow"
                  style={{ 
                    fontFamily: 'monospace',
                    textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
                  }}
                >
                  {stats.ordersFailed}
                </p>
              </div>
            </div>
          </div>

          {/* Botones con imágenes pixel art */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={onRestart}
              className="relative group transform transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Image
                src="/game/ui/boton-reiniciar.png"
                alt="Reintentar"
                width={200}
                height={60}
                className="pixelated drop-shadow-xl"
                style={{ imageRendering: 'pixelated' }}
              />
            </button>
            <button
              onClick={onMenu}
              className="relative group transform transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Image
                src="/game/ui/boton-menu.png"
                alt="Menú Principal"
                width={200}
                height={60}
                className="pixelated drop-shadow-xl"
                style={{ imageRendering: 'pixelated' }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
