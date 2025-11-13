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
      className="h-screen w-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden"
      style={{
        backgroundImage: "url('/game/scenarios/fondo-cocina.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay con gradiente colorido y alegre */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/80 via-yellow-400/70 to-green-500/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,0.1)_100%)]" />
      
      {/* Decoraciones animadas de fondo */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      {/* Confetti effect simulado */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 w-full max-w-4xl">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border-4 border-yellow-400/80 relative overflow-hidden">
          {/* Decoración superior colorida */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-green-400 to-yellow-400" />
          
          {/* Imagen Victoria */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/40 rounded-full blur-2xl scale-150 animate-pulse" />
              <Image
                src="/game/ui/victoria.png"
                alt="Victoria"
                width={300}
                height={200}
                className="relative mx-auto pixelated drop-shadow-2xl w-full max-w-[250px] sm:max-w-[300px]"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>

          {/* Título principal celebratorio */}
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-green-600 mb-2 sm:mb-4 text-center"
            style={{ 
              fontFamily: 'monospace', 
              letterSpacing: '0.15em',
              textShadow: '4px 4px 0px rgba(0,0,0,0.3), 8px 8px 0px rgba(34,197,94,0.2)',
              lineHeight: '1.2'
            }}
          >
            ¡NIVEL COMPLETADO!
          </h2>
          
          <p 
            className="text-xl sm:text-2xl md:text-3xl font-black text-yellow-600 mb-6 sm:mb-8 text-center"
            style={{ 
              fontFamily: 'monospace', 
              letterSpacing: '0.1em',
              textShadow: '2px 2px 0px rgba(0,0,0,0.2)'
            }}
          >
            🎉 ¡EXCELENTE TRABAJO! 🎉
          </p>

          {/* Estadísticas principales */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
            {/* Puntuación destacada */}
            <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50 rounded-2xl p-5 sm:p-6 border-4 border-pink-400 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-400/20 rounded-full -mr-12 -mt-12" />
              <div className="relative z-10">
                <p 
                  className="text-sm sm:text-base text-gray-700 font-bold mb-2 uppercase tracking-wider"
                  style={{ fontFamily: 'monospace', letterSpacing: '0.2em' }}
                >
                  Puntuación Final
                </p>
                <p 
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-[#E91E63] leading-none"
                  style={{ 
                    fontFamily: 'monospace',
                    textShadow: '3px 3px 0px rgba(0,0,0,0.2), 6px 6px 0px rgba(233,30,99,0.3)'
                  }}
                >
                  {stats.score}
                </p>
              </div>
            </div>

            {/* Grid de estadísticas */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Órdenes Completadas */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 border-3 border-green-400 shadow-lg relative overflow-hidden group hover:scale-105 transition-transform">
                <div className="absolute top-0 right-0 w-16 h-16 bg-green-400/20 rounded-full -mr-8 -mt-8" />
                <div className="relative z-10">
                  <p 
                    className="text-xs sm:text-sm text-gray-700 font-bold mb-1 uppercase"
                    style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
                  >
                    Órdenes Completadas
                  </p>
                  <p 
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-green-600 leading-none"
                    style={{ 
                      fontFamily: 'monospace',
                      textShadow: '2px 2px 0px rgba(0,0,0,0.2)'
                    }}
                  >
                    {stats.ordersCompleted}
                  </p>
                </div>
              </div>

              {/* Tacos Perfectos */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 border-3 border-yellow-400 shadow-lg relative overflow-hidden group hover:scale-105 transition-transform">
                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/20 rounded-full -mr-8 -mt-8" />
                <div className="relative z-10">
                  <p 
                    className="text-xs sm:text-sm text-gray-700 font-bold mb-1 uppercase"
                    style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
                  >
                    Tacos Perfectos
                  </p>
                  <p 
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-600 leading-none"
                    style={{ 
                      fontFamily: 'monospace',
                      textShadow: '2px 2px 0px rgba(0,0,0,0.2)'
                    }}
                  >
                    {stats.perfectTacos}
                  </p>
                </div>
              </div>

              {/* Monedas Ganadas */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 border-3 border-amber-400 shadow-lg relative overflow-hidden group hover:scale-105 transition-transform">
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-400/20 rounded-full -mr-8 -mt-8" />
                <div className="relative z-10">
                  <p 
                    className="text-xs sm:text-sm text-gray-700 font-bold mb-1 uppercase"
                    style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
                  >
                    Monedas Ganadas
                  </p>
                  <p 
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-700 leading-none"
                    style={{ 
                      fontFamily: 'monospace',
                      textShadow: '2px 2px 0px rgba(0,0,0,0.2)'
                    }}
                  >
                    {stats.coins}
                  </p>
                </div>
              </div>

              {/* Nivel */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 border-3 border-pink-400 shadow-lg relative overflow-hidden group hover:scale-105 transition-transform">
                <div className="absolute top-0 right-0 w-16 h-16 bg-pink-400/20 rounded-full -mr-8 -mt-8" />
                <div className="relative z-10">
                  <p 
                    className="text-xs sm:text-sm text-gray-700 font-bold mb-1 uppercase"
                    style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
                  >
                    Nivel
                  </p>
                  <p 
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E91E63] leading-none"
                    style={{ 
                      fontFamily: 'monospace',
                      textShadow: '2px 2px 0px rgba(0,0,0,0.2)'
                    }}
                  >
                    {stats.currentLevel || 1}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={onNextLevel}
              className="flex-1 px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white rounded-xl sm:rounded-2xl font-black text-base sm:text-lg md:text-xl hover:from-green-600 hover:via-green-700 hover:to-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 relative overflow-hidden group"
              style={{ 
                fontFamily: 'monospace', 
                letterSpacing: '0.1em',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                ⏭️ SIGUIENTE NIVEL
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            <button
              onClick={onMenu}
              className="flex-1 px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 text-white rounded-xl sm:rounded-2xl font-black text-base sm:text-lg md:text-xl hover:from-gray-600 hover:via-gray-700 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              style={{ 
                fontFamily: 'monospace', 
                letterSpacing: '0.1em',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
              }}
            >
              🏠 MENÚ PRINCIPAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
