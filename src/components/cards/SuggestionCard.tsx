import SuggestionsCarousel from '../carousels/SuggestionsCarousel';
import { curatedPlaylists } from '../../data/playlists';

export default function SuggestionCard() {
  const carouselItems = curatedPlaylists.map((playlist) => (
    <div
      key={playlist.id}
      className="px-2 sm:px-3"
    >
      <div className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#1b1c2f' }}>
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
              <span className="text-white px-2 py-1 rounded text-xs font-medium shadow-lg" style={{ backgroundColor: '#7a6b4a', color: 'white' }}>
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
          <button
            onClick={(e) => {
              e.preventDefault();
              // Non-functional link
            }}
            className="w-full px-4 py-2 rounded-lg transition-all duration-200 font-semibold text-sm hover:scale-105 shadow-md opacity-0 group-hover:opacity-100"
            style={{ backgroundColor: '#7a6b4a', color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8a7b5a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7a6b4a'}
          >
            Explore Playlist
          </button>
        </div>
      </div>
    </div>
  ));

  return (
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
  );
}

