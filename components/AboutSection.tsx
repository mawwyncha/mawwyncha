
import React from 'react';

const PixelFlowerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 20 20" className="inline-block" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="4" height="4" fill="#F472B6"/>
    <rect x="4" y="8" width="4" height="4" fill="#F472B6"/>
    <rect x="12" y="8" width="4" height="4" fill="#F472B6"/>
    <rect x="8" y="12" width="4" height="4" fill="#F472B6"/>
    <rect x="8" y="8" width="4" height="4" fill="#FDE68A"/>
  </svg>
);

export const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-3xl">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-56 h-56 flex-shrink-0 relative">
          <div className="absolute -inset-2 bg-pink-200 border-4 border-black translate-x-4 translate-y-4"></div>
          <div className="absolute -top-4 -left-4 z-20"><PixelFlowerIcon /></div>
          <img 
            src="https://picsum.photos/seed/maw_portrait/400/400" 
            alt="Maw" 
            className="w-full h-full object-cover border-4 border-black relative z-10"
          />
        </div>
        
        <div className="flex-1">
          <h2 className="pixel-font text-xl mb-6 flex items-center gap-2">
            <span className="text-pink-400 opacity-50"><PixelFlowerIcon /></span> BIO
          </h2>
          <div className="bg-white border-2 border-dashed border-pink-200 p-8 rounded-lg shadow-sm">
            <p className="text-md leading-relaxed text-gray-700 italic">
              "With 10 years of experience in localization, I bring strong linguistic intuition, 
              cultural awareness, and detail-driven execution. As AI rapidly evolves, I've shifted 
              my focus toward AI training and data evaluation."
            </p>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Beyond language work, I explore illustration, photography, storytelling, and UI/UX design 
              to blend creativity with clear, user-centered thinking.
            </p>
          </div>
          
          <div className="mt-8 flex gap-8">
            <div className="text-center">
              <p className="pixel-font text-lg text-pink-400">10+</p>
              <p className="text-[10px] uppercase font-bold text-gray-400">Years Exp</p>
            </div>
            <div className="text-center border-l-2 border-gray-100 pl-8">
              <p className="pixel-font text-lg text-teal-500">AI</p>
              <p className="text-[10px] uppercase font-bold text-gray-400">Focused</p>
            </div>
            <div className="text-center border-l-2 border-gray-100 pl-8">
              <p className="pixel-font text-lg text-purple-400">IDN</p>
              <p className="text-[10px] uppercase font-bold text-gray-400">Native</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
