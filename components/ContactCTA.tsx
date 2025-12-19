
import React from 'react';

const PixelFlowerIcon = ({ color = "#F472B6" }) => (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="4" height="4" fill={color}/>
    <rect x="4" y="8" width="4" height="4" fill={color}/>
    <rect x="12" y="8" width="4" height="4" fill={color}/>
    <rect x="8" y="12" width="4" height="4" fill={color}/>
    <rect x="8" y="8" width="4" height="4" fill="#FDE68A"/>
  </svg>
);

export const ContactCTA: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-3xl">
      <div className="bg-black p-1">
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] relative overflow-hidden">
          {/* Decorative Corner Flowers */}
          <div className="absolute top-2 left-2 opacity-50"><PixelFlowerIcon color="#FBCFE8" /></div>
          <div className="absolute bottom-2 right-2 opacity-50"><PixelFlowerIcon color="#FBCFE8" /></div>
          
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="w-16 h-16 bg-pink-100 flex items-center justify-center border-4 border-black animate-bounce">
              <PixelFlowerIcon />
            </div>

            <div className="space-y-4">
              <h2 className="pixel-font text-lg md:text-xl text-pink-500 leading-tight">
                QUEST COMPLETE!
              </h2>
              <p className="retro-font text-2xl md:text-3xl text-gray-700 leading-relaxed italic">
                "Did you enjoy your journey through my world? I'm always looking for new party members for my next adventure. Let's create something beautiful together!"
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 w-full max-w-md justify-center pt-4">
              <a 
                href="mailto:maulida.dc@gmail.com" 
                className="bg-black text-white px-8 py-4 pixel-font text-[10px] border-4 border-black hover:bg-pink-500 transition-all hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none flex items-center justify-center gap-4"
              >
                <span>YES! CONTACT ME</span>
                <span className="animate-pulse">▶</span>
              </a>
              <button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="bg-white text-black px-8 py-4 pixel-font text-[10px] border-4 border-black hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none"
              >
                PLAY AGAIN
              </button>
            </div>
            
            <p className="pixel-font text-[8px] text-gray-400 pt-4 uppercase">
              Current Location: Jakarta, Indonesia • Ready for remote quests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
