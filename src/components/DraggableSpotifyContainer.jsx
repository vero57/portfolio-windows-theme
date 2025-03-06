import React, { useRef, useEffect } from 'react';

function DraggableSpotifyContainer({ onClose }) {
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
      const bottomBoundary = window.innerHeight - container.offsetHeight - 50; 

      container.style.left = `${Math.min(Math.max(newLeft, 0), rightBoundary)}px`;
      container.style.top = `${Math.min(Math.max(newTop, 0), bottomBoundary)}px`; n
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
      className="w-150 h-105"
    >
      <div className="bg-gray-400 w-full h-10 flex justify-end items-center gap-3">
        <img src="/assets/minimize.png" alt="Minimize" className="w-7 h-7 mx-1 cursor-pointer transition-all duration-300 hover:bg-gray-600 p-1 rounded" />
        <img src="/assets/maximize.png" alt="Maximize" className="w-7 h-7 mx-1 cursor-pointer transition-all duration-300 hover:bg-gray-600 p-1 rounded" />
        <img src="/assets/close.png" alt="Close" className="w-7 h-7 mx-1 cursor-pointer transition-all duration-300 hover:bg-red-600 p-1 rounded" onClick={onClose} />
      </div>
      <div className="overflow-auto h-[calc(100%-2.5rem)]">
        <iframe
          style={{ borderRadius: "none" }}
          src="https://open.spotify.com/embed/playlist/17E4uZolfqzqjJEwAWSDJ9?utm_source=generator"
          width="100%"
          height="100%"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default DraggableSpotifyContainer;
