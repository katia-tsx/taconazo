'use client';

import React from 'react';

export default function GamePage() {
  return (
    <main className="min-h-screen bg-[#1C1C1C] flex items-center justify-center">
      <div className="text-center px-8">
        <h1 className="text-6xl md:text-8xl font-black text-[#E91E63] mb-6">
          TACO NAZO
        </h1>
        <p className="text-2xl md:text-3xl text-white font-semibold mb-8">
          Videojuego de Armar Tacos
        </p>
        <div className="bg-[#2C2C2C] rounded-lg p-8 max-w-2xl mx-auto">
          <p className="text-white text-lg mb-4">
            🎮 Próximamente: El mejor juego de tacos en pixel art
          </p>
          <p className="text-gray-400">
            Arma tacos perfectos siguiendo las recetas de los clientes
          </p>
        </div>
      </div>
    </main>
  );
}

