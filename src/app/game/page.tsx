'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Game, GameState, GameLevel } from '@/domain/entities/Game';
import { GameService } from '@/application/services/GameService';
import { GameMenu } from '@/presentation/components/game/GameMenu';
import { LevelSelect } from '@/presentation/components/game/LevelSelect';
import { GameBoard } from '@/presentation/components/game/GameBoard';
import { GameOver } from '@/presentation/components/game/GameOver';
import { Victory } from '@/presentation/components/game/Victory';

export default function GamePage() {
  const [game, setGame] = useState<Game>(GameService.getGame());

  useEffect(() => {
    // Inicializar el juego
    setGame(GameService.getGame());
  }, []);

  const handleStartGame = () => {
    GameService.setState(GameState.LEVEL_SELECT);
    setGame(GameService.getGame());
  };

  const handleSelectLevel = (level: GameLevel) => {
    const newGame = GameService.startLevel(level);
    setGame(newGame);
  };

  const handleBackToMenu = () => {
    GameService.resetGame();
    setGame(GameService.getGame());
  };

  const handleGameStateChange = (newGame: Game) => {
    setGame(newGame);
  };

  const handlePause = () => {
    GameService.pauseGame();
    setGame(GameService.getGame());
  };

  const handleResume = () => {
    GameService.resumeGame();
    setGame(GameService.getGame());
  };

  const handleRestart = () => {
    const currentLevel = game.level;
    const newGame = GameService.startLevel(currentLevel);
    setGame(newGame);
  };

  const handleNextLevel = () => {
    const nextLevel = Math.min(game.level + 1, 5) as GameLevel;
    const newGame = GameService.startLevel(nextLevel);
    setGame(newGame);
  };

  // Renderizar según el estado del juego
  switch (game.state) {
    case GameState.MENU:
      return <GameMenu onStartGame={handleStartGame} />;

    case GameState.LEVEL_SELECT:
      return (
        <LevelSelect
          onSelectLevel={handleSelectLevel}
          onBack={handleBackToMenu}
        />
      );

    case GameState.PLAYING:
      return (
        <GameBoard
          game={game}
          onGameStateChange={handleGameStateChange}
          onPause={handlePause}
        />
      );

    case GameState.PAUSED:
      return (
        <div 
          className="h-screen w-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden"
          style={{
            backgroundImage: "url('/game/scenarios/fondo-pausa.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100vw',
            maxHeight: '100vh',
            maxWidth: '100vw',
          }}
        >
          {/* Overlay oscuro para mejor contraste */}
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Panel transparente con backdrop-filter */}
          <div className="relative z-10 w-full max-w-2xl mx-auto px-4 flex items-center justify-center">
            <div 
              className="bg-black/30 backdrop-blur-md rounded-3xl p-4 sm:p-5 md:p-6 border-2 border-white/20 relative flex flex-col items-center w-full"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                maxHeight: '85vh',
                overflowY: 'auto',
              }}
            >
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 pixel-font pixel-text-shadow-xl"
                style={{ 
                  fontFamily: 'monospace',
                  letterSpacing: '0.1em',
                  textShadow: '4px 4px 0px rgba(0,0,0,0.9), 8px 8px 0px rgba(0,0,0,0.7)',
                }}
              >
                JUEGO PAUSADO
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
                <button
                  onClick={handleResume}
                  className="relative group transform transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
                  aria-label="Continuar juego"
                >
                  <Image
                    src="/game/ui/boton-jugar.png"
                    alt="Continuar"
                    width={200}
                    height={60}
                    className="pixelated drop-shadow-xl mx-auto sm:mx-0"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </button>
                <button
                  onClick={handleBackToMenu}
                  className="relative group transform transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
                  aria-label="Volver al menú principal"
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

    case GameState.GAME_OVER:
      return (
        <GameOver
          stats={game.stats}
          onRestart={handleRestart}
          onMenu={handleBackToMenu}
        />
      );

    case GameState.VICTORY:
      return (
        <Victory
          stats={game.stats}
          onNextLevel={handleNextLevel}
          onMenu={handleBackToMenu}
        />
      );

    default:
      return <GameMenu onStartGame={handleStartGame} />;
  }
}
