import { useState, useEffect, useRef } from 'react';

// Interface defining the props for the HeroCarousel component
interface HeroCarouselProps {
  // Array of React nodes to display as carousel slides
  items: React.ReactNode[];
  // Optional: Time in milliseconds between automatic slide transitions (default: 6000ms = 6 seconds)
  autoPlayInterval?: number;
  // Optional: Whether to pause auto-play when user hovers over the carousel (default: true)
  pauseOnHover?: boolean;
  // Optional: Additional CSS classes to apply to the carousel container
  className?: string;
}

// HeroCarousel() function with auto-play functionality.
export default function HeroCarousel({
  items,
  autoPlayInterval = 6000,
  pauseOnHover = true,
  className = '',
}: HeroCarouselProps) {
  // useState hook: Tracks which slide is currently visible
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // useState hook: Tracks whether auto-play is currently paused
  const [isPaused, setIsPaused] = useState(false);
  
  // useRef hook: Stores the interval ID returned by setInterval
  const intervalRef = useRef<number | null>(null);
  
  // useRef hook: Stores the X coordinate where a touch gesture started
  const touchStartX = useRef<number | null>(null);
  
  // useRef hook: Stores the X coordinate where a touch gesture ended
  const touchEndX = useRef<number | null>(null);

  // Function to navigate to the previous slide.
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Function to navigate to the next slide.
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  // useEffect hook: Manages the auto-play interval timer
  useEffect(() => {
    if (!isPaused && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          return nextIndex >= items.length ? 0 : nextIndex;
        });
      }, autoPlayInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, autoPlayInterval, items.length]);

  // Event handler for when mouse enters the carousel area.
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  // Event handler for when mouse leaves the carousel area.
  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  // Event handler for when a touch gesture starts on mobile devices.
  const handleTouchStart = (e: React.TouchEvent) => {
    // Store the X coordinate of the first touch point
    touchStartX.current = e.touches[0].clientX;
  };

  // Event handler for when a touch gesture moves (user is dragging).
  const handleTouchMove = (e: React.TouchEvent) => {
    // Update the end position as the user drags their finger
    touchEndX.current = e.touches[0].clientX;
  };

  // Event handler for when a touch gesture ends (user lifts finger).
  const handleTouchEnd = () => {
    // Early return if touch coordinates weren't properly captured
    if (!touchStartX.current || !touchEndX.current) return;

    // Calculate the distance swiped (positive = swiped left, negative = swiped right)
    const distance = touchStartX.current - touchEndX.current;
    // Minimum distance in pixels required to trigger a slide change
    const minSwipeDistance = 50;

    // If swiped left (positive distance > threshold), go to next slide
    if (distance > minSwipeDistance) {
      goToNext();
    } 
    // If swiped right (negative distance < -threshold), go to previous slide
    else if (distance < -minSwipeDistance) {
      goToPrevious();
    }

    // Reset touch coordinates for the next gesture
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Early return: Don't render anything if there are no items to display
  if (items.length === 0) return null;

  return (
    <div
      className={`relative ${className} hero-carousel-wrapper`}
      // Mouse event handlers for pause-on-hover functionality
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // Touch event handlers for mobile swipe navigation
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden hero-carousel-wrapper">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            // Translate by negative percentage: moves container left by (currentIndex * 100)%
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="hero-carousel-item flex-shrink-0 w-screen md:w-full">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Right Side */}
      {items.length > 1 && (
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 flex flex-col items-end gap-3">
          <div className="flex flex-row gap-2">
            {/* Previous/Left Arrow Button */}
            <button
              onClick={goToPrevious}
              className="rounded-full p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 border-2"
              style={{ backgroundColor: '#7a6b4a', color: 'white', borderColor: '#7a6b4a' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8a7b5a';
                e.currentTarget.style.borderColor = '#8a7b5a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7a6b4a';
                e.currentTarget.style.borderColor = '#7a6b4a';
              }}
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Next/Right Arrow Button */}
            <button
              onClick={goToNext}
              className="rounded-full p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 border-2"
              style={{ backgroundColor: '#7a6b4a', color: 'white', borderColor: '#7a6b4a' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8a7b5a';
                e.currentTarget.style.borderColor = '#8a7b5a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7a6b4a';
                e.currentTarget.style.borderColor = '#7a6b4a';
              }}
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Thin Line Indicators - aligned with right arrow */}
          <div className="flex flex-col gap-1.5 items-end">
            {items.map((_, index) => (
              <div
                key={index}
                className={`h-0.5 transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-gray-400 w-6'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

