import React, { useState, useRef } from 'react';

const ProductImageScroller = ({ product }) => {
  const images = Object.values(product?.images);
  const containerRef = useRef(null);

  // State and refs for touch-based swipe functionality
  const isSwiping = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Handle swipe start
  const handleSwipeStart = (e) => {
    if (images.length > 1) { // Only allow swipe if there's more than one image
      isSwiping.current = true;
      startX.current = e.touches[0].clientX; // Get touch position
      scrollLeft.current = containerRef.current.scrollLeft;
      e.preventDefault(); // Prevent default scrolling
    }
  };

  // Handle swipe move
  const handleSwipeMove = (e) => {
    if (!isSwiping.current) return;
    const x = e.touches[0].clientX; // Get current touch position
    const walk = (x - startX.current) * 3; // Multiply for speed
    containerRef.current.scrollLeft = scrollLeft.current - walk; // Move container
  };

  // Handle swipe end
  const handleSwipeEnd = () => {
    isSwiping.current = false;
  };

  return (
    <div className="md:hidden w-full p-4">
      {/* Image Scroller */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500"
          style={{
            cursor: images.length > 1 ? 'grab' : 'default', // Show grab cursor if multiple images
          }}
          onTouchStart={handleSwipeStart}
          onTouchMove={handleSwipeMove}
          onTouchEnd={handleSwipeEnd}
        >
          {images.map((image, idx) =>
            image ? (
              <div key={idx} className="flex-shrink-0 w-full">
                <img
                  src={image}
                  className="h-[420px] sm:h-[550px] w-full object-cover rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                  alt={product?.name}
                />
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductImageScroller;
