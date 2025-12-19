
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

const artworks = [
  { id: 1, title: 'Pastel Dreams', category: 'Digital Art', img: 'https://picsum.photos/seed/art1/600/400' },
  { id: 2, title: 'Linguistic Flow', category: 'Illustration', img: 'https://picsum.photos/seed/art2/600/400' },
  { id: 3, title: 'Morning Coffee', category: 'Pixel Art', img: 'https://picsum.photos/seed/art3/600/400' },
  { id: 4, title: 'Urban Silence', category: 'Photography', img: 'https://picsum.photos/seed/art4/600/400' },
  { id: 5, title: 'Garden Spirits', category: 'Traditional', img: 'https://picsum.photos/seed/art5/600/400' },
  { id: 6, title: 'Cyber Niche', category: 'Concept', img: 'https://picsum.photos/seed/art6/600/400' },
];

export const GallerySection: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="flex flex-col items-center mb-16">
        <h2 className="pixel-font text-xl mb-4 border-b-4 border-pink-400 pb-2">ILLUSTRATION GALLERY</h2>
        <div className="flex gap-2">
          <PixelFlowerIcon color="#F472B6" />
          <PixelFlowerIcon color="#60A5FA" />
          <PixelFlowerIcon color="#34D399" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((art) => (
          <div key={art.id} className="pixel-card bg-white hover:scale-105 transition-transform duration-300 group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden border-2 border-black mb-4">
              <img 
                src={art.img} 
                alt={art.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="pixel-font text-[9px] mb-1 uppercase">{art.title}</h3>
            <p className="text-[10px] font-bold text-gray-400 tracking-widest">{art.category}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="retro-font text-xl text-gray-500 italic">"Every stroke is a word, every color is a tone."</p>
      </div>
    </div>
  );
};
