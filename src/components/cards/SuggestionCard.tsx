import { useState } from 'react';
import SuggestionsCarousel from '../carousels/SuggestionsCarousel';
import { curatedPlaylists } from '../../data/playlists';
import DetailsCard from './DetailsCard';

export default function SuggestionCard() {
  const [selectedPlaylist, setSelectedPlaylist] = useState<typeof curatedPlaylists[0] | null>(null);
  const carouselItems = curatedPlaylists.map((playlist) => (
    <div
      key={playlist.id}
      className="px-2 sm:px-3"
    >
      <div 
        className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
        style={{ backgroundColor: '#1b1c2f' }}
        onClick={() => setSelectedPlaylist(playlist)}
      >
        <div className="relative h-48 sm:h-56 overflow-hidden" style={{ backgroundColor: '#1b1c2f' }}>
          <img
            src={playlist.image}
            alt={playlist.title}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), transparent)' }} />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white px-2 py-1 rounded text-xs font-medium shadow-lg" style={{ backgroundColor: '#7a6b4a', color: 'white' }}>
                {playlist.trackCount} tracks
              </span>
              <span className="hidden md:block text-white px-2 py-1 rounded text-xs font-medium shadow-lg" style={{ backgroundColor: '#7a6b4a', color: 'white' }}>
                {playlist.duration}
              </span>
            </div>
            <h3 className="font-serif font-bold text-lg mb-1 transition-colors" style={{ color: 'white' }}>
              {playlist.title}
            </h3>
          </div>
        </div>
        <div className="p-4 border-t border-white/10" style={{ backgroundColor: '#1b1c2f' }}>
          <p className="text-sm mb-3 leading-relaxed line-clamp-2 font-medium" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            {playlist.description}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="pt-4 md:pt-6 pb-2 md:pb-3" style={{ backgroundColor: '#1b1c2f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 md:mb-8" style={{ color: 'white' }}>
            Curated Collections
          </h2>
          <SuggestionsCarousel
            items={carouselItems}
            itemsVisible={4}
            className="pb-4"
          />
        </div>
      </section>
      {selectedPlaylist && (
        <DetailsCard
          isOpen={!!selectedPlaylist}
          onClose={() => setSelectedPlaylist(null)}
          title={selectedPlaylist.title}
          subtitle={`${selectedPlaylist.trackCount} tracks • ${selectedPlaylist.duration}`}
          creators={selectedPlaylist.curator}
          content={selectedPlaylist.detailedContent || selectedPlaylist.description}
          image={selectedPlaylist.image}
          actionButtonText="Listen to Playlist"
        />
      )}
    </>
  );
}

