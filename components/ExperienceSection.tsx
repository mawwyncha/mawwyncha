
import React from 'react';

const PixelFlowerIcon = ({ color = "#F472B6" }) => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="4" height="4" fill={color}/>
    <rect x="4" y="8" width="4" height="4" fill={color}/>
    <rect x="12" y="8" width="4" height="4" fill={color}/>
    <rect x="8" y="12" width="4" height="4" fill={color}/>
    <rect x="8" y="8" width="4" height="4" fill="#FDE68A"/>
  </svg>
);

const experiences = [
  {
    title: 'AI DATA ANNOTATOR',
    company: 'Transsion Indonesia',
    period: 'Nov 2025 - Present',
    color: 'bg-yellow-50',
    flowerColor: '#FBBF24',
    description: 'Collecting and recording high-quality Indonesian speech data, validating audio datasets, and performing linguistic checks.'
  },
  {
    title: 'MTPE SUBTITLE TRANSLATOR',
    company: 'Deluxe',
    period: 'Jun 2025 - Present',
    color: 'bg-emerald-50',
    flowerColor: '#34D399',
    description: 'Machine Translation Post-Editing (MTPE) for subtitle content ensuring natural fluency and contextual accuracy.'
  },
  {
    title: 'SUBTITLE EDITOR',
    company: 'Iyuno Media Group',
    period: 'Dec 2018 - Feb 2025',
    color: 'bg-blue-50',
    flowerColor: '#60A5FA',
    description: 'Edited and QA-checked subtitles for film, TV, and games. Handled MTPE and collaborated with project managers.'
  },
  {
    title: 'SUBTITLE TRANSLATOR',
    company: 'PT. MNC Sky Vision Tbk',
    period: 'Feb 2016 - Aug 2018',
    color: 'bg-purple-50',
    flowerColor: '#A78BFA',
    description: 'Translated English subtitles into natural Indonesian for satellite pay-TV broadcasting.'
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="flex items-center justify-center gap-4 mb-16">
        <PixelFlowerIcon color="#10B981" />
        <h2 className="pixel-font text-xl text-center underline decoration-teal-300 decoration-4">
          WORK HISTORY
        </h2>
        <PixelFlowerIcon color="#10B981" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className={`pixel-card ${exp.color} border-4 border-black group overflow-hidden`}
          >
            <div className="absolute -top-1 -right-1 opacity-20 group-hover:opacity-100 transition-opacity">
               <PixelFlowerIcon color={exp.flowerColor} />
            </div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1 mr-2">
                <h3 className="pixel-font text-[9px] md:text-[10px] leading-relaxed mb-2 uppercase">{exp.title}</h3>
                <p className="text-xs font-bold text-gray-600 tracking-tight">{exp.company}</p>
              </div>
              <span className="pixel-font text-[7px] bg-black text-white px-2 py-1 whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              {exp.description}
            </p>
            <div className="flex gap-2">
              <span className="w-2 h-2 bg-black"></span>
              <span className="w-2 h-2 bg-black opacity-30"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
