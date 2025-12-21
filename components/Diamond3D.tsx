
import React from 'react';

export const Diamond3D: React.FC = () => {
  return (
    <div className="group relative w-24 h-24 flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110" style={{ transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 flex items-center justify-center group-hover:animate-[spin-y_2.5s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Top Face (Table) */}
          <div className="absolute w-12 h-12 bg-[#FFB6C1] opacity-90 border border-white/30" 
               style={{ transform: 'rotateX(90deg) translateZ(18px)' }} />

          {/* Crown Facets (Upper slanted part) */}
          {/* Front */}
          <div className="absolute w-0 h-0 border-x-[24px] border-x-transparent border-b-[18px] border-b-[#FF69B4] opacity-80" 
               style={{ transform: 'rotateX(45deg) translateZ(14px) translateY(-9px)' }} />
          {/* Back */}
          <div className="absolute w-0 h-0 border-x-[24px] border-x-transparent border-b-[18px] border-b-[#FF1493] opacity-80" 
               style={{ transform: 'rotateX(-45deg) translateZ(-14px) translateY(-9px)' }} />
          {/* Left */}
          <div className="absolute w-0 h-0 border-x-[24px] border-x-transparent border-b-[18px] border-b-[#F06292] opacity-80" 
               style={{ transform: 'rotateY(-90deg) rotateX(45deg) translateZ(14px) translateY(-9px)' }} />
          {/* Right */}
          <div className="absolute w-0 h-0 border-x-[24px] border-x-transparent border-b-[18px] border-b-[#EC407A] opacity-80" 
               style={{ transform: 'rotateY(90deg) rotateX(45deg) translateZ(14px) translateY(-9px)' }} />

          {/* Pavilion Facets (Lower pointed part) */}
          {/* Front */}
          <div className="absolute w-0 h-0 border-x-[24px] border-x-transparent border-t-[36px] border-t-[#FF1493] opacity-90" 
               style={{ transform: 'rotateX(-15deg) translateZ(14px) translateY(18px)' }} />
          {/* Back */}
          <div className="absolute w-0 h-0 border-x-[24px] border-x-transparent border-t-[36px] border-t-[#D81B60] opacity-90" 
               style={{ transform: 'rotateX(15deg) translateZ(-14px) translateY(18px)' }} />
          {/* Left */}
          <div className="absolute w-0 h-0 border-x-[24px] border-x-transparent border-t-[36px] border-t-[#C2185B] opacity-90" 
               style={{ transform: 'rotateY(-90deg) rotateX(-15deg) translateZ(14px) translateY(18px)' }} />
          {/* Right */}
          <div className="absolute w-0 h-0 border-x-[24px] border-x-transparent border-t-[36px] border-t-[#AD1457] opacity-90" 
               style={{ transform: 'rotateY(90deg) rotateX(-15deg) translateZ(14px) translateY(18px)' }} />

          {/* Sparkles */}
          <div className="absolute w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_12px_white]" 
               style={{ transform: 'translateZ(20px) translateX(8px) translateY(-10px)' }} />
          <div className="absolute w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-[0_0_15px_white]" 
               style={{ transform: 'translateZ(-15px) translateX(-10px) translateY(4px)', animationDelay: '0.3s' }} />
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" 
               style={{ transform: 'translateZ(8px) translateX(-12px) translateY(12px)', animationDelay: '0.6s' }} />
        </div>
      </div>
      <style>{`
        @keyframes spin-y {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};
