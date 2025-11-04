import { upcomingEvents } from '../../data/events';

export default function UpcomingEventsCard() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section className="py-4 md:py-6" style={{ backgroundColor: '#1b1c2f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 md:mb-8" style={{ color: 'white' }}>
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/10"
              style={{ backgroundColor: '#1b1c2f' }}
            >
              {/* Event Image */}
              <div className="h-48 relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#1b1c2f' }}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold mb-2" style={{ color: 'white' }}>
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-sm uppercase tracking-wide" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6" style={{ backgroundColor: '#1b1c2f' }}>
                <div className="text-sm mb-2 font-medium" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {formatDate(event.date)}
                </div>
                <h3 className="text-xl font-serif font-bold mb-2" style={{ color: 'white' }}>
                  {event.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {event.venue} • {event.location}
                </p>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  {event.description}
                </p>
                {event.performers && event.performers.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs mb-1 font-medium" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Featured Performers:</p>
                    <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {event.performers.join(', ')}
                    </p>
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // Non-functional link
                  }}
                  className="w-full px-4 py-2 rounded-lg transition-colors duration-200 font-medium shadow-md"
                  style={{ backgroundColor: '#7a6b4a', color: 'white' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8a7b5a'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7a6b4a'}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

