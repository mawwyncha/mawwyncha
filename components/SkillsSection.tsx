
import React from 'react';

const PixelFlowerIcon = ({ color = "#F472B6" }) => (
  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="4" height="4" fill={color}/>
    <rect x="4" y="8" width="4" height="4" fill={color}/>
    <rect x="12" y="8" width="4" height="4" fill={color}/>
    <rect x="8" y="12" width="4" height="4" fill={color}/>
    <rect x="8" y="8" width="4" height="4" fill="#FDE68A"/>
  </svg>
);

const skillCategories = [
  {
    name: 'SUBTITLE EDITING',
    level: 'EXPERIENCED',
    skills: ['Subtitle Edit', 'Poliscript', 'Aegisub', 'GTS Pro', 'Translator++'],
    color: 'text-pink-400',
    flower: '#F472B6'
  },
  {
    name: 'DRAWING SOFTWARE',
    level: 'EXPERIENCED',
    skills: ['Photoshop', 'IbisPaint X', 'Magicavoxel', 'MS Paint'],
    color: 'text-blue-400',
    flower: '#60A5FA'
  },
  {
    name: 'WEB DEVELOPMENT',
    level: 'LEARNING',
    skills: ['HTML', 'CSS', 'Javascript', 'GitHub', 'React'],
    color: 'text-purple-400',
    flower: '#A78BFA'
  },
  {
    name: 'UI/UX & PROD',
    level: 'LEARNING',
    skills: ['Figma', 'Miro', 'Notion', 'Office 365'],
    color: 'text-teal-400',
    flower: '#2DD4BF'
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="pixel-font text-xl mb-2">CHARACTER STATS</h2>
          <div className="flex gap-2"><PixelFlowerIcon color="#F472B6"/><PixelFlowerIcon color="#2DD4BF"/><PixelFlowerIcon color="#60A5FA"/></div>
        </div>
        <div className="pixel-font text-[9px] text-gray-400 border-2 border-black p-2 bg-gray-50">LVL 24 LINGUIST</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            <div className="flex justify-between items-center border-b-2 border-black pb-2">
              <h3 className={`pixel-font text-[10px] ${cat.color}`}>{cat.name}</h3>
              <span className="text-[9px] font-bold text-gray-400">{cat.level}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="bg-white border-2 border-black px-2 py-1 text-xs font-semibold hover:bg-pink-50 cursor-default transition-colors flex items-center gap-2"
                >
                  <PixelFlowerIcon color={cat.flower} /> {skill}
                </span>
              ))}
            </div>
            <div className="w-full h-3 bg-gray-100 border-2 border-black overflow-hidden relative">
              <div 
                className={`h-full ${cat.level === 'EXPERIENCED' ? 'w-[90%] bg-pink-300' : 'w-[40%] bg-blue-300'}`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-emerald-50 border-4 border-black p-8 relative">
        <div className="absolute -top-4 -right-4 bg-white border-2 border-black p-1 rotate-12"><PixelFlowerIcon color="#10B981" /></div>
        <h3 className="pixel-font text-[10px] mb-4 text-teal-600">PERSONAL INTERESTS / HOBBIES</h3>
        <p className="retro-font text-xl leading-relaxed text-teal-900">
          Writing short stories, Composing poetry, Traditional & Digital Drawing, 
          Crocheting, Knitting, Embroidering, and Singing.
          <br /><br />
          <span className="text-pink-400 font-bold italic">"Creative pursuits that strengthen my linguistic intuition and attention to detail."</span>
        </p>
      </div>
    </div>
  );
};
