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
    <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl border-2 border-[#E91E63] relative overflow-hidden h-full">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-[#E91E63]/10 rounded-full -ml-8 -mt-8" />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-shrink-0">
          <div className="relative flex-shrink-0">
            <div className="absolute -top-1 -right-1 text-lg sm:text-xl z-10">
              {getMoodEmoji()}
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-full p-1 border-2 border-[#E91E63]">
              <Image
                src={getCustomerImage()}
                alt={`Cliente ${customerId}`}
                width={56}
                height={56}
                className="object-contain pixelated w-full h-full"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-black text-sm sm:text-base text-gray-800 mb-1" style={{ fontFamily: 'monospace' }}>
              CLIENTE #{typeof customerId === 'string' ? customerId.replace(/\D/g, '') : customerId}
            </h3>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] sm:text-xs text-gray-600 font-semibold" style={{ fontFamily: 'monospace' }}>PAC:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2 sm:h-2.5 overflow-hidden shadow-inner">
                  <div
                    className={`h-full transition-all duration-500 ${mood.bg} relative`}
                    style={{ width: `${Math.max(0, patience)}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                  </div>
                </div>
                <span className={`text-[10px] sm:text-xs font-black ${mood.text} min-w-[2.5rem] text-right`} style={{ fontFamily: 'monospace' }}>
                  {Math.round(patience)}%
                </span>
              </div>
              {patience < 30 && (
                <p className="text-[10px] text-red-600 font-bold animate-pulse" style={{ fontFamily: 'monospace' }}>
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
