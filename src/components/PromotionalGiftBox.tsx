'use client';

import React, { useState, useEffect } from 'react';
import { Gift } from 'lucide-react';
import PromoPopup from './PromoPopup';

const PromotionalGiftBox = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      setShowPopup(true);
      setIsOpening(false);
    }, 1500);
  };

  return (
    <>
      {/* Confetti/Ribbons Animation */}
      {isOpening && !showPopup && (
        <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall rounded-sm"
              style={{
                left: `${(i * 1.25) % 100}%`,
                top: '-100px',
                width: `${8 + Math.random() * 8}px`,
                height: `${20 + Math.random() * 30}px`,
                backgroundColor: ['#12b190', '#0f9a7a', '#10b981', '#fbbf24', '#f59e0b', '#ef4444', '#ec4899', '#8b5cf6', '#3b82f6'][Math.floor(Math.random() * 9)],
                animationDelay: `${Math.random() * 0.8}s`,
                animationDuration: `${1.2 + Math.random() * 0.6}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0.9
              }}
            />
          ))}
        </div>
      )}

      <div className="fixed left-4 md:left-8 bottom-8 z-50">
        <button
          onClick={handleClick}
          className="relative group hover:scale-110 transition-all duration-300"
          disabled={isOpening}
        >
          {/* Circular button with icon */}
          <div className="relative w-24 h-24 rounded-full shadow-2xl flex items-center justify-center p-[3px] bg-gradient-to-br from-[#c41e3a] via-[#165b33] to-[#c41e3a]">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
            <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="url(#giftGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="giftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#c41e3a', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#165b33', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#c41e3a', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <polyline points="20 12 20 22 4 22 4 12"></polyline>
              <rect x="2" y="7" width="20" height="5"></rect>
              <line x1="12" y1="22" x2="12" y2="7"></line>
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
            </svg>
            </div>
          </div>
          
          {/* Badge */}
          {!showPopup && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white w-7 h-7 rounded-full shadow-lg text-xs font-bold flex items-center justify-center animate-pulse">
              40%
            </div>
          )}
        </button>
      </div>
      {showPopup && <PromoPopup onClose={() => setShowPopup(false)} />}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          90% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0.9;
          }
        }
        .animate-fall {
          animation: fall 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </>
  );
};

export default PromotionalGiftBox;
