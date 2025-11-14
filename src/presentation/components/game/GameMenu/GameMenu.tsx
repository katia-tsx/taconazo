'use client';

import React from 'react';
import Image from 'next/image';

interface GameMenuProps {
  onStartGame: () => void;
}

export const GameMenu: React.FC<GameMenuProps> = ({ 
  onStartGame,
}) => {
  const handleJugar = () => {
    onStartGame();
  };

  return (
    <div 
      className="h-screen w-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
      style={{
        backgroundImage: "url('/game/scenarios/fondo-menu.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        maxHeight: '100vh',
        maxWidth: '100vw',
      }}
    >
      {/* Overlay sutil para mejor contraste */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Contenedor principal centrado */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-10 md:space-y-12">
        
        {/* Logo */}
        <div className="relative flex-shrink-0">
          <Image
            src="/game/ui/logo-juego.png"
            alt="Taco Nazo"
            width={400}
            height={400}
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] pixelated drop-shadow-2xl"
            style={{ 
              imageRendering: 'pixelated',
            }}
            priority
          />
        </div>

        {/* Botón JUGAR */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 w-full max-w-md">
          <button
            onClick={handleJugar}
            className="relative group transform transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
          >
            <Image
              src="/game/ui/boton-jugar.png"
              alt="Jugar"
              width={320}
              height={80}
              className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] h-auto pixelated cursor-pointer transition-all duration-300 group-hover:brightness-110"
              style={{ 
                imageRendering: 'pixelated',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4))',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
