
import React, { useState } from 'react';

interface StarElementProps {
  x: string;
  y: string;
  color: string;
  delay?: number;
  scale?: number;
  ambient?: boolean;
}

export const StarElement: React.FC<StarElementProps> = ({ 
  x, 
  y, 
  color, 
  delay = 0, 
  scale = 1,
  ambient = false 
}) => {
  const [isGlowing, setIsGlowing] = useState(false);

  return (
    <div 
      className={`absolute transition-all duration-1000 cubic-bezier(0.175, 0.885, 0.32, 1.275) ${ambient ? 'z-0 pointer-events-none opacity-40' : 'z-20 cursor-pointer'}`}
      style={{ 
        left: x, 
        top: y, 
        transform: `scale(${isGlowing ? scale * 2.2 : scale}) rotate(${isGlowing ? '144deg' : '0deg'})`,
        filter: isGlowing ? `drop-shadow(0 0 20px ${color})` : 'none',
        animation: ambient 
          ? `float-ambient 12s ease-in-out infinite alternate ${delay}s`
          : `float-modern 5s ease-in-out infinite alternate ${delay}s`
      }}
      onMouseEnter={() => !ambient && setIsGlowing(true)}
      onMouseLeave={() => !ambient && setIsGlowing(false)}
    >
      <svg width="48" height="48" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))' }}>
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" stroke="#8B93B8" strokeWidth="1" />
      </svg>
      <style>{`
        @keyframes float-modern {
          0% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(-8px) rotate(-2deg); }
        }
        @keyframes float-ambient {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(30px, -40px) rotate(10deg); }
          66% { transform: translate(-20px, -20px) rotate(-10deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};
