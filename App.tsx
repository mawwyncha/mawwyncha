
import React, { useState } from 'react';
import { FloralElement } from './components/FloralElement';
import { Book } from './components/Book';
import { SkillNode } from './components/SkillNode';
import { EXPERIENCES, STORIES, ILLUSTRATIONS, SKILL_TREES, STATS } from './constants';
import { ShortStory, Stat, SkillTree } from './types';

const App: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<ShortStory | null>(null);
  const [selectedTree, setSelectedTree] = useState<SkillTree | null>(null);
  const [hoveredStat, setHoveredStat] = useState<Stat | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleStatMouseMove = (e: React.MouseEvent, stat: Stat) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    if (hoveredStat?.short !== stat.short) {
      setHoveredStat(stat);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFEFA] selection:bg-[#E2DFFD] transition-all duration-700">
      
      {/* Main Content Container */}
      <div className="world-container flex flex-col items-center gap-20 py-16 px-4 md:px-0">
        
        {/* Hero & Character Status Section */}
        <section className="relative w-full max-w-7xl flex flex-col lg:flex-row items-stretch gap-8">
          
          {/* Main Profile Card */}
          <div className="flex-[1.5] bg-white/60 p-12 md:p-16 rounded-[3rem] backdrop-blur-md border-4 border-[#E8F0E3] shadow-xl hover-lift flex flex-col md:flex-row items-center gap-12">
            <div className="relative group flex-shrink-0">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-[#FFE1E9] pixel-shadow transition-transform duration-700 group-hover:rotate-6">
                <img 
                  src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80&w=800" 
                  alt="Maulida Dwi Cahyani" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maulida';
                  }}
                />
              </div>
              <FloralElement x="-40px" y="0px" color="#E2DFFD" delay={0} />
              <FloralElement x="240px" y="200px" color="#FFE1E9" delay={0.5} />
              <FloralElement x="50%" y="-50px" color="#E8F0E3" delay={0.8} />
              
              {/* Level Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#8B93B8] text-white px-6 py-3 border-2 border-white pixel-font text-[13px] shadow-lg whitespace-nowrap transition-all duration-300 hover:bg-[#FFE1E9] hover:text-[#7E82A1] hover:scale-105 cursor-pointer">
                RANK: HYBRID BUILD
              </div>
            </div>

            <div className="flex-1 text-center md:text-left flex flex-col justify-center">
              <div className="mb-4">
                <h1 className="pixel-font text-5xl md:text-6xl lg:text-7xl text-[#7E82A1] tracking-tighter leading-tight transition-all duration-1000 cursor-default hover:text-transparent hover:bg-clip-text hover:bg-[length:200%_200%] hover:bg-gradient-to-r hover:from-[#FFD1DC] hover:via-[#E2DFFD] hover:via-[#F0F8FF] hover:via-[#FFE1E9] hover:to-[#FFD1DC] hover:animate-[iridescent_6s_ease-in-out_infinite] hover:drop-shadow-[0_0_5px_rgba(226,223,253,0.4)] hover:[-webkit-text-stroke:2px_#7E82A1] [paint-order:stroke_fill]">
                  Hi, I'm Maw!
                </h1>
              </div>
              <h2 className="pixel-font text-lg text-[#9EA2C1] mb-2 uppercase tracking-[0.3em]">MAULIDA DWI CAHYANI</h2>
              <p className="retro-font text-3xl text-[#A4B494] mb-6 font-bold tracking-widest uppercase leading-none">
                Linguist | Tech Learner | Visual Artist | Storyteller
              </p>
              <div className="bg-white/80 p-6 md:p-8 border-l-[10px] border-[#E2DFFD] rounded-r-2xl retro-font text-2xl text-gray-600 leading-relaxed italic shadow-sm max-w-2xl">
                "Localization expert shifting toward high-quality AI data alignment."
              </div>
            </div>
          </div>

          {/* RPG Stats Sidebar */}
          <div className="w-full lg:w-96 bg-[#8B93B8] p-8 rounded-[3rem] text-white border-4 border-white shadow-xl flex flex-col justify-center gap-10 hover-lift overflow-visible">
            <div>
              <div className="text-center mb-6">
                <h3 className="pixel-font text-[14px] mb-2">PLAYER STATS</h3>
                <div className="w-full h-[2px] bg-white/20 mt-4"></div>
              </div>
              <div className="space-y-4">
                {STATS.map(stat => (
                  <div 
                    key={stat.short} 
                    className="group relative cursor-help"
                    onMouseMove={(e) => handleStatMouseMove(e, stat)}
                    onMouseEnter={() => setHoveredStat(stat)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="pixel-font text-[12px] opacity-80 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        {stat.label}
                        <span className="text-[10px] text-[#E2DFFD] font-bold">[{stat.short}]</span>
                      </span>
                      <span className="pixel-font text-[12px]">{stat.value}</span>
                    </div>
                    <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#E2DFFD] to-[#FFE1E9] transition-all duration-1000"
                        style={{ width: `${stat.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Title Section - Using inline-block and vertical padding to prevent horizontal text cutting */}
            <div className="pt-8 border-t-2 border-white/20 text-center group/title cursor-default overflow-visible">
              <div className="mb-2">
                <span className="pixel-font text-[10px] opacity-60 inline-block py-2 tracking-widest uppercase mb-0 leading-normal">
                  TITLE ATTAINED
                </span>
              </div>
              <div className="relative overflow-visible">
                <span className="pixel-font text-[13px] text-[#FFE1E9] uppercase tracking-normal transition-all duration-300 group-hover/title:text-white group-hover/title:drop-shadow-[0_0_20px_#FFE1E9] group-hover/title:scale-110 inline-block py-2 leading-normal">
                  Narrative Alchemist
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SKILL TREES Grid */}
        <section className="w-full max-w-7xl text-center">
          <div className="bg-[#E8F0E3]/40 p-12 rounded-[3rem] border-4 border-white hover-lift">
            <h2 className="pixel-font text-2xl mb-12 text-[#7E82A1] bg-white inline-block px-10 py-5 border-4 border-[#8B93B8] shadow-[8px_8px_0px_#8B93B8]">
              CORE SKILL TREES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
              {SKILL_TREES.map((tree) => (
                <SkillNode key={tree.id} tree={tree} onClick={setSelectedTree} />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full max-w-6xl text-center hover-lift">
          <div className="bg-[#E2DFFD]/40 p-12 rounded-[3rem] border-4 border-white">
            <h2 className="pixel-font text-2xl mb-12 text-[#7E82A1] bg-white inline-block px-10 py-5 border-4 border-[#8B93B8] shadow-[8px_8px_0px_#8B93B8]">
              MY ILLUSTRATIONS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {ILLUSTRATIONS.map(item => (
                <div key={item.id} className="group relative overflow-hidden rounded-2xl border-4 border-white pixel-shadow hover:scale-105 transition-all duration-500 bg-white">
                  <img src={item.url} alt={item.title} className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-[#E2DFFD]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="pixel-font text-[12px] bg-white text-[#7E82A1] px-4 py-3 border-2 border-[#8B93B8]">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book Showcase Section */}
        <section className="w-full max-w-6xl text-center bg-white/40 p-20 rounded-[5rem] border-4 border-[#E2DFFD]/60 relative overflow-hidden hover-lift shadow-inner">
           <FloralElement x="8%" y="15%" color="#FFE1E9" delay={1} />
           <FloralElement x="90%" y="70%" color="#E8F0E3" delay={1.4} />
           
          <h2 className="pixel-font text-3xl mb-20 text-[#7E82A1] tracking-[0.2em] underline decoration-[#FFE1E9] decoration-8 underline-offset-8 uppercase">Quest Logs</h2>
          <div className="flex flex-wrap justify-center gap-24">
            {STORIES.map(story => (
              <Book key={story.id} story={story} onClick={setSelectedStory} />
            ))}
          </div>
          <p className="mt-14 pixel-font text-[12px] text-[#7E82A1]/60 uppercase tracking-[0.3em] animate-pulse">Open a tome to start the story</p>
        </section>

        {/* Experience Timeline */}
        <section className="w-full max-w-5xl hover-lift">
          <h2 className="pixel-font text-2xl mb-16 text-center text-[#A4B494]">ADVENTURE JOURNEY</h2>
          <div className="space-y-12 relative">
            <div className="absolute left-8 top-0 bottom-0 w-1.5 bg-[#E8F0E3] rounded-full" />
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-24 group">
                <div className="absolute left-5 top-2 w-7 h-7 bg-white border-4 border-[#A4B494] rounded-full group-hover:bg-[#A4B494] group-hover:scale-125 transition-all z-10 shadow-md" />
                <div className="bg-white/60 p-12 rounded-[2.5rem] border-2 border-[#FFFEFA] pixel-shadow group-hover:bg-white group-hover:-translate-x-2 transition-all duration-500">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-3">
                    <div>
                      <h3 className="pixel-font text-base text-[#7E82A1] mb-2">{exp.title}</h3>
                      <p className="retro-font text-4xl font-bold text-gray-700 tracking-wide">{exp.company}</p>
                    </div>
                    <span className="pixel-font text-[13px] bg-[#E2DFFD]/40 px-6 py-2.5 rounded-full text-[#7E82A1] border border-[#E2DFFD]">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside retro-font text-3xl text-gray-500 space-y-3 leading-relaxed">
                    {exp.details.map((detail, dIdx) => <li key={dIdx} className="hover:text-[#8B93B8] transition-colors">{detail}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer / CTA */}
        <section className="w-full max-w-4xl text-center py-24 mb-40 hover-lift">
          <div className="bg-white/80 p-16 border-4 border-[#8B93B8] rounded-3xl shadow-[16px_16px_0px_#E2DFFD] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all duration-500">
            <h2 className="pixel-font text-2xl mb-12 leading-relaxed text-[#7E82A1] animate-pulse">
              "DO YOU ENJOY YOUR JOURNEY? <br/> PLEASE CONTACT ME!"
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <a 
                href="mailto:maulida.dc@gmail.com"
                className="pixel-font text-base bg-[#FFE1E9] text-[#7E82A1] px-14 py-7 hover:brightness-105 transition-all border-b-[10px] border-[#D6A2AD] active:border-b-0 active:translate-y-2 rounded-xl"
              >
                SEND MESSAGE
              </a>
              <a 
                href="https://github.com/maulidadc"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-font text-base bg-[#E8F0E3] text-[#7E82A1] px-14 py-7 hover:brightness-105 transition-all border-b-[10px] border-[#9BB096] active:border-b-0 active:translate-y-2 rounded-xl"
              >
                VIEW GITHUB
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Dynamic Stat Tooltip */}
      {hoveredStat && (
        <div 
          className="fixed z-[200] pointer-events-none bg-white text-[#7E82A1] p-5 rounded-xl border-2 border-[#8B93B8] shadow-2xl w-64 animate-in fade-in zoom-in duration-200"
          style={{ 
            left: `${mousePos.x - 128}px`,
            top: `${mousePos.y - 140}px`,
            maxWidth: 'calc(100vw - 40px)' 
          }}
        >
          <span className="pixel-font text-[11px] block mb-2 underline">{hoveredStat.label}</span>
          <p className="retro-font text-xl leading-tight opacity-90">{hoveredStat.description}</p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-[#8B93B8] rotate-45"></div>
        </div>
      )}

      {/* Skill Tree Modal */}
      {selectedTree && (
        <div 
          className="fixed inset-0 z-[100] bg-[#7E82A1]/40 backdrop-blur-lg flex items-center justify-center p-6 transition-all duration-500"
          onClick={() => setSelectedTree(null)}
        >
          <div 
            className="bg-white max-w-md w-full p-6 border-[6px] relative shadow-[12px_12px_0px_rgba(139,147,184,0.1)] rounded-[2.5rem] animate-[modalPop_0.4s_cubic-bezier(0.18,0.89,0.32,1.28)]"
            onClick={e => e.stopPropagation()}
            style={{ borderColor: selectedTree.accent }}
          >
            <button 
              onClick={() => setSelectedTree(null)}
              className="absolute -top-5 -right-5 bg-white text-[#7E82A1] w-10 h-10 flex items-center justify-center border-4 border-[#8B93B8] pixel-font text-lg hover:bg-[#E2DFFD] transition-all rounded-full shadow-lg"
            >
              ×
            </button>
            
            <div className="flex items-center gap-4 mb-4 border-b-4 border-gray-50 pb-4">
                <span className="text-4xl drop-shadow-lg">{selectedTree.emoji}</span>
                <div className="overflow-hidden">
                    <h3 className="pixel-font text-[14px] text-[#7E82A1] mb-1 uppercase tracking-tight truncate">{selectedTree.title}</h3>
                    <div className="flex items-center gap-2">
                        <p className="retro-font text-lg font-bold opacity-60 tracking-wider truncate">{selectedTree.subtitle}</p>
                        <span className="pixel-font text-[8px] bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100 flex-shrink-0">{selectedTree.level}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-3 custom-scrollbar">
                {selectedTree.tiers.map((tier, idx) => (
                    <div key={idx} className="bg-[#FFFEFA] p-4 rounded-xl border border-gray-100 shadow-sm group relative overflow-hidden">
                        <div className="flex flex-col mb-3 gap-1">
                            <h4 className="pixel-font text-[10px] text-[#7E82A1] border-b border-[#FFE1E9] inline-block self-start">{tier.name}</h4>
                            <span className={`pixel-font text-[8px] px-2 py-0.5 rounded-full border self-start ${
                                tier.status.includes('Unlocked') ? 'bg-green-50 border-green-100 text-green-600' : 
                                tier.status.includes('Passive') ? 'bg-purple-50 border-purple-100 text-purple-600' :
                                tier.status.includes('WIP') || tier.status.includes('Progress') ? 'bg-yellow-50 border-yellow-100 text-yellow-600' : 
                                tier.status.includes('Locked') ? 'bg-gray-50 border-gray-100 text-gray-400' : 'bg-gray-50 border-gray-100 text-gray-400'
                            }`}>
                                {tier.status.includes('Unlocked') ? '✅ ' : 
                                 tier.status.includes('Locked') ? '🔒 ' : 
                                 (tier.status.includes('WIP') || tier.status.includes('Progress')) ? '🟡 ' : ''}
                                {tier.status}
                            </span>
                        </div>
                        <ul className="space-y-2">
                            {tier.skills.map((skill, sIdx) => (
                                <li key={sIdx} className="retro-font text-lg text-gray-600 flex items-center gap-3 p-1.5 bg-white/50 rounded-lg border border-transparent hover:border-gray-50 transition-all">
                                    <span className="text-[#D6A2AD] text-lg flex-shrink-0 animate-pulse select-none">✦</span>
                                    <span className="leading-tight">{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Story Modal */}
      {selectedStory && (
        <div 
          className="fixed inset-0 z-[100] bg-[#8B93B8]/40 backdrop-blur-xl flex items-center justify-center p-6 transition-all duration-500"
          onClick={() => setSelectedStory(null)}
        >
          <div 
            className="bg-white max-w-4xl w-full p-20 border-[12px] border-[#E2DFFD] relative shadow-2xl rounded-[4rem] animate-[modalPop_0.5s_cubic-bezier(0.34,1.56,0.64,1)]"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedStory(null)}
              className="absolute -top-8 -right-8 bg-[#FFE1E9] text-[#7E82A1] w-16 h-16 flex items-center justify-center border-4 border-[#8B93B8] pixel-font text-2xl hover:bg-[#E2DFFD] transition-all shadow-xl"
            >
              ×
            </button>
            <h3 className="pixel-font text-3xl mb-12 text-center text-[#7E82A1] underline decoration-[#FFE1E9] decoration-8 underline-offset-[12px]">
              {selectedStory.title}
            </h3>
            <div className="bg-[#FFFEFA] p-12 rounded-3xl border-2 border-[#E2DFFD]/30 shadow-inner">
              <p className="retro-font text-5xl leading-relaxed text-gray-700 whitespace-pre-wrap first-letter:text-8xl first-letter:text-[#FFE1E9] first-letter:font-bold first-letter:mr-4 first-letter:float-left">
                {selectedStory.content}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.85) translateY(60px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        @keyframes iridescent {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8f8f8;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E2DFFD;
          border-radius: 10px;
          border: 2px solid #f8f8f8;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #8B93B8;
        }
      `}</style>

    </div>
  );
};

export default App;
