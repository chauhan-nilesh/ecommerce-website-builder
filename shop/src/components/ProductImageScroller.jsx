import React, { useState, useRef } from 'react';

const ProductImageScroller = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = Object.values(product?.images);
  const containerRef = useRef(null);

  // For drag scroll functionality
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Handle drag start
  const handleDragStart = (e) => {
    isDragging.current = true;
    startX.current = e.clientX || e.touches[0].clientX;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  // Handle drag move
  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    const x = e.clientX || e.touches[0].clientX;
    const walk = (x - startX.current) * 3; // Adjust the scroll speed
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Handle drag end
  const handleDragEnd = () => {
    isDragging.current = false;
  };

  // Handle mouse and touch events for dragging
  const handleMouseDown = (e) => handleDragStart(e);
  const handleMouseMove = (e) => handleDragMove(e);
  const handleMouseUp = () => handleDragEnd();
  const handleTouchStart = (e) => handleDragStart(e);
  const handleTouchMove = (e) => handleDragMove(e);
  const handleTouchEnd = () => handleDragEnd();

  return (
    <div className="md:hidden w-full p-4">
      {/* Image Scroller */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            cursor: images.length > 1 ? 'grab' : 'default',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
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
