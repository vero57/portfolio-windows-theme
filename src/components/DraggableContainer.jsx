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
      const bottomBoundary = window.innerHeight - container.offsetHeight - 50; // Adjust for Navbar height

      container.style.left = `${Math.min(Math.max(newLeft, 0), rightBoundary)}px`;
      container.style.top = `${Math.min(Math.max(newTop, 0), bottomBoundary)}px`; // Adjust for top of the screen
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
      className="bg-gray-300 p-4 w-150 h-130 cursor-grab"
    >
      <div className="bg-gray-400 w-full h-10 flex justify-end items-center gap-3">
        <img src="/assets/minimize.png" alt="Minimize" className="w-7 h-7 mx-1 cursor-pointer transition-all duration-300 hover:bg-gray-600 p-1 rounded" />
        <img src="/assets/maximize.png" alt="Maximize" className="w-7 h-7 mx-1 cursor-pointer transition-all duration-300 hover:bg-gray-600 p-1 rounded" />
        <img src="/assets/close.png" alt="Close" className="w-7 h-7 mx-1 cursor-pointer transition-all duration-300 hover:bg-red-600 p-1 rounded" />
      </div>
      <div className="mt-4 overflow-auto h-[calc(100%-2.5rem)] p-2">
        <h1 className="text-2xl font-bold">About Me</h1>
        <p>
          I am Yosua Gerrard Ferdinand, a student at SMKN 1 Cibinong with a deep passion for game development and software engineering. Since the beginning of my journey in the world of technology, I have been fascinated by how applications and systems work. This curiosity led me to explore programming independently, teaching myself through various online resources.

          One of the most valuable tools in my learning process has been YouTube, which has provided me with access to countless tutorials and insights from experienced developers. Through continuous self-study and hands-on practice, I have developed strong skills in JavaScript, Dart, Java, and PHP, constantly pushing myself to improve and stay updated with the latest advancements in the field.

          A defining experience in my journey was participating in the "40 Game Project", where I had the opportunity to collaborate with other talented developers. This project not only enhanced my technical skills in game development but also taught me the importance of teamwork, project management, and problem-solving in software engineering.

          Currently, I am focused on developing various applications, ranging from educational games to web and mobile-based solutions. I am always eager to explore new technologies, refine my coding skills, and create innovative digital solutions that make a real impact.

          I strongly believe that the rapid advancement of technology presents countless opportunities for young developers like me to contribute to the industry. That’s why I am always open to collaboration, knowledge sharing, and working on projects that drive meaningful change.

          If you share the same passion or are interested in discussing ideas, feel free to connect with me! 🚀
        </p>
      </div>
    </div>
  );
}

export default DraggableContainer;
