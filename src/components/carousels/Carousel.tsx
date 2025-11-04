import { useState, useRef } from 'react';

// Interface defining the props for the Carousel component
interface CarouselProps {
  items: React.ReactNode[];
  // Optional: Additional CSS classes to apply to the carousel container
  className?: string;
}

// Carousel() function that displays a series of items with navigation controls.
export default function Carousel({
  items,
  className = '',
}: CarouselProps) {
  // useState hook: Tracks which slide is currently visible
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // useRef hook: Stores the X coordinate where a touch gesture started
  const touchStartX = useRef<number | null>(null);
  
  // useRef hook: Stores the X coordinate where a touch gesture ended
  const touchEndX = useRef<number | null>(null);

  // Function to jump directly to a specific slide by index.
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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

    // Calculate the distance swiped (positive = swiped left/right, negative = swiped right/left)
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
            // Translate by negative percentage: moves container left by (currentIndex * 100)%
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {/* Map through all items and render each as a slide */}
          {items.map((item, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {items.length > 1 && (
        <>
          {/* Previous/Left Arrow Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-purple-dark/80 hover:bg-purple-dark text-gold-light rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-light"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-purple-dark/80 hover:bg-purple-dark text-gold-light rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-light"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
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
        </>
      )}

      {/* Indicators */}
      {items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {/* Map through all items to create indicator dots */}
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-light ${
                index === currentIndex
                  ? 'bg-gold-light w-8'
                  : 'bg-purple-dark/50 w-2 hover:bg-purple-dark'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

