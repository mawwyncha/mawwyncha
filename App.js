
import React, { useState, useEffect } from 'react';
import { EXPERIENCES, STORIES, ILLUSTRATIONS, SKILL_TREES, STATS, EDUCATION, ACHIEVEMENTS, CERTIFICATIONS } from './constants.js';

// Komponen Sederhana di dalam satu file agar tidak terjadi error path di GitHub
const Star3D = () => (
  <div className="w-10 h-10 animate-bounce">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF176">
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>
  </div>
);

const App = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedTree, setSelectedTree] = useState(null);
  
  const journeyPalette = [
    { bg: '#E2DFFD', accent: '#8B93B8' },
    { bg: '#FFE1E9', accent: '#D6A2AD' },
    { bg: '#E8F0E3', accent: '#9BB096' },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="world-container flex flex-col items-center gap-16 pt-32 pb-40 px-4">
        
        {/* Profile Card */}
        <section className="relative w-full max-w-7xl flex flex-col lg:flex-row gap-6">
          <div className="flex-[1.8] bg-white/80 p-10 rounded-[2.5rem] backdrop-blur-md border-4 border-[#E8F0E3] shadow-2xl flex flex-col md:flex-row items-center gap-12">
            <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-[#FFE1E9] shadow-xl">
              <img src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-left">
              <h1 className="pixel-font text-5xl text-[#7E82A1] mb-2">Hi,<br />I'm Maw!</h1>
              <p className="retro-font text-2xl text-gray-700 italic border-l-8 border-[#E2DFFD] pl-6 py-2">
                "10 years of experience in localization, shifting focus toward AI training and data evaluation."
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="w-full lg:w-[320px] bg-[#8B93B8] p-8 rounded-[2.5rem] text-white border-4 border-white shadow-2xl">
            <h3 className="pixel-font text-[12px] mb-6 text-[#FFE1E9] text-center uppercase tracking-tighter">Player Stats</h3>
            <div className="space-y-4">
              {STATS.map(stat => (
                <div key={stat.short}>
                  <div className="flex justify-between pixel-font text-[9px] mb-1">
                    <span>{stat.label}</span>
                    <span>{stat.value}</span>
                  </div>
                  <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white transition-all duration-1000" style={{ width: `${stat.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skill Trees */}
        <section className="w-full max-w-7xl">
          <div className="bg-[#E8F0E3]/40 p-12 rounded-[3rem] border-4 border-white shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILL_TREES.map(tree => (
              <div key={tree.id} onClick={() => setSelectedTree(tree)} className="p-6 bg-white border-4 border-dashed rounded-[2rem] hover:-translate-y-2 transition-all cursor-pointer" style={{borderColor: tree.accent}}>
                <span className="text-4xl block mb-4">{tree.emoji}</span>
                <h3 className="pixel-font text-[12px] text-[#7E82A1] mb-2">{tree.title}</h3>
                <p className="retro-font text-lg opacity-60 uppercase">{tree.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Journey */}
        <section className="w-full max-w-5xl">
          <h2 className="pixel-font text-center text-[#A4B494] mb-16 uppercase">Adventure Journey</h2>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const theme = journeyPalette[idx % journeyPalette.length];
              return (
                <div key={idx} className="bg-white p-10 rounded-[3rem] border-4 shadow-xl" style={{borderColor: theme.bg}}>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="pixel-font text-[10px] uppercase" style={{color: theme.accent}}>{exp.title}</h3>
                      <p className="retro-font text-4xl font-bold text-gray-800">{exp.company}</p>
                    </div>
                    <span className="pixel-font text-[9px] p-3 rounded-xl" style={{backgroundColor: theme.bg}}>{exp.period}</span>
                  </div>
                  <p className="retro-font text-2xl text-gray-500 italic mb-4">"{exp.description}"</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tome Codex (Books) */}
        <section className="w-full max-w-7xl bg-white/80 p-12 rounded-[3rem] border-4 border-[#E2DFFD] shadow-2xl">
          <h2 className="pixel-font text-lg mb-16 text-center text-[#7E82A1] uppercase tracking-widest">Tome Codex</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {STORIES.map(story => (
              <div key={story.id} onClick={() => setSelectedStory(story)} className="w-44 h-64 bg-white border-4 p-6 rounded-xl hover:-translate-y-6 transition-all cursor-pointer shadow-lg" style={{backgroundColor: story.coverColor, borderColor: '#8B93B844'}}>
                <div className="pixel-font text-[8px] mb-4">VOL.{story.id}</div>
                <div className="retro-font text-2xl font-bold text-[#7E82A1]">{story.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full max-w-4xl text-center py-16">
          <div className="bg-white p-14 border-8 border-[#8B93B8] rounded-[3rem] shadow-[18px_18px_0px_#E2DFFD]">
            <h2 className="pixel-font text-xl mb-8 text-[#7E82A1]">"CALL FOR GUILD ALLIANCE"</h2>
            <a href="mailto:maulida.dc@gmail.com" className="pixel-font bg-[#FF00FF] text-white px-12 py-6 rounded-2xl shadow-lg hover:scale-105 inline-block">RECRUIT ME</a>
          </div>
        </footer>

      </div>

      {/* Modal Skill */}
      {selectedTree && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-md flex items-center justify-center p-6" onClick={() => setSelectedTree(null)}>
          <div className="bg-white p-8 rounded-[3rem] border-8 max-w-lg w-full" style={{borderColor: selectedTree.accent}} onClick={e => e.stopPropagation()}>
            <h3 className="pixel-font text-lg mb-4">{selectedTree.title}</h3>
            <ul className="space-y-3">
              {selectedTree.tiers[0].skills.map((s, i) => (
                <li key={i} className="retro-font text-2xl text-gray-600">✦ {s}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Modal Story */}
      {selectedStory && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-md flex items-center justify-center p-6" onClick={() => setSelectedStory(null)}>
          <div className="bg-[#FFFEFA] p-12 rounded-[3rem] border-8 max-w-2xl w-full" style={{borderColor: selectedStory.coverColor}} onClick={e => e.stopPropagation()}>
            <h3 className="pixel-font text-xl mb-8">{selectedStory.title}</h3>
            <div className="retro-font text-3xl italic">"{selectedStory.content}"</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
