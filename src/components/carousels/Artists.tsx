import { useState } from 'react';
import SuggestionsCarousel from './SuggestionsCarousel';
// Import the typescript interface for the artists
import { artists } from '../../data/artists';
import DetailsCard from '../cards/DetailsCard';

// Artists() function that creates the list of recommended artists in a carousel
export default function Artists() {
  const [selectedArtist, setSelectedArtist] = useState<typeof artists[0] | null>(null);
  // Create the carousel items to be mapped in the carousel
  const carouselItems = artists.map((artist) => (
    <div key={artist.id} className="px-2 sm:px-3">
      <div 
        className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
        style={{ backgroundColor: '#1b1c2f' }}
        onClick={() => setSelectedArtist(artist)}
      >
        <div className="relative h-40 sm:h-48 overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#1b1c2f' }}>
          <img
            src={artist.image}
            alt={artist.name}
            className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4), transparent)' }} />
          <div className="absolute top-2 right-2 text-white px-2 py-1 rounded text-xs font-medium shadow-lg" style={{ backgroundColor: '#7a6b4a', color: 'white' }}>
            {artist.instrument}
          </div>
        </div>
        <div className="p-3 border-t border-white/10" style={{ backgroundColor: '#1b1c2f' }}>
          <h3 className="font-serif font-bold text-base mb-1 transition-colors" style={{ color: 'white' }}>
            {artist.name}
          </h3>
        </div>
      </div>
    </div>
  ));

  // Return the artists component using the Artists() function
  return (
    <>
      <section className="py-4 md:py-6" style={{ backgroundColor: '#1b1c2f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 md:mb-8" style={{ color: 'white' }}>
            Recommended Artists
          </h2>
          <SuggestionsCarousel
            items={carouselItems}
            itemsVisible={4}
            className="pb-4"
          />
        </div>
      </section>
      {selectedArtist && (
        <DetailsCard
          isOpen={!!selectedArtist}
          onClose={() => setSelectedArtist(null)}
          title={selectedArtist.name}
          subtitle={selectedArtist.instrument}
          creators={undefined}
          content={selectedArtist.detailedContent || selectedArtist.bio || ''}
          image={selectedArtist.image}
          actionButtonText="View Profile"
        />
      )}
    </>
  );
}

