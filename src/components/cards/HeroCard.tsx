import HeroCarousel from '../carousels/HeroCarousel';
import { heroSlides } from '../../data/heroSlides';

export default function HeroCard() {
  const carouselItems = heroSlides.map((slide) => (
    <div
      key={slide.id}
      className="relative h-[400px] md:h-[700px] bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${slide.image})`, backgroundColor: '#151523' }}
    >
      {/* Content */}
      <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" style={{ color: 'white' }}>
          {slide.composer && (
            <p className="text-sm md:text-base mb-2 uppercase tracking-wide" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              {slide.composer}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4" style={{ color: 'white' }}>
            {slide.title}
          </h1>
          {slide.performer && (
            <p className="text-lg md:text-xl mb-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              {slide.performer}
            </p>
          )}
          <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            {slide.description}
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              // Non-functional link
            }}
            className="px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#7a6b4a', color: 'white' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8a7b5a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7a6b4a'}
          >
            Watch Now
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="w-full overflow-hidden md:overflow-visible">
      <div className="hero-carousel-wrapper md:w-full">
        <HeroCarousel
          items={carouselItems}
          autoPlayInterval={6000}
          pauseOnHover={true}
        />
      </div>
    </section>
  );
}

