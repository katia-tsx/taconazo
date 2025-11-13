'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Game } from '@/domain/entities/Game';
import { Ingredient } from '@/domain/entities/Ingredient';
import { IngredientType } from '@/domain/entities/Ingredient';
import { IngredientSlot } from '../IngredientSlot';
import { RecipeCard } from '../RecipeCard';
import { CustomerDisplay } from '../CustomerDisplay';
import { IngredientService } from '@/application/services/IngredientService';
import { RecipeService } from '@/application/services/RecipeService';
import { GameService } from '@/application/services/GameService';
import { ValidationService, TacoQuality } from '@/application/services/ValidationService';
import { FeedbackMessage } from '../FeedbackMessage';
import { PixelButton } from '../PixelButton';
import { IngredientDock } from '../IngredientDock';

interface GameBoardProps {
  game: Game;
  onGameStateChange: (game: Game) => void;
  onPause: () => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  game,
  onGameStateChange,
  onPause,
}) => {
  const [selectedIngredientsList, setSelectedIngredientsList] = useState<Ingredient[]>([]);
  const [draggedIngredient, setDraggedIngredient] = useState<Ingredient | null>(null);
  const [activeIngredient, setActiveIngredient] = useState<Ingredient | null>(null); // Para móviles
  const [showCompleteTaco, setShowCompleteTaco] = useState(false); // Mostrar taco completo al servir
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [customerPatience, setCustomerPatience] = useState(100);
  const [feedback, setFeedback] = useState<{
    quality: TacoQuality | null;
    message: string;
  }>({ quality: null, message: '' });

  const currentRecipe = game.currentOrder
    ? RecipeService.getRecipeByType(game.currentOrder.recipeType)
    : null;

  useEffect(() => {
    if (game.currentOrder && game.currentOrder.startTime) {
      const interval = setInterval(() => {
        const elapsed = Math.floor(
          (Date.now() - game.currentOrder!.startTime!) / 1000
        );
        const remaining = Math.max(0, game.currentOrder!.timeLimit - elapsed);
        setTimeRemaining(remaining);

        // Actualizar paciencia del cliente
        GameService.updateCustomerPatience();
        const currentCustomer = GameService.getCurrentCustomer();
        setCustomerPatience(currentCustomer?.patience || 100);

        GameService.updateTimeRemaining(remaining);

        if (remaining === 0) {
          GameService.failOrder();
          onGameStateChange(GameService.getGame());
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [game.currentOrder, onGameStateChange]);

  const handlePlateDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      const ingredientData = e.dataTransfer.getData('ingredient');
      if (ingredientData) {
        try {
          const ingredient = JSON.parse(ingredientData) as Ingredient;
          setSelectedIngredientsList(prev => [...prev, ingredient]);
          setDraggedIngredient(null);
          setActiveIngredient(null);
        } catch (error) {
          console.error('Error parsing ingredient data:', error);
        }
      }
    },
    []
  );

  // Agregar ingrediente al plato (funciona para drag and drop y click/touch)
  const addIngredientToPlate = useCallback((ingredient: Ingredient) => {
    setSelectedIngredientsList(prev => [...prev, ingredient]);
    setDraggedIngredient(null);
    setActiveIngredient(null);
  }, []);

  // Soporte para touch/click en el plato (móviles y desktop)
  const handlePlateClick = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      const ingredientToAdd = draggedIngredient || activeIngredient;
      if (ingredientToAdd) {
        addIngredientToPlate(ingredientToAdd);
      }
    },
    [draggedIngredient, activeIngredient, addIngredientToPlate]
  );

  const handleSubmitTaco = () => {
    if (!game.currentOrder || !currentRecipe) return;

    if (selectedIngredientsList.length === 0) {
      return;
    }

    // Mostrar el taco completo primero
    setShowCompleteTaco(true);

    // Después de mostrar el taco, validar y procesar
    setTimeout(() => {
      const ingredients = selectedIngredientsList.map((ing) => ing.type);
      const result = GameService.submitTaco(ingredients);
      
      if (result) {
        setFeedback({
          quality: result.quality,
          message: result.message,
        });

        setTimeout(() => {
          setSelectedIngredientsList([]);
          setDraggedIngredient(null);
          setActiveIngredient(null);
          setShowCompleteTaco(false);
          setTimeRemaining(0);
          setCustomerPatience(100);
          onGameStateChange(GameService.getGame());
          setFeedback({ quality: null, message: '' });
        }, 2000);
      } else {
        setShowCompleteTaco(false);
      }
    }, 1000); // Mostrar el taco completo por 1 segundo antes de validar
  };

  const handleClearTaco = () => {
    setSelectedIngredientsList([]);
    setDraggedIngredient(null);
    setActiveIngredient(null);
  };

  const allIngredients = IngredientService.getAllIngredients();

  if (!game.currentOrder || !currentRecipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FCE4EC] to-[#FFF8E1]">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-[#E91E63] border-t-transparent mx-auto"></div>
          <p className="text-gray-700 text-2xl font-bold">Cargando orden...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{
        backgroundImage: "url('/game/scenarios/fondo-cocina.png')",
        height: '100vh',
        width: '100vw',
        maxHeight: '100vh',
        maxWidth: '100vw',
      }}
    >
      {/* Overlay con gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

      {/* Feedback Message */}
      {feedback.quality && (
        <FeedbackMessage
          quality={feedback.quality}
          message={feedback.message}
          onComplete={() => setFeedback({ quality: null, message: '' })}
        />
      )}

      <div className="relative z-10 h-full w-full flex flex-col overflow-hidden" style={{ maxHeight: '100vh' }}>
        {/* Header minimalista y elegante */}
        <div className="bg-black/60 backdrop-blur-md border-b-4 border-yellow-500/50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex-shrink-0">
          <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-6">
            {/* Stats en una fila compacta */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 border-2 border-yellow-500/50">
                <Image
                  src="/game/ui/icono-puntos.png"
                  alt="Puntos"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6 pixelated flex-shrink-0"
                  style={{ imageRendering: 'pixelated' }}
                />
                <span className="text-yellow-400 font-black pixel-font" style={{ 
                  fontFamily: 'monospace',
                  fontSize: 'clamp(0.875rem, 2vw, 1.5rem)',
                }}>
                  {game.stats.score}
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 sm:gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 border-2 border-yellow-500/50">
                <Image
                  src="/game/ui/icono-monedas.png"
                  alt="Monedas"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6 pixelated flex-shrink-0"
                  style={{ imageRendering: 'pixelated' }}
                />
                <span className="text-yellow-400 font-black pixel-font" style={{ 
                  fontFamily: 'monospace',
                  fontSize: 'clamp(0.875rem, 2vw, 1.5rem)',
                }}>
                  {game.stats.coins}
                </span>
              </div>
              
              <div className={`flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 border-2 backdrop-blur-sm transition-all duration-300 ${
                timeRemaining < 10 
                  ? 'bg-red-500/20 border-red-500/50 animate-pulse' 
                  : 'bg-green-500/20 border-green-500/50'
              }`}>
                <Image
                  src="/game/ui/icono-tiempo.png"
                  alt="Tiempo"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6 pixelated flex-shrink-0"
                  style={{ imageRendering: 'pixelated' }}
                />
                <span className={`font-black pixel-font ${
                  timeRemaining < 10 ? 'text-red-400' : 'text-green-400'
                }`} style={{ 
                  fontFamily: 'monospace',
                  fontSize: 'clamp(0.875rem, 2vw, 1.5rem)',
                }}>
                  {timeRemaining}s
                </span>
              </div>
            </div>

            {/* Botón pausa */}
            <button
              onClick={onPause}
              className="relative group hover:scale-110 active:scale-95 transition-transform duration-200 flex-shrink-0"
              aria-label="Pausar juego"
            >
              <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-md group-hover:bg-yellow-500/50 transition-opacity" />
              <Image
                src="/game/ui/boton-pausa.png"
                alt="Pausa"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative pixelated drop-shadow-xl"
                style={{ imageRendering: 'pixelated' }}
              />
            </button>
          </div>
        </div>

        {/* Layout principal - diseño moderno y estético con mejor responsive */}
        <div className="flex-1 min-h-0 overflow-hidden pb-[140px] sm:pb-[160px] md:pb-[180px] grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4">
          {/* Panel lateral izquierdo - Cliente y Receta */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-2 sm:gap-3 min-h-0">
            <div className="flex-shrink-0">
              <CustomerDisplay
                customerId={game.currentOrder.customerId}
                patience={customerPatience}
              />
            </div>
            <div className="flex-shrink-0">
              <RecipeCard recipe={currentRecipe} />
            </div>
            {/* Botones de acción - debajo de la receta en pantalla grande */}
            <div className="hidden lg:flex flex-shrink-0 gap-2 justify-center mt-2">
              <PixelButton
                onClick={handleSubmitTaco}
                disabled={selectedIngredientsList.length === 0}
                imagePath="/game/ui/boton-servir-taco.png"
                fallbackText="SERVIR"
                fallbackIcon=""
                variant="primary"
                className="!w-auto"
              />
              <PixelButton
                onClick={handleClearTaco}
                disabled={selectedIngredientsList.length === 0}
                imagePath="/game/ui/boton-limpiar.png"
                fallbackText="LIMPIAR"
                fallbackIcon=""
                variant="secondary"
                className="!w-auto"
              />
            </div>
          </div>

          {/* Área central - Mesa de trabajo con plato */}
          <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-2 sm:gap-3 min-h-0">
            {/* Área de trabajo - área principal sin mesa */}
            <div 
              className="relative flex-1 min-h-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-500/50 bg-gradient-to-b from-amber-900/30 to-amber-950/50"
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={handlePlateDrop}
            >
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Botones de acción - solo en móvil/tablet, arriba del plato */}
              <div className="lg:hidden absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
                <PixelButton
                  onClick={handleSubmitTaco}
                  disabled={selectedIngredientsList.length === 0}
                  imagePath="/game/ui/boton-servir-taco.png"
                  fallbackText="SERVIR"
                  fallbackIcon=""
                  variant="primary"
                  className="!w-auto"
                />
                <PixelButton
                  onClick={handleClearTaco}
                  disabled={selectedIngredientsList.length === 0}
                  imagePath="/game/ui/boton-limpiar.png"
                  fallbackText="LIMPIAR"
                  fallbackIcon=""
                  variant="secondary"
                  className="!w-auto"
                />
              </div>

              {/* Plato centrado - área interactiva prominente, perfectamente centrado */}
              <div 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${
                  activeIngredient || draggedIngredient
                    ? 'cursor-pointer scale-105'
                    : 'cursor-default'
                }`}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onDrop={handlePlateDrop}
                onClick={handlePlateClick}
                onTouchEnd={handlePlateClick}
              >
                <div className="relative flex items-center justify-center" style={{ 
                  width: 'clamp(320px, 40vw, 500px)',
                  height: 'clamp(200px, 25vw, 320px)',
                }}>
                  {/* Plato base - perfectamente centrado */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Image
                      src="/game/elements/plato.png"
                      alt="Plato"
                      width={500}
                      height={180}
                      className="w-full h-auto pixelated drop-shadow-2xl"
                      style={{ 
                        imageRendering: 'pixelated',
                        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.7))',
                        maxWidth: '100%',
                      }}
                    />
                  </div>
                  
                  {/* Taco completo cuando se presiona servir - sin rebote, más grande */}
                  {showCompleteTaco && (
                    <div className="absolute bottom-20 sm:bottom-22 md:bottom-24 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                      <Image
                        src="/game/elements/taco-armado.png"
                        alt="Taco completo"
                        width={280}
                        height={280}
                        className="pixelated drop-shadow-2xl"
                        style={{ 
                          imageRendering: 'pixelated',
                          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.8))',
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Taco construyéndose - apilado visualmente, perfectamente centrado, MÁS GRANDE */}
                  {!showCompleteTaco && (
                    <div className="absolute bottom-16 sm:bottom-18 md:bottom-20 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none" style={{ 
                      width: 'clamp(250px, 30vw, 400px)', 
                      height: 'clamp(200px, 25vw, 350px)',
                      minHeight: '200px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                      {selectedIngredientsList.length > 0 ? (
                        <div className="relative w-full h-full flex items-end justify-center" style={{ paddingBottom: '25px', position: 'relative' }}>
                          {selectedIngredientsList.map((ingredient, index) => {
                            // La tortilla (index 0) va en la base, los demás se apilan encima
                            const baseOffset = 25; // Offset desde la base del contenedor
                            const stackOffset = index * 35; // Cada ingrediente 35px más arriba
                            const bottomPosition = baseOffset + stackOffset; // Posición desde abajo
                            const scale = Math.max(0.8, 1 - (index * 0.03));
                            const size = Math.floor(220 - (index * 12)); // Tamaño inicial MÁS GRANDE (220px)
                            
                            return (
                              <div
                                key={`${ingredient.id}-${index}`}
                                className="absolute transform transition-all duration-500 ease-out"
                                style={{
                                  bottom: `${bottomPosition}px`,
                                  left: '50%',
                                  marginLeft: `-${size / 2}px`, // Centrar perfectamente
                                  transform: `scale(${scale})`,
                                  zIndex: index + 20,
                                  animation: `fadeIn 0.4s ease-out ${index * 0.1}s both`,
                                }}
                              >
                                <Image
                                  src={ingredient.imagePath}
                                  alt={ingredient.name}
                                  width={size}
                                  height={size}
                                  className="pixelated"
                                  style={{ 
                                    imageRendering: 'pixelated',
                                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.7))',
                                  }}
                                />
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center pointer-events-none">
                        <div className={`bg-black/60 backdrop-blur-sm rounded-xl px-4 py-3 border-2 transition-all duration-300 ${
                          activeIngredient || draggedIngredient
                            ? 'border-yellow-400 shadow-lg shadow-yellow-400/50 scale-105'
                            : 'border-yellow-500/50'
                        }`}>
                          {activeIngredient || draggedIngredient ? (
                            <>
                              <p className="text-yellow-400 font-black mb-1 pixel-font animate-pulse" style={{ 
                                fontFamily: 'monospace',
                                fontSize: 'clamp(0.75rem, 1.5vw, 1.125rem)',
                              }}>
                                ¡TOCA AQUÍ PARA AGREGAR!
                              </p>
                              <p className="text-yellow-300/90 text-xs sm:text-sm pixel-font" style={{ fontFamily: 'monospace' }}>
                                {activeIngredient?.name || draggedIngredient?.name}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="text-yellow-400 font-black mb-1 pixel-font" style={{ 
                                fontFamily: 'monospace',
                                fontSize: 'clamp(0.75rem, 1.5vw, 1.125rem)',
                              }}>
                                ARRASTRA AQUÍ
                              </p>
                              <p className="text-yellow-300/80 text-xs sm:text-sm pixel-font" style={{ fontFamily: 'monospace' }}>
                                Comienza con la tortilla
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dockbar de ingredientes en la parte inferior */}
      <IngredientDock
        ingredients={allIngredients}
        onDragStart={(ingredient) => {
          setDraggedIngredient(ingredient);
          setActiveIngredient(ingredient);
        }}
        activeIngredient={activeIngredient}
      />
    </div>
  );
};
