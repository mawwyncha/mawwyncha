
import React, { useState } from 'react';

interface Story {
  id: number;
  title: string;
  coverColor: string;
  content: string;
  summary: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: 'The Analysis of Polysemous Words',
    coverColor: 'bg-indigo-400',
    summary: 'A deep dive into the multiple meanings of English vocabulary.',
    content: "Language is not just a tool; it is a living entity. In my research of polysemous words, I found that a single word can hold the weight of an entire culture. 'Spring' is not just a season, it is a rebirth, a source, and a movement..."
  },
  {
    id: 2,
    title: 'Whispers of Mary Oliver',
    coverColor: 'bg-rose-400',
    summary: 'A poetic response to natural observations.',
    content: "The soft light of the morning reminds me of Oliver's verses. The wild geese fly high, not asking for permission to exist. They simply are. In my translation of her soul, I found the quietest parts of my own voice."
  },
  {
    id: 3,
    title: 'The Hobby Club Chronicles',
    coverColor: 'bg-amber-400',
    summary: 'Stories from the gathering place of pop culture lovers.',
    content: "Between the rows of manga and the sound of shared laughter, we built a sanctuary. It wasn't just about Japanese culture; it was about belonging. Each member was a chapter in a book we were writing together."
  },
  {
    id: 4,
    title: 'Poetry of the Digital Age',
    coverColor: 'bg-teal-400',
    summary: 'Bridging the gap between code and rhyme.',
    content: "Binary code is just another alphabet. 0 and 1, yes and no, dark and light. When I write for machines, I try to remember the human on the other side of the screen. Even a database can dream in pastel colors."
  }
];

export const StoryShowcase: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <div className="container mx-auto px-6 max-w-4xl relative">
      <div className="text-center mb-16">
        <h2 className="pixel-font text-xl mb-2">THE LIBRARY</h2>
        <p className="text-sm font-bold text-orange-600 uppercase tracking-widest">Selected Works & Stories</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stories.map((story) => (
          <button 
            key={story.id} 
            onClick={() => setSelectedStory(story)}
            className="group text-left"
          >
            <div className={`aspect-[2/3] ${story.coverColor} border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all flex flex-col justify-end p-4 relative overflow-hidden`}>
              {/* Book Spine Detail */}
              <div className="absolute top-0 left-2 w-1 h-full bg-black/20"></div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-white/30 rounded-full"></div>
              
              <h3 className="pixel-font text-[8px] text-white leading-tight uppercase mb-2">{story.title}</h3>
              <div className="w-full h-1 bg-white/40"></div>
            </div>
            <p className="mt-4 text-[10px] font-bold text-gray-500 uppercase">{story.summary}</p>
          </button>
        ))}
      </div>

      {/* Story Modal (RPG Style) */}
      {selectedStory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
          <div className="bg-white border-4 border-black w-full max-w-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="bg-black text-white p-3 flex justify-between items-center">
              <span className="pixel-font text-[9px] uppercase tracking-tighter">ITEM: {selectedStory.title}</span>
              <button 
                onClick={() => setSelectedStory(null)}
                className="hover:text-pink-400 pixel-font text-[10px]"
              >
                [X]
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-8 md:p-12 overflow-y-auto max-h-[70vh]">
               <div className="border-l-4 border-pink-200 pl-6 mb-8">
                  <h3 className="pixel-font text-lg text-pink-500 mb-2">{selectedStory.title}</h3>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-pink-400"></div>
                    <div className="w-2 h-2 bg-pink-300"></div>
                    <div className="w-2 h-2 bg-pink-200"></div>
                  </div>
               </div>
               
               <div className="retro-font text-xl md:text-2xl leading-relaxed text-gray-700 whitespace-pre-wrap italic">
                 {selectedStory.content}
               </div>

               <div className="mt-12 flex justify-center">
                 <div className="w-24 h-1 bg-gray-100"></div>
               </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t-2 border-dashed border-gray-200 flex justify-center">
              <button 
                onClick={() => setSelectedStory(null)}
                className="bg-black text-white px-8 py-2 pixel-font text-[8px] hover:bg-gray-800"
              >
                CLOSE BOOK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
