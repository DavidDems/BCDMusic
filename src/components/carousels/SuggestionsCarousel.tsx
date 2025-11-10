import { useState, useEffect } from 'react';
import { useCarousel } from './Carousel';

// Interface defining the props for the SuggestionsCarousel component
interface SuggestionsCarouselProps {
  // Array of React nodes to display as carousel items
  items: React.ReactNode[];
  // Optional: Additional CSS classes to apply to the carousel container
  className?: string;
  // Optional: Number of items visible at once in the carousel (default: 4)
  itemsVisible?: number;
  // Optional: Number of items visible on mobile (default: 3)
  mobileItemsVisible?: number;
}

// SuggestionsCarousel() function that displays multiple items simultaneously.
export default function SuggestionsCarousel({
  items,
  className = '',
  itemsVisible = 4,
  mobileItemsVisible = 3,
}: SuggestionsCarouselProps) {
  // useState hook: Tracks the current number of visible items based on screen size
  // Initialize based on current window width
  const [currentItemsVisible, setCurrentItemsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return mobileItemsVisible;
    }
    return itemsVisible;
  });
  
  // Calculate the maximum index we can scroll to
  const maxIndex = Math.max(0, items.length - currentItemsVisible);
  
  // useCarousel hook: Provides shared carousel logic (state, navigation, touch handlers)
  const {
    currentIndex,
    setCurrentIndex,
    goToPrevious,
    goToNext,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useCarousel({
    itemCount: items.length,
    loop: false,
    maxIndex,
  });

  // useEffect hook: Update visible items count based on screen size
  useEffect(() => {
    const updateItemsVisible = () => {
      const isMobile = window.innerWidth < 768;
      const newItemsVisible = isMobile ? mobileItemsVisible : itemsVisible;
      
      setCurrentItemsVisible(newItemsVisible);
      
      // Reset currentIndex if it's out of bounds after screen size change
      const newMaxIdx = Math.max(0, items.length - newItemsVisible);
      setCurrentIndex((prevIndex) => {
        return prevIndex > newMaxIdx ? newMaxIdx : prevIndex;
      });
    };

    updateItemsVisible();
    window.addEventListener('resize', updateItemsVisible);

    return () => {
      window.removeEventListener('resize', updateItemsVisible);
    };
  }, [itemsVisible, mobileItemsVisible, items.length, setCurrentIndex]);


  // Early return: Don't render anything if there are no items to display
  if (items.length === 0) return null;

  // Calculate the width percentage each item should take up
  const itemWidth = 100 / currentItemsVisible;

  return (
    <div
      className={`relative ${className}`}
      // Touch event handlers for mobile swipe navigation
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            // Translate by negative percentage: moves container left by (currentIndex * itemWidth)%
            transform: `translateX(-${currentIndex * itemWidth}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${itemWidth}%` }}
            >
              <div className="transition-all duration-300">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Left and Right */}
      {items.length > currentItemsVisible && (
        <>
          {/* Previous/Left Arrow Button */}
          {currentIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-[calc(50%-10px)] -translate-y-1/2 z-10 rounded-full p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              style={{
                backgroundColor: '#7a6b4a',
                color: 'white',
                boxShadow: '0 0 0 2px rgba(122, 107, 74, 0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8a7b5a';
                e.currentTarget.style.boxShadow = '0 0 0 2px rgba(138, 123, 90, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7a6b4a';
                e.currentTarget.style.boxShadow = '0 0 0 2px rgba(122, 107, 74, 0.5)';
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
          )}
          {/* Next/Right Arrow Button */}
          {currentIndex < maxIndex && (
            <button
              onClick={goToNext}
              className="absolute right-4 top-[calc(50%-10px)] -translate-y-1/2 z-10 rounded-full p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              style={{
                backgroundColor: '#7a6b4a',
                color: 'white',
                boxShadow: '0 0 0 2px rgba(122, 107, 74, 0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8a7b5a';
                e.currentTarget.style.boxShadow = '0 0 0 2px rgba(138, 123, 90, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7a6b4a';
                e.currentTarget.style.boxShadow = '0 0 0 2px rgba(122, 107, 74, 0.5)';
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
          )}
        </>
      )}
    </div>
  );
}

