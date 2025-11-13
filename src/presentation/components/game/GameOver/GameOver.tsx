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
    <div className="h-screen w-screen bg-gradient-to-br from-red-900 via-red-800 to-black flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Efecto de fondo */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/50 via-transparent to-transparent" />
      
      <div className="bg-white rounded-3xl p-6 md:p-10 max-w-lg w-full text-center relative z-10 shadow-2xl border-4 border-red-500">
        <div className="mb-6">
          <Image
            src="/game/ui/game-over.png"
            alt="Game Over"
            width={400}
            height={300}
            className="mx-auto pixelated drop-shadow-2xl"
            style={{ imageRendering: 'pixelated', maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-4 border-2 border-gray-300">
            <h3 className="text-xl font-bold text-gray-700 mb-2">Puntuación Final</h3>
            <p className="text-5xl font-black text-[#E91E63] drop-shadow-lg">
              {stats.score}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border-2 border-green-300">
              <p className="text-sm text-gray-600 font-semibold mb-1">Órdenes Completadas</p>
              <p className="text-3xl font-black text-green-600">
                {stats.ordersCompleted}
              </p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 border-2 border-yellow-300">
              <p className="text-sm text-gray-600 font-semibold mb-1">Tacos Perfectos</p>
              <p className="text-3xl font-black text-yellow-600">
                {stats.perfectTacos}
              </p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 border-2 border-yellow-300">
              <p className="text-sm text-gray-600 font-semibold mb-1">Monedas</p>
              <p className="text-3xl font-black text-yellow-700">
                {stats.coins}
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border-2 border-red-300">
              <p className="text-sm text-gray-600 font-semibold mb-1">Órdenes Fallidas</p>
              <p className="text-3xl font-black text-red-600">
                {stats.ordersFailed}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className="flex-1 px-6 py-4 bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white rounded-xl font-black text-lg hover:from-[#C2185B] hover:to-[#AD1457] transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            🔄 Reintentar
          </button>
          <button
            onClick={onMenu}
            className="flex-1 px-6 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl font-black text-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            🏠 Menú Principal
          </button>
        </div>
      </div>
    </div>
  );
};
