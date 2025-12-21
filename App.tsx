
import React, { useState, useEffect } from 'react';
import { StarElement } from './components/StarElement';
import { AmbientBackground } from './components/AmbientBackground';
import { Book } from './components/Book';
import { SkillNode } from './components/SkillNode';
import { EXPERIENCES, STORIES, ILLUSTRATIONS, SKILL_TREES, STATS, EDUCATION, ACHIEVEMENTS, CERTIFICATIONS } from './constants';
import { ShortStory, Stat, SkillTree, Illustration } from './types';

interface QuestItem {
  name: string;
  description: string;
  content: string;
  placeholderUrl?: string;
}

interface QuestDetail {
  title: string;
  description: string;
  content: string;
  type: 'image' | 'audio' | 'text' | 'multi';
  placeholderUrl?: string;
  items?: QuestItem[];
}

const SIDE_QUESTS_DETAILS: Record<string, QuestDetail> = {
  "Threadcraft": {
    title: "Threadcraft",
    description: "Yarn & Fiber Arts",
    content: "Weaving logic into tangible art through hooks, needles, and yarn.",
    type: 'multi',
    items: [
      {
        name: "Crocheting",
        description: "Hook & Loops",
        content: "Creating intricate patterns and structures using a single hook and yarn.",
        placeholderUrl: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&q=80&w=600"
      },
      {
        name: "Knitting",
        description: "Twin Needles",
        content: "Constructing soft fabrics through interlocking loops with two needles.",
        placeholderUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  "Tale and Poetic Weaving": {
    title: "Tale and Poetic Weaving",
    description: "Narrative Arts",
    content: "Crafting chronicles and verses that bridge imagination and reality.",
    type: 'multi',
    items: [
      {
        name: "Short Story",
        description: "Prose & Chronicles",
        content: "Expansive worlds condensed into bite-sized journeys.",
        placeholderUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600"
      },
      {
        name: "Poetry",
        description: "Verses & Rhythm",
        content: "The geometry of emotion expressed through structured rhyme.",
        placeholderUrl: "https://images.unsplash.com/photo-1516414447565-b14be0adc13e?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  "Vocal Harmony": {
    title: "Vocal Harmony",
    description: "Vocal Arts",
    content: "Exploring resonance, tone, and character through vocal expression.",
    type: 'multi',
    items: [
      {
        name: "Singing",
        description: "Melodic Expression",
        content: "Exploring resonance and emotional depth through song.",
        placeholderUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600"
      },
      {
        name: "Dubbing",
        description: "Voice Characterization",
        content: "Linguistic adaptation and bringing characters to life via voice-over.",
        placeholderUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  "Sketchcraft": {
    title: "Sketchcraft",
    description: "Visual Arts",
    content: "Visual alchemy using pixels and strokes to define aesthetic boundaries.",
    type: 'multi',
    items: [
      {
        name: "Illustration",
        description: "Digital Art",
        content: "Crafting characters and environments with vibrant pixel and digital strokes.",
        placeholderUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600"
      },
      {
        name: "Cover Design",
        description: "Media Aesthetics",
        content: "Designing book covers and media assets that tell a story before the first page.",
        placeholderUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600"
      }
    ]
  }
};

const App: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<ShortStory | null>(null);
  const [selectedTree, setSelectedTree] = useState<SkillTree | null>(null);
  const [selectedQuest, setSelectedQuest] = useState<QuestDetail | null>(null);
  const [selectedArt, setSelectedArt] = useState<Illustration | null>(null);
  const [hoveredStat, setHoveredStat] = useState<Stat | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const roles = [
    { title: "Indonesian Linguist", lv: "MAX" },
    { title: "Tech Learner", lv: "UPDATING..." },
    { title: "illustrator", lv: "Lv. 40" },
    { title: "Storyteller", lv: "Lv. 99" }
  ];

  const journeyPalette = [
    { bg: '#E2DFFD', accent: '#8B93B8', border: '#C5BDFD', shadow: '#B0A7E6' },
    { bg: '#FFE1E9', accent: '#D6A2AD', border: '#FFC4D4', shadow: '#EBB4C0' },
    { bg: '#E8F0E3', accent: '#9BB096', border: '#D1E0C9', shadow: '#C0D4B8' },
    { bg: '#F0F8FF', accent: '#9EA2C1', border: '#CCE7FF', shadow: '#BBDDFF' },
  ];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedStory(null);
        setSelectedTree(null);
        setSelectedQuest(null);
        setSelectedArt(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleStatHover = (stat: Stat | null) => {
    setHoveredStat(stat);
  };

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#FF00FF] selection:text-white transition-all duration-700 relative overflow-x-hidden" onMouseMove={handleMouseMove}>
      
      <AmbientBackground />

      <div className="world-container flex flex-col items-center gap-16 pt-32 pb-40 px-4 md:px-0 relative z-10">
        
        {/* Main Character Sheet */}
        <section className="relative w-full max-w-7xl flex flex-col lg:flex-row items-stretch gap-6 px-4 md:px-0">
          <div className="flex-[1.8] bg-white/80 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-md border-4 border-[#E8F0E3] shadow-2xl hover-lift flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative overflow-hidden">
            <div className="absolute top-4 right-8 opacity-20 pointer-events-none">
                <StarElement x="0" y="0" color="#E2DFFD" scale={1.5} ambient />
            </div>

            <div className="relative group flex-shrink-0 flex flex-col items-center justify-center">
              <div className="w-56 h-56 md:w-60 md:h-60 rounded-full overflow-hidden border-8 border-[#FFE1E9] pixel-shadow transition-transform duration-700 group-hover:rotate-3 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80&w=800" 
                  alt="Maulida Dwi Cahyani" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 bg-[#8B93B8] text-white px-5 py-2 border-4 border-white pixel-font text-[9px] shadow-xl whitespace-nowrap transition-all duration-300 hover:bg-[#FFE1E9] hover:text-[#7E82A1] hover:scale-110 cursor-default">
                ACTIVELY SEEKING
              </div>
            </div>

            <div className="flex-1 flex flex-col items-start justify-center text-left">
              <div className="mb-4">
                <h1 className="pixel-font text-4xl md:text-5xl lg:text-5xl tracking-tighter mb-2 text-[#7E82A1] hover:text-[#FF00FF] transition-all duration-700 cursor-default leading-tight">
                  Hi,<br />I'm Maw!
                </h1>
                <h2 className="pixel-font text-[10px] text-[#9EA2C1] uppercase tracking-[0.4em]">Maulida Dwi Cahyani</h2>
              </div>
              
              <div className="flex flex-col items-start justify-center py-2">
                <div className="flex flex-col items-start gap-2">
                  {roles.map((role, idx) => (
                    <div key={idx} className="group/role flex items-center gap-3 cursor-default transition-all duration-300">
                      <p className="retro-font text-2xl text-[#A4B494] font-bold tracking-widest uppercase leading-none">
                        {role.title}
                      </p>
                      <span className="opacity-0 group-hover/role:opacity-100 transition-all duration-300 pixel-font text-[7px] bg-[#FFE1E9] text-[#7E82A1] px-2 py-0.5 rounded-md border border-[#D6A2AD]">
                        {role.lv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 border-l-[12px] border-[#E2DFFD] rounded-r-3xl retro-font text-2xl text-gray-700 leading-relaxed italic shadow-inner w-full max-w-lg relative iridescent-bio">
                "10 years of experience in localization, shifting focus toward AI training and data evaluation—leveraging the ability to understand context, nuance, and user intent."
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[320px] bg-[#8B93B8] p-8 rounded-[2.5rem] text-white border-4 border-white shadow-2xl flex flex-col justify-center gap-6 hover-lift overflow-visible">
            <div>
              <div className="text-center mb-6">
                <h3 className="pixel-font text-[12px] mb-2 uppercase tracking-tighter text-[#FFE1E9]">PLAYER STATS</h3>
                <div className="w-full h-[2px] bg-white/20 rounded-full"></div>
              </div>
              <div className="space-y-4">
                {STATS.map(stat => (
                  <div key={stat.short} className="group relative cursor-help" onMouseEnter={() => handleStatHover(stat)} onMouseLeave={() => handleStatHover(null)}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="pixel-font text-[9px] opacity-80">{stat.label}</span>
                      <span className="pixel-font text-[9px] text-[#FFE1E9]">{stat.value}</span>
                    </div>
                    <div className="h-2 bg-black/20 rounded-full overflow-hidden border border-white/10 shadow-inner">
                      <div className="h-full bg-gradient-to-r from-[#E2DFFD] via-[#FFE1E9] to-white transition-all duration-1000" style={{ width: `${stat.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t-2 border-white/20 text-center relative group">
              <span className="pixel-font text-[8px] opacity-70 tracking-widest uppercase block mb-1">TITLE</span>
              <span className="pixel-font text-[11px] text-[#FFE1E9] uppercase relative inline-block transition-all duration-300 group-hover:scale-110 group-hover:text-white">
                Narrative Alchemist
                <div className="absolute -top-3 -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse pointer-events-none">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#FFF176"><path d="M12 1L14.5 9L23 9L16 14L18.5 22L12 17L5.5 22L8 14L1 9L9.5 9L12 1Z" /></svg>
                </div>
              </span>
            </div>
          </div>
        </section>

        {/* Skill Trees */}
        <section className="w-full max-w-7xl px-4 md:px-0">
          <div className="bg-[#E8F0E3]/40 p-12 rounded-[3rem] border-4 border-white hover-lift shadow-xl">
            <h2 className="pixel-font text-lg mb-12 text-center text-[#7E82A1] bg-white inline-block px-10 py-5 border-4 border-[#8B93B8] shadow-[8px_8px_0px_#8B93B8] uppercase">
              Core Skill Trees
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-8">
              {SKILL_TREES.map((tree) => (
                <SkillNode key={tree.id} tree={tree} onClick={setSelectedTree} />
              ))}
            </div>
          </div>
        </section>

        {/* Adventure Journey */}
        <section className="w-full max-w-5xl mt-8 px-4 md:px-0">
          <h2 className="pixel-font text-lg mb-20 text-center text-[#A4B494] uppercase tracking-[0.2em] relative">
            Adventure Journey
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#E8F0E3] rounded-full"></div>
          </h2>
          <div className="space-y-16 relative pb-16">
            <div className="absolute left-6 top-4 bottom-0 w-1.5 bg-[#E8F0E3] rounded-full opacity-50" />
            {EXPERIENCES.map((exp, idx) => {
              const theme = journeyPalette[idx % journeyPalette.length];
              return (
                <div key={idx} className="relative pl-24 group/exp">
                  <div className="absolute left-1.5 top-8 w-10 h-10 transition-all duration-500 z-20" style={{ color: theme.accent }}>
                    <div className="w-full h-full bg-white border-4 rounded-full shadow-lg group-hover/exp:scale-125 group-hover/exp:rotate-90 flex items-center justify-center transition-all" style={{ borderColor: 'currentColor' }}>
                        <div className="w-3 h-3 rounded-full bg-current"></div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[3rem] opacity-40 transition-transform duration-500 group-hover/exp:translate-x-6 group-hover/exp:translate-y-6" style={{ backgroundColor: theme.shadow }} />
                    <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[3rem] border-4 transition-transform duration-500 group-hover/exp:translate-x-3 group-hover/exp:translate-y-3" style={{ borderColor: theme.border, backgroundColor: 'white' }} />
                    <div className="relative bg-white p-10 md:p-12 rounded-[3rem] border-4 transition-all duration-500 shadow-xl group-hover/exp:-translate-y-2" style={{ borderColor: theme.bg }}>
                      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                             <h3 className="pixel-font text-[10px] uppercase tracking-tighter" style={{ color: theme.accent }}>{exp.title}</h3>
                             <div className="h-[2px] w-8 rounded-full" style={{ backgroundColor: theme.bg }}></div>
                          </div>
                          <p className="retro-font text-5xl font-bold text-gray-800 leading-tight">{exp.company}</p>
                        </div>
                        <span className="pixel-font text-[9px] px-6 py-2 rounded-2xl border-2 transition-colors group-hover/exp:bg-white" style={{ backgroundColor: theme.bg, borderColor: theme.border, color: theme.accent }}>
                          {exp.period}
                        </span>
                      </div>
                      <p className="retro-font text-2xl text-gray-500 mb-8 italic border-l-4 pl-6" style={{ borderColor: theme.bg }}>"{exp.description}"</p>
                      <div className="transition-all duration-700 overflow-hidden max-h-0 group-hover/exp:max-h-[800px] opacity-0 group-hover/exp:opacity-100">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                          {exp.details.map((detail, dIdx) => (
                              <li key={dIdx} className="retro-font text-2xl text-gray-600 flex gap-3 leading-snug">
                                <span className="text-xl" style={{ color: theme.accent }}>✧</span>
                                <span className="flex-1">{detail}</span>
                              </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Archive Section */}
        <section className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 px-4 md:px-0">
          <div className="bg-[#FFE1E9]/30 p-12 rounded-[3rem] border-4 border-white shadow-xl hover-lift">
            <h2 className="pixel-font text-[14px] mb-10 text-[#7E82A1] uppercase tracking-widest border-b-4 border-[#FFE1E9] inline-block pb-2">Archive</h2>
            
            {/* Education History */}
            <div className="space-y-6 mb-12">
              <h3 className="pixel-font text-[10px] text-[#D6A2AD] uppercase mb-4 opacity-70 tracking-tighter">Education History</h3>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="bg-white/70 p-6 rounded-2xl border-2 border-[#FFE1E9] shadow-sm hover:border-[#FF00FF] transition-all group">
                  <span className="pixel-font text-[8px] text-[#D6A2AD] block mb-2">{edu.period}</span>
                  <h3 className="retro-font text-3xl font-bold text-gray-800 mb-1 group-hover:text-[#FF00FF] transition-colors">{edu.school}</h3>
                  <p className="retro-font text-2xl text-[#7E82A1]">{edu.degree}</p>
                  <span className="pixel-font text-[9px] bg-[#FFE1E9] px-3 py-1 rounded-lg text-[#7E82A1] mt-2 inline-block">{edu.gpa}</span>
                </div>
              ))}
            </div>

            {/* Certification Section - Re-styled as boxes similar to Education, NO ICONS */}
            <div className="space-y-6">
              <h3 className="pixel-font text-[10px] text-[#D6A2AD] uppercase mb-4 opacity-70 tracking-tighter">Certification</h3>
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="bg-white/70 p-6 rounded-2xl border-2 border-[#FFE1E9] shadow-sm hover:border-[#FF00FF] transition-all group">
                  <span className="pixel-font text-[8px] text-[#D6A2AD] block mb-2">{cert.year}</span>
                  <h3 className="retro-font text-3xl font-bold text-gray-800 mb-1 group-hover:text-[#FF00FF] transition-colors">{cert.name}</h3>
                  <p className="retro-font text-2xl text-[#7E82A1] mb-2">{cert.issuer}</p>
                  
                  {cert.name === "TOEFL Prediction" && (
                    <div className="mt-4 p-4 bg-[#FFE1E9]/20 rounded-xl border border-[#FFE1E9] space-y-1">
                       <div className="flex justify-between retro-font text-lg"><span className="text-[#7E82A1]">Listening Comprehension</span> <span className="font-bold text-gray-800">620</span></div>
                       <div className="flex justify-between retro-font text-lg"><span className="text-[#7E82A1]">Structure & Written Exp.</span> <span className="font-bold text-gray-800">530</span></div>
                       <div className="flex justify-between retro-font text-lg"><span className="text-[#7E82A1]">Vocab. & Reading Comp.</span> <span className="font-bold text-gray-800">560</span></div>
                       <div className="pt-2 border-t border-[#FFE1E9] flex justify-between pixel-font text-[9px] text-[#FF00FF]"><span>TOTAL SCORE</span> <span className="font-bold">570</span></div>
                    </div>
                  )}
                  
                  {cert.name === "Typing Speed - Indonesia" && (
                     <span className="pixel-font text-[9px] bg-[#FFE1E9]/50 px-3 py-1 rounded-lg text-[#7E82A1] mt-2 inline-block font-bold">422 CPM / 84 WPM</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#E2DFFD]/30 p-12 rounded-[3rem] border-4 border-white shadow-xl hover-lift">
            <h2 className="pixel-font text-[14px] mb-10 text-[#7E82A1] uppercase tracking-widest border-b-4 border-[#E2DFFD] inline-block pb-2">Achievements</h2>
            <div className="grid grid-cols-1 gap-4">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="flex gap-6 items-center bg-white/60 p-5 rounded-2xl border-2 border-white hover:bg-white transition-colors group">
                  <div className="w-14 h-14 bg-[#E2DFFD] rounded-full flex items-center justify-center text-2xl shadow-inner group-hover:rotate-12 transition-transform">🏆</div>
                  <div>
                    <span className="pixel-font text-[8px] opacity-60 block">{ach.date}</span>
                    <h4 className="pixel-font text-[10px] text-[#7E82A1] mb-1">{ach.title}</h4>
                    <p className="retro-font text-xl text-gray-500">{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Side Quests */}
        <section className="w-full max-w-5xl text-center py-12 hover-lift px-4 md:px-0">
          <div className="bg-white/40 p-10 rounded-[4rem] border-4 border-[#E8F0E3] backdrop-blur-sm">
            <h2 className="pixel-font text-sm mb-8 text-[#A4B494] uppercase tracking-[0.4em]">Side Quests</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {Object.keys(SIDE_QUESTS_DETAILS).map((questName, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedQuest(SIDE_QUESTS_DETAILS[questName])}
                  className="pixel-font text-[9px] bg-white text-[#7E82A1] px-6 py-3 border-4 border-[#E8F0E3] rounded-2xl shadow-sm hover:scale-110 hover:border-[#8B93B8] transition-all cursor-pointer"
                >
                  {questName}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Art Codex */}
        <section className="w-full max-w-7xl mt-8 px-4 md:px-0">
          <div className="bg-white/80 p-12 rounded-[3rem] border-4 border-[#FFE1E9] shadow-2xl relative overflow-hidden">
            <h2 className="pixel-font text-lg mb-12 text-center text-[#7E82A1] uppercase tracking-[0.3em]">ART CODEX</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {ILLUSTRATIONS.map((art) => (
                <div 
                  key={art.id} 
                  onClick={() => setSelectedArt(art)}
                  className="relative group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-lg transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_rgba(255,225,233,0.8)]">
                    <img 
                      src={art.url} 
                      alt={art.title} 
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-150" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FFE1E9]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="pixel-font text-[7px] text-[#7E82A1] bg-white px-4 py-2 rounded-full shadow-sm">
                         View Details
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="pixel-font text-[8px] text-[#7E82A1] bg-white/50 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {art.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tome Codex */}
        <section className="w-full max-w-7xl mt-8 px-4 md:px-0">
          <div className="bg-white/80 p-12 rounded-[3rem] border-4 border-[#E2DFFD] shadow-2xl relative overflow-hidden">
            <h2 className="pixel-font text-lg mb-16 text-center text-[#7E82A1] uppercase tracking-[0.3em]">TOME CODEX</h2>
            <div className="flex flex-wrap justify-center gap-12 pb-8">
              {STORIES.map((story) => (
                <Book key={story.id} story={story} onClick={setSelectedStory} />
              ))}
            </div>
          </div>
        </section>

        {/* The Workshop Section */}
        <section className="w-full max-w-4xl text-center pb-20 px-4 md:px-0">
          <div className="bg-[#E8F0E3]/40 p-12 rounded-[3.5rem] border-4 border-white shadow-xl hover-lift relative overflow-hidden">
            <h2 className="pixel-font text-sm mb-12 text-[#7E82A1] uppercase tracking-[0.4em]">The Workshop</h2>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20">
              <a href="https://linkedin.com/in/maulidadc" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-white rounded-2xl border-4 border-[#8B93B8] flex items-center justify-center shadow-[6px_6px_0px_#8B93B8] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#8B93B8"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93 .76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </div>
                <span className="pixel-font text-[10px] mt-6 text-[#7E82A1]">LinkedIn</span>
              </a>
              <a href="https://www.upwork.com/freelancers/~0185e7869677271457" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-white rounded-2xl border-4 border-[#A4B494] flex items-center justify-center shadow-[6px_6px_0px_#A4B494] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#A4B494" strokeWidth="2"><path d="M18.59 5.11a5.41 5.41 0 0 0-3.36 1.15 15.14 15.14 0 0 0-1.12-2.34L12.55 3l-1.12.78a15.84 15.84 0 0 1 1.51 3.82 4.14 4.14 0 0 0-3.4 3.4 5.21 5.21 0 0 0 1.15 3.36 15.14 15.14 0 0 0 2.34-1.12l.89-1.56"/></svg>
                </div>
                <span className="pixel-font text-[10px] mt-6 text-[#7E82A1]">Upwork</span>
              </a>
              <a href="https://github.com/maulidadc" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-white rounded-2xl border-4 border-[#D6A2AD] flex items-center justify-center shadow-[6px_6px_0px_#D6A2AD] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#D6A2AD"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
                </div>
                <span className="pixel-font text-[10px] mt-6 text-[#7E82A1]">GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <section className="w-full max-w-4xl text-center py-16 px-4 md:px-0">
          <div className="bg-white/95 p-14 border-8 border-[#8B93B8] rounded-[3rem] shadow-[18px_18px_0px_#E2DFFD] hover-lift">
            <h2 className="pixel-font text-xl mb-8 text-[#7E82A1] uppercase leading-relaxed tracking-tighter">
              "Call for Guild Alliance"
            </h2>
            <div className="mb-10 px-6">
              <p className="retro-font text-3xl normal-case block mb-6 text-[#5D617A] max-w-3xl mx-auto leading-relaxed">
                A seasoned mercenary of language and narrative seeks a guild ready for the next quest. 
                Together, we can refine language systems, strengthen narratives, and build future-ready solutions.
              </p>
              <p className="pixel-font text-[10px] text-[#8B93B8] block mt-4 animate-pulse uppercase tracking-widest">
                I am ready to join forces.
              </p>
            </div>
            <div className="bg-[#F0F8FF] p-10 rounded-[2.5rem] border-4 border-dashed border-[#8B93B8]/20 flex flex-col items-center gap-8 shadow-inner">
              <a 
                href="mailto:maulida.dc@gmail.com" 
                className="pixel-font text-sm bg-[#FF00FF] text-white px-16 py-8 border-b-[10px] border-[#D100D1] active:border-b-0 active:translate-y-2 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <span className="group-hover:animate-pulse">RECRUIT</span>
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Modals & Tooltips */}

      {/* Art Preview Modal - RESIZED: max-w-md for compact item look */}
      {selectedArt && (
        <div className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-md flex items-center justify-center p-6" onClick={() => setSelectedArt(null)}>
           <div className="relative max-w-md w-full bg-white p-2 rounded-[2rem] border-[8px] border-[#FFE1E9] shadow-[0_0_50px_rgba(255,225,233,0.5)] animate-in fade-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
             <button onClick={() => setSelectedArt(null)} className="absolute -top-4 -right-4 w-12 h-12 bg-white border-4 border-[#FFE1E9] rounded-full pixel-font text-xl flex items-center justify-center cursor-pointer shadow-xl hover:bg-red-50 transition-colors z-10">×</button>
             <div className="overflow-hidden rounded-[1.5rem]">
               <img src={selectedArt.url} alt={selectedArt.title} className="w-full h-auto max-h-[60vh] object-contain bg-[#F8F8F8]" />
             </div>
             <div className="p-6 text-center bg-[#FFFEFA] rounded-b-[1.5rem] border-t-4 border-[#FFE1E9]">
                <h3 className="pixel-font text-[9px] text-[#7E82A1] uppercase mb-1 tracking-widest leading-relaxed">{selectedArt.title}</h3>
                <p className="retro-font text-xl text-[#8B93B8] italic opacity-70">"A rare artifact from the digital archives"</p>
                <div className="mt-4 flex justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFE1E9] animate-pulse"></span>
                  <span className="w-2 h-2 rounded-full bg-[#E2DFFD] animate-pulse delay-75"></span>
                  <span className="w-2 h-2 rounded-full bg-[#E8F0E3] animate-pulse delay-150"></span>
                </div>
             </div>
           </div>
        </div>
      )}

      {hoveredStat && (
        <div className="fixed z-[200] pointer-events-none bg-white/95 text-[#7E82A1] p-5 rounded-2xl border-4 border-[#8B93B8] shadow-2xl w-64 animate-in fade-in zoom-in duration-200" style={{ left: `${mousePos.x - 128}px`, top: `${mousePos.y - 140}px` }}>
          <span className="pixel-font text-[11px] block mb-2 underline decoration-[#FFE1E9] decoration-4">{hoveredStat.label}</span>
          <p className="retro-font text-xl leading-snug text-gray-700">{hoveredStat.description}</p>
        </div>
      )}

      {selectedQuest && (
        <div className="fixed inset-0 z-[250] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setSelectedQuest(null)}>
          <div className={`bg-white ${selectedQuest.type === 'multi' ? 'max-w-4xl' : 'max-w-lg'} w-full p-10 border-[8px] border-[#8B93B8] rounded-[3rem] shadow-2xl relative animate-in fade-in zoom-in duration-300 overflow-y-auto max-h-[90vh] custom-scrollbar`} onClick={e => e.stopPropagation()}>
             <button onClick={() => setSelectedQuest(null)} className="absolute top-4 right-4 w-12 h-12 bg-white border-4 border-[#8B93B8] rounded-full pixel-font text-xl flex items-center justify-center cursor-pointer hover:bg-red-50 transition-colors">×</button>
             <h3 className="pixel-font text-lg text-[#7E82A1] uppercase mb-8 text-center">{selectedQuest.title}</h3>
             {selectedQuest.type === 'multi' && selectedQuest.items ? (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {selectedQuest.items.map((item, idx) => (
                   <div key={idx} className="bg-[#FFFEFA] p-6 rounded-[2rem] border-4 border-dashed border-[#8B93B8]/20 flex flex-col items-center group hover:border-[#8B93B8]/40 transition-all">
                      <img src={item.placeholderUrl} className="w-full aspect-video rounded-xl object-cover mb-4 group-hover:scale-105 transition-transform" alt={item.name} />
                      <h4 className="pixel-font text-[11px] text-[#7E82A1] mb-2 uppercase">{item.name}</h4>
                      <p className="retro-font text-2xl text-gray-500 text-center leading-snug">"{item.content}"</p>
                   </div>
                 ))}
               </div>
             ) : (
               <p className="retro-font text-3xl text-gray-600 leading-snug italic text-center">"{selectedQuest.content}"</p>
             )}
          </div>
        </div>
      )}

      {selectedTree && (
        <div className="fixed inset-0 z-[100] bg-[#7E82A1]/60 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setSelectedTree(null)}>
          <div className="bg-white max-w-xl w-full p-8 border-[6px] rounded-[3rem] shadow-2xl relative" onClick={e => e.stopPropagation()} style={{ borderColor: selectedTree.accent }}>
            <button onClick={() => setSelectedTree(null)} className="absolute -top-4 -right-4 w-12 h-12 bg-white border-4 border-[#7E82A1] rounded-full pixel-font text-xl flex items-center justify-center cursor-pointer shadow-lg hover:bg-gray-50">×</button>
            <div className="flex items-center gap-5 mb-6 border-b-4 border-gray-100 pb-6">
              <span className="text-5xl">{selectedTree.emoji}</span>
              <div>
                <h3 className="pixel-font text-[16px] text-[#7E82A1] uppercase mb-1">{selectedTree.title}</h3>
                <p className="retro-font text-2xl font-bold opacity-70 tracking-widest">{selectedTree.subtitle}</p>
              </div>
            </div>
            <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
              {selectedTree.tiers.map((tier, idx) => (
                <div key={idx} className="bg-[#FFFEFA] p-5 rounded-2xl border-2 border-gray-100">
                  <h4 className="pixel-font text-[10px] text-[#7E82A1] mb-3 uppercase">{tier.name}</h4>
                  <ul className="space-y-2">
                    {tier.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="retro-font text-xl text-gray-600 flex items-start gap-3">
                        <span className="text-[#FF00FF]">✦</span> {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedStory && (
        <div className="fixed inset-0 z-[100] bg-[#8B93B8]/60 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setSelectedStory(null)}>
           <div className="bg-[#FFFEFA] max-w-2xl w-full p-12 border-[8px] rounded-[3rem] shadow-2xl relative" onClick={e => e.stopPropagation()} style={{ borderColor: selectedStory.coverColor }}>
             <button onClick={() => setSelectedStory(null)} className="absolute -top-4 -right-4 w-12 h-12 bg-white border-4 border-[#8B93B8] rounded-full pixel-font text-xl flex items-center justify-center shadow-xl cursor-pointer hover:bg-white/80">×</button>
             <h3 className="pixel-font text-xl text-[#7E82A1] uppercase mb-8 border-b-4 border-dashed pb-6" style={{ borderColor: selectedStory.coverColor }}>{selectedStory.title}</h3>
             <div className="retro-font text-3xl leading-relaxed text-gray-700 italic">
               "{selectedStory.content}"
             </div>
           </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f8f8f8; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #FF00FF; border-radius: 10px; border: 2px solid #f8f8f8; }
        
        @keyframes iridescent-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes bio-blinking-glow {
          0%, 100% { box-shadow: inset 0 0 15px rgba(226, 223, 253, 0.1); border-color: #E2DFFD; }
          50% { box-shadow: inset 0 0 30px rgba(255, 0, 255, 0.4); border-color: #FF00FF; }
        }

        .iridescent-bio {
          background: linear-gradient(-45deg, #F8FBFA, #E2DFFD, #FFE1E9, #E8F0E3, #F8FBFA);
          background-size: 300% 300%;
          animation: iridescent-shift 10s ease infinite, bio-blinking-glow 4s ease-in-out infinite;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default App;