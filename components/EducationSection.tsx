
import React from 'react';

export const EducationSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h2 className="pixel-font text-xl mb-8 flex items-center gap-4">
            <span className="inline-block w-8 h-8 bg-yellow-400 border-2 border-black"></span>
            EDUCATION
          </h2>
          <div className="space-y-8">
            <div className="relative pl-8 border-l-4 border-black">
              <div className="absolute top-0 -left-[10px] w-4 h-4 bg-black"></div>
              <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-widest">Oct 2010 - Jan 2014</p>
              <h3 className="pixel-font text-xs md:text-sm leading-relaxed mb-2 uppercase">Universitas Gunadarma</h3>
              <p className="text-gray-600 font-medium italic">Bachelor of Arts - English Literature</p>
              <p className="mt-2 text-pink-500 font-bold pixel-font text-[10px]">GPA 3.09</p>
            </div>
          </div>

          <h2 className="pixel-font text-xl mt-12 mb-8 flex items-center gap-4">
            <span className="inline-block w-8 h-8 bg-blue-400 border-2 border-black"></span>
            CERTIFICATION
          </h2>
          <div className="bg-white border-4 border-black p-6">
            <h3 className="pixel-font text-[10px] mb-2">TOEFL Prediction</h3>
            <p className="text-gray-500 mb-4 text-sm font-bold uppercase tracking-tighter">ESQ English Course (2023-2024)</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 p-2 border border-dashed border-gray-400">
                <p className="text-gray-400 text-[10px] uppercase font-bold">Listening</p>
                <p className="font-bold text-lg">620</p>
              </div>
              <div className="bg-gray-50 p-2 border border-dashed border-gray-400">
                <p className="text-gray-400 text-[10px] uppercase font-bold">Structure</p>
                <p className="font-bold text-lg">530</p>
              </div>
              <div className="bg-gray-50 p-2 border border-dashed border-gray-400">
                <p className="text-gray-400 text-[10px] uppercase font-bold">Vocab/Reading</p>
                <p className="font-bold text-lg">560</p>
              </div>
              <div className="bg-pink-100 p-2 border-2 border-black">
                <p className="text-pink-600 text-[10px] uppercase font-bold">Total Score</p>
                <p className="font-bold text-xl">570</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="pixel-font text-xl mb-8 flex items-center gap-4">
            <span className="inline-block w-8 h-8 bg-green-400 border-2 border-black"></span>
            COLLEGE QUESTS
          </h2>
          <div className="space-y-6">
            {[
              { date: 'Nov 2012', title: 'Created Hobby Club', desc: 'Managed gathering place for Japanese pop culture lovers.' },
              { date: 'Sep 2013', title: 'Research Report', desc: 'Title: The Analysis of English Polysemous Words.' },
              { date: 'Jan 2014', title: 'Production Staff', desc: 'Theater of Hysteria with Ministry of Tourism Indonesia.' },
              { date: 'Sep 2014', title: 'Undergraduate Thesis', desc: 'Analysis on Mary Oliver & Walt Whitman poetry.' },
            ].map((ach, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="pixel-font text-[8px] mt-1 text-gray-400 whitespace-nowrap">{ach.date}</span>
                <div>
                  <h4 className="pixel-font text-[10px] leading-relaxed mb-1 uppercase tracking-tighter">{ach.title}</h4>
                  <p className="text-xs text-gray-600 italic">{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
