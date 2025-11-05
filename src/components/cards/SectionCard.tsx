import { useState } from 'react';
import SuggestionsCarousel from '../carousels/SuggestionsCarousel';
import DetailsCard from './DetailsCard';
import type { SectionData } from '../../data/sectionContent';

interface SectionCardProps {
  section: SectionData;
}

export default function SectionCard({ section }: SectionCardProps) {
  const [selectedItem, setSelectedItem] = useState<typeof section.items[0] | null>(null);
  const carouselItems = section.items.map((item) => (
    <div
      key={item.id}
      className="px-2 sm:px-3"
    >
      <div 
        className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
        style={{ backgroundColor: '#1b1c2f' }}
        onClick={() => setSelectedItem(item)}
      >
        <div className="relative h-40 sm:h-48 overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#1b1c2f' }}>
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4), transparent)' }} />
          {item.duration && (
            <div className="absolute top-2 right-2 text-white px-2 py-1 rounded text-xs font-medium shadow-lg" style={{ backgroundColor: '#7a6b4a', color: 'white' }}>
              {item.duration}
            </div>
          )}
        </div>
        <div className="p-3 border-t border-white/10" style={{ backgroundColor: '#1b1c2f' }}>
          <h3 className="font-serif font-bold text-base mb-1 transition-colors" style={{ color: 'white' }}>
            {item.title}
          </h3>
          {item.composer && (
            <p className="hidden sm:block text-xs mb-1 font-medium" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              {item.composer}
            </p>
          )}
          {item.performer && (
            <p className="hidden sm:block text-xs font-medium" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              {item.performer}
            </p>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="py-4 md:py-6" style={{ backgroundColor: '#1b1c2f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 md:mb-8" style={{ color: 'white' }}>
            {section.title}
          </h2>
          <SuggestionsCarousel
            items={carouselItems}
            itemsVisible={4}
            className="pb-4"
          />
        </div>
      </section>
      {selectedItem && (
        <DetailsCard
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          subtitle={selectedItem.composer}
          creators={selectedItem.performer}
          content={selectedItem.detailedContent || `Experience ${selectedItem.title}${selectedItem.composer ? ` by ${selectedItem.composer}` : ''}${selectedItem.performer ? ` performed by ${selectedItem.performer}` : ''}.`}
          image={selectedItem.image}
          additionalInfo={selectedItem.duration ? { duration: selectedItem.duration } : undefined}
          actionButtonText="Watch Now"
          imageFit="contain"
          imageWidth="wide"
        />
      )}
    </>
  );
}

