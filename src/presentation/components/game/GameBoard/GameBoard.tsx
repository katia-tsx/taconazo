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
  const [selectedIngredients, setSelectedIngredients] = useState<
    (Ingredient | null)[]
  >([null, null, null, null, null, null]);
  const [draggedIngredient, setDraggedIngredient] = useState<Ingredient | null>(
    null
  );
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

        const patiencePercent = Math.max(
          0,
          ((game.currentOrder!.timeLimit - elapsed) / game.currentOrder!.timeLimit) * 100
        );
        setCustomerPatience(patiencePercent);

        GameService.updateTimeRemaining(remaining);

        if (remaining === 0) {
          GameService.failOrder();
          onGameStateChange(GameService.getGame());
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [game.currentOrder, onGameStateChange]);

  const handleIngredientDrop = useCallback(
    (ingredient: Ingredient, index: number) => {
      const newIngredients = [...selectedIngredients];
      newIngredients[index] = ingredient;
      setSelectedIngredients(newIngredients);
      setDraggedIngredient(null);
    },
    [selectedIngredients]
  );

  const handleIngredientRemove = useCallback(
    (index: number) => {
      const newIngredients = [...selectedIngredients];
      newIngredients[index] = null;
      setSelectedIngredients(newIngredients);
    },
    [selectedIngredients]
  );

  const handlePlateDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const ingredientData = e.dataTransfer.getData('ingredient');
      if (ingredientData) {
        const ingredient = JSON.parse(ingredientData);
        // Encontrar el primer slot vacío
        const emptyIndex = selectedIngredients.findIndex(ing => ing === null);
        if (emptyIndex !== -1) {
          handleIngredientDrop(ingredient, emptyIndex);
        }
      }
    },
    [selectedIngredients, handleIngredientDrop]
  );

  const handleSubmitTaco = () => {
    if (!game.currentOrder || !currentRecipe) return;

    const ingredients = selectedIngredients
      .filter((ing): ing is Ingredient => ing !== null)
      .map((ing) => ing.type);

    if (ingredients.length === 0) {
      return;
    }

    const result = GameService.submitTaco(ingredients);
    if (result) {
      setFeedback({
        quality: result.quality,
        message: result.message,
      });

      setTimeout(() => {
        setSelectedIngredients([null, null, null, null, null, null]);
        setTimeRemaining(0);
        setCustomerPatience(100);
        onGameStateChange(GameService.getGame());
        setFeedback({ quality: null, message: '' });
      }, 2000);
    }
  };

  const handleClearTaco = () => {
    setSelectedIngredients([null, null, null, null, null, null]);
  };

  const allIngredients = IngredientService.getAllIngredients();
  
  // Obtener ingredientes seleccionados para mostrar el taco armado
  const selectedIngredientsList = selectedIngredients.filter((ing): ing is Ingredient => ing !== null);

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

      <div className="relative z-10 h-full w-full flex flex-col p-1 sm:p-2 md:p-3 overflow-hidden" style={{ maxHeight: '100vh' }}>
        {/* Header con UI mejorado */}
        <div className="bg-white/98 backdrop-blur-lg rounded-lg sm:rounded-xl p-1.5 sm:p-2 md:p-2.5 mb-1 sm:mb-2 shadow-xl border-2 border-[#E91E63]/40 relative overflow-hidden flex-shrink-0">
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#E91E63]/5 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16" />
          
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-5 flex-1 min-w-0">
              <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-2 sm:py-3 border-2 sm:border-3 border-blue-400 shadow-md sm:shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative flex-shrink-0">
                  <Image
                    src="/game/ui/icono-puntos.png"
                    alt="Puntos"
                    width={32}
                    height={32}
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 pixelated"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-gray-600 font-bold uppercase tracking-wide truncate">Puntos</p>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-blue-700 leading-none">
                    {game.stats.score}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-2 sm:py-3 border-2 sm:border-3 border-yellow-400 shadow-md sm:shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative flex-shrink-0">
                  <Image
                    src="/game/ui/icono-monedas.png"
                    alt="Monedas"
                    width={32}
                    height={32}
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 pixelated"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-gray-600 font-bold uppercase tracking-wide truncate">Monedas</p>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-yellow-700 leading-none">
                    {game.stats.coins}
                  </p>
                </div>
              </div>
              
              <div className={`flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 py-2 sm:py-3 border-2 sm:border-3 shadow-md sm:shadow-lg transition-all duration-300 ${
                timeRemaining < 10 
                  ? 'bg-gradient-to-br from-red-50 to-red-100 border-red-500 animate-pulse' 
                  : 'bg-gradient-to-br from-green-50 to-green-100 border-green-400'
              }`}>
                <div className="relative flex-shrink-0">
                  <Image
                    src="/game/ui/icono-tiempo.png"
                    alt="Tiempo"
                    width={32}
                    height={32}
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 pixelated"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-gray-600 font-bold uppercase tracking-wide truncate">Tiempo</p>
                  <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-none ${
                    timeRemaining < 10 ? 'text-red-700' : 'text-green-700'
                  }`}>
                    {timeRemaining}s
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onPause}
              className="relative group hover:scale-110 active:scale-95 transition-transform duration-200 flex-shrink-0"
              aria-label="Pausar juego"
            >
              <div className="absolute inset-0 bg-[#E91E63] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <Image
                src="/game/ui/boton-pausa.png"
                alt="Pausa"
                width={56}
                height={56}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative pixelated drop-shadow-xl"
                style={{ imageRendering: 'pixelated' }}
              />
            </button>
          </div>
        </div>

        {/* Layout principal mejorado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 sm:gap-2 md:gap-2 flex-1 min-h-0 overflow-hidden pb-[140px] sm:pb-[150px]">
          {/* Columna izquierda: Cliente y Receta */}
          <div className="lg:col-span-4 space-y-1 sm:space-y-2 flex flex-col min-h-0 overflow-hidden">
            <div className="flex-shrink-0 min-h-0">
              <CustomerDisplay
                customerId={game.currentOrder.customerId}
                patience={customerPatience}
              />
            </div>
            <div className="flex-shrink-0 min-h-0">
              <RecipeCard recipe={currentRecipe} />
            </div>
          </div>

          {/* Columna central: Área de trabajo con plato y mesa */}
          <div className="lg:col-span-8 space-y-1 sm:space-y-2 flex flex-col min-h-0 overflow-hidden">
            {/* Mesa de trabajo con plato */}
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl border-2 sm:border-3 border-[#E91E63]/40 flex-1 min-h-0 flex items-end">
              <Image
                src="/game/elements/mesa-trabajo.png"
                alt="Mesa de trabajo"
                width={800}
                height={300}
                className="w-full h-full object-cover pixelated"
                style={{ imageRendering: 'pixelated', objectFit: 'cover', objectPosition: 'bottom' }}
              />
              
              {/* Plato sobre la mesa - área interactiva */}
              <div 
                className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 z-10"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handlePlateDrop}
              >
                <div className="relative w-[180px] sm:w-[200px] md:w-[220px] h-[100px] sm:h-[120px]">
                  {/* Plato base - siempre visible */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <Image
                      src="/game/elements/plato.png"
                      alt="Plato"
                      width={200}
                      height={80}
                      className="w-full h-auto pixelated drop-shadow-2xl"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  </div>
                  
                  {/* Taco construyéndose sobre el plato - apilado desde la base */}
                  <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2">
                    {selectedIngredientsList.length > 0 ? (
                      <div className="relative flex flex-col items-center justify-end" style={{ minHeight: '60px' }}>
                        {selectedIngredientsList.map((ingredient, index) => {
                          // Calcular posición vertical: la tortilla (index 0) va en la base, los demás se apilan encima
                          const baseOffset = 0; // Offset desde la base del plato
                          const stackOffset = index * 15; // Cada ingrediente se apila 15px más arriba
                          const verticalPosition = baseOffset - stackOffset;
                          
                          return (
                            <div
                              key={`${ingredient.id}-${index}`}
                              className="absolute transform transition-all duration-500 ease-out"
                              style={{
                                bottom: `${verticalPosition}px`,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: index + 10, // La tortilla tiene z-index más bajo, los ingredientes superiores tienen z-index más alto
                                animation: `fadeIn 0.4s ease-out ${index * 0.15}s both`,
                              }}
                            >
                              <Image
                                src={ingredient.imagePath}
                                alt={ingredient.name}
                                width={70}
                                height={70}
                                className="pixelated drop-shadow-xl"
                                style={{ 
                                  imageRendering: 'pixelated',
                                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))',
                                  transform: `scale(${1 - index * 0.05})`, // Los ingredientes superiores son ligeramente más pequeños
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-gray-400">
                        <p className="text-xs sm:text-sm font-bold mb-1" style={{ fontFamily: 'monospace' }}>
                          ARRASTRA AQUÍ
                        </p>
                        <p className="text-[10px] sm:text-xs" style={{ fontFamily: 'monospace' }}>
                          Comienza con la tortilla
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel de control */}
            <div className="bg-white/98 backdrop-blur-lg rounded-lg sm:rounded-xl p-1.5 sm:p-2 md:p-2.5 shadow-lg border-2 border-[#E91E63]/40 relative overflow-hidden flex-shrink-0">
              <div className="absolute top-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#E91E63]/5 rounded-full -ml-10 -mt-10 sm:-ml-12 sm:-mt-12" />
              
              <div className="relative z-10">
                <h2 
                  className="text-base sm:text-lg md:text-xl font-black text-[#E91E63] mb-1 sm:mb-2 text-center drop-shadow-sm"
                  style={{ fontFamily: 'monospace', letterSpacing: '0.1em', textShadow: '3px 3px 0px rgba(0,0,0,0.2)' }}
                >
                  🎯 ARMA TU TACO
                </h2>

                {/* Slots de ingredientes (ocultos visualmente pero funcionales) */}
                <div className="hidden">
                  {selectedIngredients.map((ingredient, index) => (
                    <IngredientSlot
                      key={index}
                      ingredient={ingredient}
                      index={index}
                      onDrop={handleIngredientDrop}
                      onRemove={handleIngredientRemove}
                      isActive={index < currentRecipe.ingredients.length}
                    />
                  ))}
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 justify-center">
                  <PixelButton
                    onClick={handleSubmitTaco}
                    disabled={selectedIngredients.filter(i => i !== null).length === 0}
                    imagePath="/game/ui/boton-servir-taco.png"
                    fallbackText="SERVIR TACO"
                    fallbackIcon="✅"
                    variant="primary"
                    className="flex-1"
                  />
                  <PixelButton
                    onClick={handleClearTaco}
                    imagePath="/game/ui/boton-limpiar.png"
                    fallbackText="LIMPIAR"
                    fallbackIcon="🗑️"
                    variant="secondary"
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dockbar de ingredientes en la parte inferior */}
      <IngredientDock
        ingredients={allIngredients}
        onDragStart={setDraggedIngredient}
      />
    </div>
  );
};
