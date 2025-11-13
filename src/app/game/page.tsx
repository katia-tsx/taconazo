'use client';

import React, { useState, useEffect } from 'react';
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
        <div className="h-screen w-screen bg-black bg-opacity-80 flex items-center justify-center overflow-hidden">
          <div className="bg-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-[#E91E63] mb-4">Juego Pausado</h2>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleResume}
                className="px-6 py-3 bg-[#E91E63] text-white rounded-lg font-bold hover:bg-[#C2185B] transition-colors"
              >
                Continuar
              </button>
              <button
                onClick={handleBackToMenu}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg font-bold hover:bg-gray-600 transition-colors"
              >
                Menú Principal
              </button>
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
