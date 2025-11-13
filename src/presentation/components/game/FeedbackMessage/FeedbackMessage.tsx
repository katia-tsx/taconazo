'use client';

import React, { useEffect, useState } from 'react';
import { ValidationService, TacoQuality } from '@/application/services/ValidationService';

interface FeedbackMessageProps {
  quality: TacoQuality | null;
  message: string;
  onComplete: () => void;
}

export const FeedbackMessage: React.FC<FeedbackMessageProps> = ({
  quality,
  message,
  onComplete,
}) => {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (quality) {
      setAnimating(true);
      setTimeout(() => setVisible(true), 50);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setAnimating(false);
          onComplete();
        }, 300);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [quality, onComplete]);

  if (!quality || !animating) return null;

  const getStyles = () => {
    switch (quality) {
      case TacoQuality.PERFECT:
        return {
          bg: 'bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400',
          text: 'text-yellow-900',
          border: 'border-yellow-600',
          shadow: 'shadow-yellow-500/50',
          emoji: '⭐',
        };
      case TacoQuality.GOOD:
        return {
          bg: 'bg-gradient-to-r from-green-400 via-green-300 to-green-400',
          text: 'text-green-900',
          border: 'border-green-600',
          shadow: 'shadow-green-500/50',
          emoji: '👍',
        };
      case TacoQuality.REGULAR:
        return {
          bg: 'bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400',
          text: 'text-blue-900',
          border: 'border-blue-600',
          shadow: 'shadow-blue-500/50',
          emoji: '👌',
        };
      case TacoQuality.BAD:
        return {
          bg: 'bg-gradient-to-r from-red-400 via-red-300 to-red-400',
          text: 'text-red-900',
          border: 'border-red-600',
          shadow: 'shadow-red-500/50',
          emoji: '❌',
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400',
          text: 'text-gray-900',
          border: 'border-gray-600',
          shadow: 'shadow-gray-500/50',
          emoji: 'ℹ️',
        };
    }
  };

  const styles = getStyles();

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-8 md:px-12 py-6 md:py-8 rounded-2xl border-4 font-black text-2xl md:text-4xl shadow-2xl transition-all duration-300 ${
        styles.bg
      } ${styles.text} ${styles.border} ${styles.shadow} ${
        visible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
      }`}
      style={{
        boxShadow: `0 0 40px ${styles.shadow.replace('/50', '')}`,
      }}
    >
      <div className="flex items-center gap-4">
        <span className="text-4xl md:text-6xl animate-bounce-slow">
          {styles.emoji}
        </span>
        <span className="drop-shadow-lg">{message}</span>
      </div>
    </div>
  );
};
