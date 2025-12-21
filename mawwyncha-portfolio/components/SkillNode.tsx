
import React from 'react';
import { SkillTree } from '../types';
import { Star3D } from './Star3D';

interface SkillNodeProps {
  tree: SkillTree;
  onClick: (tree: SkillTree) => void;
}

export const SkillNode: React.FC<SkillNodeProps> = ({ tree, onClick }) => {
  return (
    <div 
      onClick={() => onClick(tree)}
      className="p-8 border-4 rounded-[2.5rem] transition-all duration-300 group hover:-translate-y-4 hover:shadow-[12px_12px_0px_rgba(139,147,184,0.1)] relative overflow-hidden cursor-pointer bg-white/60 backdrop-blur-sm border-dashed"
      style={{ 
        borderColor: tree.accent,
        color: tree.accent 
      }}
    >
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="relative">
          <span className="text-5xl block transform group-hover:scale-125 transition-transform duration-500 drop-shadow-xl">
            {tree.emoji}
          </span>
          <div className="absolute -top-6 -right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
            <Star3D />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="pixel-font text-[8px] opacity-70 mb-1 uppercase tracking-tighter">Tree Level</span>
          <span className="pixel-font text-sm font-bold bg-white/40 px-2 py-1 rounded-lg border-2 border-current shadow-sm">{tree.level}</span>
        </div>
      </div>
      
      <div className="relative z-10">
        <h3 className="pixel-font text-[14px] leading-relaxed mb-1 min-h-[3rem] uppercase tracking-tight">
          {tree.title}
        </h3>
        <p className="retro-font text-xl font-bold opacity-60 mb-5 tracking-widest border-l-4 border-current pl-3">
          {tree.subtitle}
        </p>
      </div>
      
      <div className="bg-white/60 p-4 rounded-xl border-2 border-white/40 group-hover:bg-white/80 transition-colors shadow-inner relative z-10">
        <div className="flex justify-between items-center mb-2">
          <span className="pixel-font text-[10px] group-hover:animate-[blink_0.4s_step-end_infinite] text-[#D6A2AD]">
            {tree.stars}
          </span>
        </div>
        <div className="pixel-font text-[8px] opacity-80 uppercase tracking-tighter flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
            {tree.tier}
        </div>
      </div>

      <div className="mt-4 pixel-font text-[7px] opacity-0 group-hover:opacity-100 transition-all duration-500 text-center uppercase tracking-[0.3em] font-bold text-[#8B93B8]">
        Click to Expand Tree
      </div>

      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-current opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
    </div>
  );
};
