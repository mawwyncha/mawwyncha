
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
      className="group relative w-52 h-72 cursor-pointer transition-all duration-700 hover:-translate-y-10"
    >
      <div 
        className="w-full h-full rounded-xl border-4 border-[#8B93B8]/40 flex flex-col items-center justify-center p-6 text-center transition-all duration-700 group-hover:shadow-[20px_20px_0px_rgba(139,147,184,0.1)]"
        style={{ 
          backgroundColor: story.coverColor,
          boxShadow: '12px 12px 0px rgba(139, 147, 184, 0.05)'
        }}
      >
        <div className="w-2.5 h-full absolute left-3 top-0 bg-[#8B93B8] opacity-5" />
        <div className="w-2.5 h-full absolute left-5 top-0 bg-white opacity-20" />
        
        <div className="mb-6 bg-white/40 px-4 py-1.5 rounded-full border border-[#8B93B8]/20">
            <span className="pixel-font text-[11px] font-bold tracking-widest text-[#7E82A1]">
                VOL.{story.id}
            </span>
        </div>

        <span className="retro-font text-4xl font-bold leading-tight select-none text-[#7E82A1] px-2 py-5 border-y-2 border-[#8B93B8]/10">
          {story.title}
        </span>
        
        <div className="mt-8 text-[#7E82A1]/40 group-hover:text-[#8B93B8] transition-all duration-500 scale-125">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
