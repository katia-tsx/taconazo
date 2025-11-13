'use client';

import React from 'react';
import { GameLevel } from '@/domain/entities/Game';
import Image from 'next/image';

interface LevelSelectProps {
  onSelectLevel: (level: GameLevel) => void;
  onBack: () => void;
}

const levels = [
  { 
    level: GameLevel.TUTORIAL, 
    name: 'TUTORIAL', 
    orders: 3, 
    time: 90, 
    unlocked: true,
    imagePath: '/game/ui/nivel-tutorial.jpg',
    description: 'Aprende lo básico',
  },
  { 
    level: GameLevel.EASY, 
    name: 'FÁCIL', 
    orders: 5, 
    time: 60, 
    unlocked: true,
    imagePath: '/game/ui/nivel-facil.jpg',
    description: 'Perfecto para empezar',
  },
  { 
    level: GameLevel.MEDIUM, 
    name: 'MEDIO', 
    orders: 8, 
    time: 45, 
    unlocked: true,
    imagePath: '/game/ui/nivel-medio.jpg',
    description: 'Aumenta la dificultad',
  },
  { 
    level: GameLevel.HARD, 
    name: 'DIFÍCIL', 
    orders: 12, 
    time: 30, 
    unlocked: true,
    imagePath: '/game/ui/nivel-dificil.jpg',
    description: 'Para expertos',
  },
  { 
    level: GameLevel.EXPERT, 
    name: 'EXPERTO', 
    orders: 15, 
    time: 20, 
    unlocked: true,
    imagePath: '/game/ui/nivel-experto.jpg',
    description: 'El máximo desafío',
  },
];

export const LevelSelect: React.FC<LevelSelectProps> = ({ onSelectLevel, onBack }) => {
  return (
    <div 
      className="h-screen w-screen relative overflow-hidden"
      style={{
        height: '100vh',
        width: '100vw',
        maxHeight: '100vh',
        maxWidth: '100vw',
        overflowY: 'auto',
        overscrollBehavior: 'contain',
        backgroundImage: "url('/game/scenarios/fondo-menu.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay sutil para mejor contraste */}
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="w-full max-w-[100vw] mx-auto relative z-10 h-full flex flex-col items-center justify-between py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        {/* Título con estilo pixel art - igual que el menú principal */}
        <div className="text-center shrink-0 w-full">
          <h1 
            className="font-black text-white pixel-font pixel-text-shadow-xl mb-2" 
            style={{ 
              fontFamily: 'monospace', 
              letterSpacing: '0.15em',
              textShadow: '4px 4px 0px rgba(0,0,0,0.4), 8px 8px 0px rgba(0,0,0,0.2)',
              fontSize: 'clamp(1.5rem, 4vw, 4.5rem)',
            }}
          >
            SELECCIONA UN NIVEL
          </h1>
        </div>

        {/* Grid de niveles - diseño minimalista y estético con mejor responsive */}
        <div className="w-full flex-1 min-h-0 overflow-y-auto custom-scrollbar flex items-center justify-center">
          <div className="w-full max-w-[1800px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 justify-items-center items-center py-4">
          {levels.map((levelInfo, index) => (
            <button
              key={levelInfo.level}
              onClick={() => onSelectLevel(levelInfo.level)}
              disabled={!levelInfo.unlocked}
              className={`
                group relative aspect-[3/4] w-full
                rounded-2xl sm:rounded-3xl overflow-hidden
                transition-all duration-500 transform
                ${levelInfo.unlocked
                  ? `hover:scale-105 hover:shadow-2xl cursor-pointer active:scale-95`
                  : 'opacity-50 cursor-not-allowed grayscale'
                }
              `}
              style={{
                maxWidth: 'clamp(200px, 20vw, 360px)',
                boxShadow: levelInfo.unlocked 
                  ? '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                  : '0 4px 12px rgba(0, 0, 0, 0.2)',
              }}
            >
              {/* Imagen del nivel como fondo principal */}
              {levelInfo.imagePath ? (
                <>
                  <Image
                    src={levelInfo.imagePath}
                    alt={levelInfo.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ 
                      imageRendering: 'auto',
                      objectFit: 'cover'
                    }}
                    unoptimized={levelInfo.imagePath.endsWith('.jpg')}
                  />
                  
                  {/* Overlay elegante con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
                  
                  {/* Contenido centrado sobre la imagen */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10" style={{ padding: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
                    {/* Badge de nivel - esquina superior */}
                    <div className="absolute bg-yellow-500/95 backdrop-blur-sm text-black font-black pixel-font border-2 border-black/50" style={{ 
                      fontFamily: 'monospace',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
                      top: 'clamp(0.5rem, 1.5vw, 1.25rem)',
                      right: 'clamp(0.5rem, 1.5vw, 1.25rem)',
                      padding: 'clamp(0.25rem, 1vw, 0.75rem) clamp(0.5rem, 1.5vw, 1rem)',
                      borderRadius: 'clamp(0.5rem, 1vw, 1rem)',
                      fontSize: 'clamp(0.625rem, 1.5vw, 1rem)',
                    }}>
                      #{index + 1}
                    </div>
                    
                    {/* Título del nivel - centrado */}
                    <h2 
                      className="font-black text-white pixel-font pixel-text-shadow-xl"
                      style={{ 
                        fontFamily: 'monospace', 
                        letterSpacing: '0.15em',
                        textShadow: '3px 3px 0px rgba(0,0,0,0.8), 6px 6px 0px rgba(0,0,0,0.4), 0 0 20px rgba(0,0,0,0.5)',
                        fontSize: 'clamp(1.25rem, 3.5vw, 3.5rem)',
                        marginBottom: 'clamp(0.25rem, 1vw, 0.75rem)',
                      }}
                    >
                      {levelInfo.name}
                    </h2>
                    
                    {/* Descripción sutil */}
                    <p className="text-white/90 font-bold pixel-font px-2" style={{ 
                      fontFamily: 'monospace',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                      fontSize: 'clamp(0.625rem, 1.5vw, 1rem)',
                      marginBottom: 'clamp(0.75rem, 2vw, 1.5rem)',
                    }}>
                      {levelInfo.description}
                    </p>
                    
                    {/* Estadísticas minimalistas centradas */}
                    <div className="flex items-center justify-center bg-black/40 backdrop-blur-md border-2 border-white/20 w-full" style={{
                      gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                      borderRadius: 'clamp(0.5rem, 1.5vw, 1.25rem)',
                      padding: 'clamp(0.5rem, 1.5vw, 1rem) clamp(0.75rem, 2vw, 1.5rem)',
                      maxWidth: '90%',
                    }}>
                      <div className="flex flex-col items-center">
                        <span className="text-white/80 font-bold pixel-font" style={{ 
                          fontFamily: 'monospace',
                          fontSize: 'clamp(0.5rem, 1.2vw, 0.875rem)',
                          marginBottom: 'clamp(0.125rem, 0.5vw, 0.25rem)',
                        }}>
                          ÓRDENES
                        </span>
                        <span className="font-black text-yellow-400 pixel-font pixel-text-shadow" style={{ 
                          fontFamily: 'monospace',
                          textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
                          fontSize: 'clamp(1rem, 2.5vw, 2.5rem)',
                        }}>
                          {levelInfo.orders}
                        </span>
                      </div>
                      
                      <div className="bg-white/30" style={{ 
                        width: '1px',
                        height: 'clamp(1.5rem, 4vw, 3rem)',
                      }} />
                      
                      <div className="flex flex-col items-center">
                        <span className="text-white/80 font-bold pixel-font" style={{ 
                          fontFamily: 'monospace',
                          fontSize: 'clamp(0.5rem, 1.2vw, 0.875rem)',
                          marginBottom: 'clamp(0.125rem, 0.5vw, 0.25rem)',
                        }}>
                          TIEMPO
                        </span>
                        <span className="font-black text-yellow-400 pixel-font pixel-text-shadow" style={{ 
                          fontFamily: 'monospace',
                          textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
                          fontSize: 'clamp(1rem, 2.5vw, 2.5rem)',
                        }}>
                          {levelInfo.time}s
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Efecto de brillo en hover */}
                  {levelInfo.unlocked && (
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/10 group-hover:via-yellow-400/5 group-hover:to-yellow-400/10 transition-all duration-500 pointer-events-none" />
                  )}
                  
                  {/* Borde sutil que se intensifica en hover */}
                  <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl transition-all duration-500 pointer-events-none ${
                    levelInfo.unlocked 
                      ? 'border-2 sm:border-3 border-yellow-500/50 group-hover:border-yellow-400 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]' 
                      : 'border-2 border-gray-500/30'
                  }`} />
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-500/20 to-yellow-600/20">
                  <span className="text-6xl font-black text-yellow-600 pixel-font">{levelInfo.name.charAt(0)}</span>
                </div>
              )}
              
              {/* Indicador de bloqueado */}
              {!levelInfo.unlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-20">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl mb-2">🔒</div>
                    <p className="text-white font-black text-sm sm:text-base pixel-font pixel-text-shadow" style={{ fontFamily: 'monospace' }}>
                      BLOQUEADO
                    </p>
                  </div>
                </div>
              )}
            </button>
          ))}
          </div>
        </div>

        {/* Botón volver - estilo pixel art amarillo como los del menú */}
        <div className="text-center shrink-0 w-full">
          <button
            onClick={onBack}
            className="bg-yellow-500 text-black font-black hover:bg-yellow-400 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 pixel-font"
            style={{ 
              fontFamily: 'monospace', 
              letterSpacing: '0.1em',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
              border: '4px solid #000000',
              padding: 'clamp(0.625rem, 1.5vw, 1.25rem) clamp(1.25rem, 3vw, 3rem)',
              borderRadius: 'clamp(0.5rem, 1vw, 1.25rem)',
              fontSize: 'clamp(0.875rem, 2vw, 1.5rem)',
            }}
          >
            ← VOLVER AL MENÚ
          </button>
        </div>
      </div>
    </div>
  );
};
