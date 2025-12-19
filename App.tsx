
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { GallerySection } from './components/GallerySection';
import { StoryShowcase } from './components/StoryShowcase';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

const FlowerParticle: React.FC<{ left: string; delay: string; duration: string }> = ({ left, delay, duration }) => (
  <div 
    className="flower-particle"
    style={{ left, animationDelay: delay, animationDuration: duration }}
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="4" height="4" fill="#F472B6"/>
      <rect x="4" y="8" width="4" height="4" fill="#F472B6"/>
      <rect x="12" y="8" width="4" height="4" fill="#F472B6"/>
      <rect x="8" y="12" width="4" height="4" fill="#F472B6"/>
      <rect x="8" y="8" width="4" height="4" fill="#FDE68A"/>
    </svg>
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'gallery', 'stories', 'skills', 'education'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          if (scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'START' },
    { id: 'about', label: 'BIO' },
    { id: 'experience', label: 'QUESTS' },
    { id: 'gallery', label: 'ART' },
    { id: 'stories', label: 'LIBRARY' },
    { id: 'skills', label: 'STATS' },
    { id: 'education', label: 'LOOT' },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Floating Flowers */}
      <FlowerParticle left="10%" delay="0s" duration="15s" />
      <FlowerParticle left="25%" delay="5s" duration="18s" />
      <FlowerParticle left="45%" delay="2s" duration="20s" />
      <FlowerParticle left="70%" delay="8s" duration="14s" />
      <FlowerParticle left="85%" delay="3s" duration="16s" />

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl">
        <div className="bg-white/80 backdrop-blur-md border-4 border-black p-2 flex justify-around items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`pixel-font text-[7px] md:text-[9px] px-2 md:px-3 py-1 transition-all ${
                activeSection === item.id 
                ? 'bg-pink-400 text-white translate-y-1 shadow-none' 
                : 'hover:bg-pink-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-32 bg-white">
          <AboutSection />
        </section>

        <section id="experience" className="py-32 bg-[#F0FDFA]">
          <ExperienceSection />
        </section>

        <section id="gallery" className="py-32 bg-white">
          <GallerySection />
        </section>

        <section id="stories" className="py-32 bg-[#FFF7ED]">
          <StoryShowcase />
        </section>

        <section id="skills" className="py-32 bg-white">
          <SkillsSection />
        </section>

        <section id="education" className="py-32 bg-[#F5F3FF]">
          <EducationSection />
        </section>

        <section className="py-32 bg-white">
          <ContactCTA />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
