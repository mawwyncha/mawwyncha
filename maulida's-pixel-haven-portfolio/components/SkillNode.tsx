
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
      className="p-8 border-4 rounded-3xl transition-all duration-300 group hover:-translate-y-2 hover:shadow-[12px_12px_0px_rgba(139,147,184,0.05)] relative overflow-hidden cursor-pointer bg-white/40 backdrop-blur-sm"
      style={{ 
        borderColor: tree.accent,
        color: tree.accent 
      }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="relative">
          <span className="text-5xl block transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
            {tree.emoji}
          </span>
          <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Star3D />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="pixel-font text-[12px] opacity-60 mb-1">Tree Level</span>
          <span className="pixel-font text-base font-bold">{tree.level}</span>
        </div>
      </div>
      
      <h3 className="pixel-font text-[14px] leading-relaxed mb-1 min-h-[3rem] uppercase">
        {tree.title}
      </h3>
      <p className="retro-font text-2xl font-bold opacity-60 mb-5 tracking-wider">
        ({tree.subtitle})
      </p>
      
      <div className="bg-white/40 p-4 rounded-xl border border-white/20 group-hover:bg-white/60 transition-colors shadow-inner">
        <div className="flex justify-between items-center mb-2">
          <span className="pixel-font text-[11px] group-hover:animate-[blink_0.3s_step-end_infinite]">
            {tree.stars}
          </span>
        </div>
        <div className="pixel-font text-[10px] opacity-70 uppercase tracking-tighter">
          {tree.tier}
        </div>
      </div>

      <div className="mt-4 pixel-font text-[8px] opacity-0 group-hover:opacity-100 transition-opacity text-center uppercase tracking-widest font-bold">
        Expand Tree
      </div>
    </div>
  );
};
