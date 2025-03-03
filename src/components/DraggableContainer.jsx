import React, { useRef, useEffect } from 'react';

function DraggableContainer() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const { innerWidth, innerHeight } = window;
    container.style.position = 'absolute';
    container.style.left = `${innerWidth / 2 - container.offsetWidth / 2}px`;
    container.style.top = `${innerHeight / 2 - container.offsetHeight / 2}px`;
  }, []);

  const handleDragStart = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    container.style.cursor = 'grabbing';
    container.style.zIndex = 1000;

    const shiftX = e.clientX - rect.left;
    const shiftY = e.clientY - rect.top;

    const moveAt = (pageX, pageY) => {
      const newLeft = pageX - shiftX;
      const newTop = pageY - shiftY;

      const rightBoundary = window.innerWidth - container.offsetWidth;
      const bottomBoundary = window.innerHeight - container.offsetHeight - 50; // 

      container.style.left = `${Math.min(Math.max(newLeft, 0), rightBoundary)}px`;
      container.style.top = `${Math.min(Math.max(newTop, 0), bottomBoundary)}px`; 
    };

    const onMouseMove = (e) => {
      moveAt(e.pageX, e.pageY);
    };

    document.addEventListener('mousemove', onMouseMove);

    container.onmouseup = () => {
      document.removeEventListener('mousemove', onMouseMove);
      container.onmouseup = null;
      container.style.cursor = 'grab';
    };
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleDragStart}
      className="bg-gray-500 p-4 w-150 h-130 cursor-grab"
    >
      <div className="bg-red-500 w-full h-10">

      </div>

    </div>
  );
}

export default DraggableContainer;
