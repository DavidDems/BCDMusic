import { useState, useRef, useEffect } from 'react';

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
  // useState hook: Tracks the starting index of the currently visible items
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // useState hook: Tracks the current number of visible items based on screen size
  // Initialize based on current window width
  const [currentItemsVisible, setCurrentItemsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return mobileItemsVisible;
    }
    return itemsVisible;
  });
  
  // useRef hook: Stores the X coordinate where a touch gesture started
  const touchStartX = useRef<number | null>(null);
  
  // useRef hook: Stores the X coordinate where a touch gesture ended
  const touchEndX = useRef<number | null>(null);

  // useEffect hook: Update visible items count based on screen size
  useEffect(() => {
    const updateItemsVisible = () => {
      const isMobile = window.innerWidth < 768;
      const newItemsVisible = isMobile ? mobileItemsVisible : itemsVisible;
      
      setCurrentItemsVisible(newItemsVisible);
      
      // Reset currentIndex if it's out of bounds after screen size change
      setCurrentIndex((prevIndex) => {
        const maxIdx = Math.max(0, items.length - newItemsVisible);
        return prevIndex > maxIdx ? maxIdx : prevIndex;
      });
    };

    updateItemsVisible();
    window.addEventListener('resize', updateItemsVisible);

    return () => {
      window.removeEventListener('resize', updateItemsVisible);
    };
  }, [itemsVisible, mobileItemsVisible, items.length]);

  // Calculate the maximum index we can scroll to
  const maxIndex = Math.max(0, items.length - currentItemsVisible);

  // Function to navigate to show previous items (scroll left).
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) return prevIndex;
      return prevIndex - 1;
    });
  };

  // Function to navigate to show next items (scroll right).
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= maxIndex) return prevIndex;
      return prevIndex + 1;
    });
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

    // If swiped left (positive distance > threshold) AND can scroll right, go to next
    if (distance > minSwipeDistance && currentIndex < maxIndex) {
      goToNext();
    } 
    // If swiped right (negative distance < -threshold) AND can scroll left, go to previous
    else if (distance < -minSwipeDistance && currentIndex > 0) {
      goToPrevious();
    }

    // Reset touch coordinates for the next gesture
    touchStartX.current = null;
    touchEndX.current = null;
  };

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

