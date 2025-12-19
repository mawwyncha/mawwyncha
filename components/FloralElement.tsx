
import React, { useState } from 'react';

export const FloralElement: React.FC<{ x: string; y: string; color: string; delay?: number }> = ({ x, y, color, delay = 0 }) => {
  const [isBlooming, setIsBlooming] = useState(false);

  return (
    <div 
      className="absolute cursor-pointer transition-all duration-700 cubic-bezier(0.175, 0.885, 0.32, 1.275) z-20"
      style={{ 
        left: x, 
        top: y, 
        transform: isBlooming ? 'scale(2.2) rotate(45deg)' : 'scale(1)',
        filter: isBlooming ? 'drop-shadow(0 0 15px rgba(226, 223, 253, 0.6))' : 'none',
        animation: `float-modern 5s ease-in-out infinite alternate ${delay}s`
      }}
      onMouseEnter={() => setIsBlooming(true)}
      onMouseLeave={() => setIsBlooming(false)}
    >
      <svg width="48" height="48" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="7" fill="#fffef0" stroke="#8B93B8" strokeWidth="2" />
        <path d="M20 5C22 10 28 10 30 15C32 20 28 25 20 25C12 25 8 20 10 15C12 10 18 10 20 5Z" fill={color} stroke="#8B93B8" strokeWidth="1.5" />
        <path d="M20 35C22 30 28 30 30 25C32 20 28 15 20 15C12 15 8 20 10 25C12 30 18 30 20 35Z" fill={color} stroke="#8B93B8" strokeWidth="1.5" />
        <path d="M5 20C10 18 10 12 15 10C20 8 25 12 25 20C25 28 20 32 15 30C10 28 10 22 5 20Z" fill={color} stroke="#8B93B8" strokeWidth="1.5" />
        <path d="M35 20C30 18 30 12 25 10C20 8 15 12 15 20C15 28 20 32 25 30C30 28 30 22 35 20Z" fill={color} stroke="#8B93B8" strokeWidth="1.5" />
      </svg>
      <style>{`
        @keyframes float-modern {
          0% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(-8px) rotate(-2deg); }
        }
      `}</style>
    </div>
  );
};
