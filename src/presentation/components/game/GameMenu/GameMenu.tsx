'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface GameMenuProps {
  onStartGame: () => void;
  onHelp?: () => void;
}

type MenuScreen = 'main' | 'help';

export const GameMenu: React.FC<GameMenuProps> = ({ 
  onStartGame,
  onHelp,
}) => {
  const [currentScreen, setCurrentScreen] = useState<MenuScreen>('main');

  const handleJugar = () => {
    onStartGame();
  };

  const handleHelp = () => {
    if (onHelp) {
      onHelp();
    } else {
      setCurrentScreen('help');
    }
  };

  const handleBackToMain = () => {
    setCurrentScreen('main');
  };

  // Pantalla principal del menú
  if (currentScreen === 'main') {
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
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10">
          
          {/* Logo */}
          <div className="relative flex-shrink-0">
            <Image
              src="/game/ui/logo-juego.png"
              alt="Taco Nazo Logo"
              width={200}
              height={200}
              className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] pixelated drop-shadow-2xl"
              style={{ imageRendering: 'pixelated' }}
              priority
            />
          </div>

          {/* Título */}
          <div className="relative flex-shrink-0">
            <Image
              src="/game/ui/titulo-juego.png"
              alt="Taco Nazo"
              width={600}
              height={150}
              className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] pixelated drop-shadow-xl"
              style={{ 
                imageRendering: 'pixelated', 
                height: 'auto',
              }}
              priority
            />
          </div>

          {/* Botones apilados verticalmente */}
          <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 w-full max-w-md">
            {/* Botón JUGAR */}
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

            {/* Botón AYUDA */}
            <button
              onClick={handleHelp}
              className="relative group transform transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
            >
              <Image
                src="/game/ui/boton-help.png"
                alt="Ayuda"
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
  }

  // Pantalla de Ayuda
  if (currentScreen === 'help') {
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
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white pixel-font pixel-text-shadow-xl mb-4"
            style={{ fontFamily: 'monospace', letterSpacing: '0.1em' }}
          >
            AYUDA
          </h1>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 sm:p-8 max-w-2xl text-center">
            <p className="text-gray-800 text-base sm:text-lg pixel-font mb-4">
              Arrastra los ingredientes desde la barra inferior hasta el plato.
            </p>
            <p className="text-gray-800 text-base sm:text-lg pixel-font mb-4">
              Sigue el orden de la receta para crear el taco perfecto.
            </p>
            <p className="text-gray-800 text-base sm:text-lg pixel-font">
              ¡Completa las órdenes a tiempo para ganar más puntos!
            </p>
          </div>
          <button
            onClick={handleBackToMain}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-black rounded-lg font-black text-base sm:text-lg hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105 active:scale-95 pixel-font"
            style={{ 
              fontFamily: 'monospace', 
              letterSpacing: '0.1em',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
            }}
          >
            ← VOLVER
          </button>
        </div>
      </div>
    );
  }

  return null;
};
