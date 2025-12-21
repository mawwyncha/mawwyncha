
import React from 'react';
import { ShortStory } from '../types';

interface BookProps {
  story: ShortStory;
  onClick: (story: ShortStory) => void;
}

export const Book: React.FC<BookProps> = ({ story, onClick }) => {
  return (
    <div 
      onClick={() => onClick(story)}
      className="group relative w-44 h-64 cursor-pointer transition-all duration-700 hover:-translate-y-8"
    >
      <div 
        className="w-full h-full rounded-lg border-4 border-[#8B93B8]/40 flex flex-col items-center justify-center p-5 text-center transition-all duration-700 group-hover:shadow-[15px_15px_0px_rgba(139,147,184,0.1)]"
        style={{ 
          backgroundColor: story.coverColor,
          boxShadow: '8px 8px 0px rgba(139, 147, 184, 0.05)'
        }}
      >
        <div className="w-2 h-full absolute left-2.5 top-0 bg-[#8B93B8] opacity-5" />
        <div className="w-2 h-full absolute left-4.5 top-0 bg-white opacity-20" />
        
        <div className="mb-4 bg-white/40 px-3 py-1 rounded-full border border-[#8B93B8]/20">
            <span className="pixel-font text-[9px] font-bold tracking-widest text-[#7E82A1]">
                VOL.{story.id}
            </span>
        </div>

        <span className="retro-font text-3xl font-bold leading-tight select-none text-[#7E82A1] px-2 py-4 border-y-2 border-[#8B93B8]/10">
          {story.title}
        </span>
        
        <div className="mt-6 text-[#7E82A1]/40 group-hover:text-[#8B93B8] transition-all duration-500 scale-110">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
