'use client';

import React from 'react';
import Image from 'next/image';

interface CustomerDisplayProps {
  customerId: string | number;
  patience: number;
}

export const CustomerDisplay: React.FC<CustomerDisplayProps> = ({
  customerId,
  patience,
}) => {
  const getCustomerImage = () => {
    const customerImages = [
      '/game/characters/cliente-1.png',
      '/game/characters/cliente-2.png',
      '/game/characters/cliente-3.png',
    ];
    const id = typeof customerId === 'string' 
      ? parseInt(customerId.replace(/\D/g, '')) || 1 
      : customerId;
    return customerImages[(id - 1) % customerImages.length];
  };

  const getMoodColor = () => {
    if (patience > 70) return { bg: 'bg-green-500', text: 'text-green-700', border: 'border-green-600' };
    if (patience > 40) return { bg: 'bg-yellow-500', text: 'text-yellow-700', border: 'border-yellow-600' };
    if (patience > 20) return { bg: 'bg-orange-500', text: 'text-orange-700', border: 'border-orange-600' };
    return { bg: 'bg-red-500', text: 'text-red-700', border: 'border-red-600' };
  };

  const getMoodEmoji = () => {
    if (patience > 70) return '😊';
    if (patience > 40) return '😐';
    if (patience > 20) return '😟';
    return '😠';
  };

  const mood = getMoodColor();

  return (
    <div className="bg-black/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl border-4 border-yellow-500/50 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-500/10 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16" />
      
      <div className="relative z-10 flex flex-col">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mb-3 sm:mb-4">
          <div className="relative flex-shrink-0">
            <div className="absolute -top-2 -right-2 text-2xl sm:text-3xl md:text-4xl z-10">
              {getMoodEmoji()}
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-yellow-500/20 backdrop-blur-sm rounded-full p-2 sm:p-3 border-4 border-yellow-500/70">
              <Image
                src={getCustomerImage()}
                alt={`Cliente ${customerId}`}
                width={96}
                height={96}
                className="object-contain pixelated w-full h-full"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-black text-base sm:text-lg md:text-xl text-yellow-400 mb-2 pixel-font pixel-text-shadow" style={{ 
              fontFamily: 'monospace',
              textShadow: '2px 2px 0px rgba(0,0,0,0.8)',
            }}>
              CLIENTE #{typeof customerId === 'string' ? customerId.replace(/\D/g, '') : customerId}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm text-yellow-300/90 font-bold pixel-font" style={{ fontFamily: 'monospace' }}>PAC:</span>
                <div className="flex-1 bg-black/40 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner border-2 border-yellow-500/30">
                  <div
                    className={`h-full transition-all duration-500 ${mood.bg} relative`}
                    style={{ width: `${Math.max(0, patience)}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                  </div>
                </div>
                <span className={`text-xs sm:text-sm md:text-base font-black ${mood.text} min-w-[3rem] text-right pixel-font pixel-text-shadow`} style={{ fontFamily: 'monospace' }}>
                  {Math.round(patience)}%
                </span>
              </div>
              {patience < 30 && (
                <p className="text-red-400 font-black text-xs sm:text-sm animate-pulse pixel-font pixel-text-shadow" style={{ fontFamily: 'monospace' }}>
                  ⚠️ IMPACIENTE
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
