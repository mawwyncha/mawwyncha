
import React from 'react';
import { StarElement } from './StarElement';

export const AmbientBackground: React.FC = () => {
  const stars = [
    { x: '5%', y: '10%', color: '#E2DFFD', delay: 0, scale: 0.8 },
    { x: '85%', y: '15%', color: '#FFE1E9', delay: 2, scale: 1.2 },
    { x: '10%', y: '40%', color: '#E8F0E3', delay: 4, scale: 0.6 },
    { x: '90%', y: '60%', color: '#E2DFFD', delay: 1, scale: 0.9 },
    { x: '15%', y: '80%', color: '#FFE1E9', delay: 5, scale: 0.7 },
    { x: '75%', y: '85%', color: '#E8F0E3', delay: 3, scale: 1.1 },
    { x: '45%', y: '5%', color: '#FFE1E9', delay: 6, scale: 0.5 },
    { x: '55%', y: '95%', color: '#E2DFFD', delay: 2.5, scale: 1.3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((s, i) => (
        <StarElement 
          key={i} 
          x={s.x} 
          y={s.y} 
          color={s.color} 
          delay={s.delay} 
          scale={s.scale} 
          ambient={true} 
        />
      ))}
    </div>
  );
};
