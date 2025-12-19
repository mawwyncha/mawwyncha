
import React from 'react';

export const Star3D: React.FC = () => {
  return (
    <div className="group relative w-10 h-10 flex items-center justify-center" style={{ perspective: '800px' }}>
      <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110" style={{ transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 flex items-center justify-center group-hover:animate-[spin-star_2.5s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Front Face of the Star - Brighter Yellow */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(3px)' }}>
             <StarSVG color="#FFF176" />
          </div>

          {/* Back Face of the Star - Gold */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(-3px) rotateY(180deg)' }}>
             <StarSVG color="#FFD54F" />
          </div>

          {/* Side Panels - Vibrant Yellow-Orange */}
          {[0, 72, 144, 216, 288].map((angle) => (
            <div 
              key={angle}
              className="absolute w-[4px] h-[10px] bg-[#FBC02D] opacity-90"
              style={{ 
                transform: `rotate(${angle}deg) translateY(-11px) rotateX(90deg)`,
                transformOrigin: 'center'
              }}
            />
          ))}

          {/* Sparkles - Brighter and tighter */}
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_10px_#FFFF00]" 
               style={{ transform: 'translateZ(6px) translateX(5px) translateY(-7px)' }} />
          <div className="absolute w-1.2 h-1.2 bg-white rounded-full animate-pulse shadow-[0_0_12px_white]" 
               style={{ transform: 'translateZ(-5px) translateX(-8px) translateY(3px)', animationDelay: '0.3s' }} />
        </div>
      </div>
      <style>{`
        @keyframes spin-star {
          from { transform: rotateY(0deg) rotateX(15deg); }
          to { transform: rotateY(360deg) rotateX(15deg); }
        }
      `}</style>
    </div>
  );
};

const StarSVG: React.FC<{ color: string }> = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.8))' }}>
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
  </svg>
);
