import { useState, useRef, useEffect } from 'react';

// Interface for useCarousel hook options
export interface UseCarouselOptions {
  // Total number of items in the carousel
  itemCount: number;
  // Whether the carousel should loop (wrap around) when reaching the end
  loop?: boolean;
  // Maximum index the carousel can navigate to (for non-looping carousels)
  maxIndex?: number;
  // Minimum swipe distance in pixels to trigger navigation (default: 50)
  minSwipeDistance?: number;
}

// Return type for useCarousel hook
export interface UseCarouselReturn {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  goToPrevious: () => void;
  goToNext: () => void;
  goToSlide: (index: number) => void;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleTouchEnd: () => void;
}

// useCarousel() custom hook that provides shared carousel logic
export function useCarousel({
  itemCount,
  loop = true,
  maxIndex,
  minSwipeDistance = 50,
}: UseCarouselOptions): UseCarouselReturn {
  // useState hook: Tracks which slide is currently visible
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // useRef hook: Stores the X coordinate where a touch gesture started
  const touchStartX = useRef<number | null>(null);
  
  // useRef hook: Stores the X coordinate where a touch gesture ended
  const touchEndX = useRef<number | null>(null);
  
  // useRef hook: Stores the current maxIndex so it can be updated dynamically
  const maxIndexRef = useRef<number | undefined>(maxIndex);
  
  // Update maxIndexRef when maxIndex changes
  useEffect(() => {
    maxIndexRef.current = maxIndex;
  }, [maxIndex]);

  // Function to jump directly to a specific slide by index.
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Function to navigate to the previous slide.
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (loop) {
        // Loop: wrap around to the last item if at the beginning
        return prevIndex === 0 ? itemCount - 1 : prevIndex - 1;
      } else {
        // Non-loop: stop at the beginning
        if (prevIndex === 0) return prevIndex;
        return prevIndex - 1;
      }
    });
  };

  // Function to navigate to the next slide.
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (loop) {
        // Loop: wrap around to the first item if at the end
        return prevIndex === itemCount - 1 ? 0 : prevIndex + 1;
      } else {
        // Non-loop: stop at maxIndex or the last item
        // Use ref to get the current maxIndex value (which may have changed)
        const effectiveMaxIndex = maxIndexRef.current !== undefined ? maxIndexRef.current : itemCount - 1;
        if (prevIndex >= effectiveMaxIndex) return prevIndex;
        return prevIndex + 1;
      }
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

  return {
    currentIndex,
    setCurrentIndex,
    goToPrevious,
    goToNext,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
