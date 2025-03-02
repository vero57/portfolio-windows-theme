import React, { useState, useEffect } from 'react';

function Navbar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <div className='flex'>
        <div className="bg-gray-800 text-white p-3 w-335" style={{ height: '50px' }}>
          <ul className="list-none p-0 flex justify-center gap-3 ml-50">
            <li className="relative group hover:bg-black hover:bg-opacity-10 p-1 rounded">
              <a href="#start">
                <img src="/assets/windows.png" alt="start" className="h-6 w-6" />
              </a>
              <span className="absolute bottom-full mb-5 w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 group-hover:opacity-100 left-1/2 transform -translate-x-1/2 translate-y-2">
                Start
              </span>
            </li>
            <li className="relative group hover:bg-black hover:bg-opacity-10 p-1 rounded">
              <a href="#copilot">
                <img src="/assets/copilot.png" alt="copilot" className="h-6 w-6" />
              </a>
              <span className="absolute bottom-full mb-5 w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 group-hover:opacity-100 left-1/2 transform -translate-x-1/2 translate-y-2">
                Copilot
              </span>
            </li>
            <li className="relative group hover:bg-black hover:bg-opacity-10 p-1 rounded">
              <a href="#file">
                <img src="/assets/file-manager.png" alt="word" className="h-6 w-6" />
              </a>
              <span className="absolute bottom-full mb-5 w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 group-hover:opacity-100 left-1/2 transform -translate-x-1/2 translate-y-2">
                Contact
              </span>
            </li>
            <li className="relative group hover:bg-black hover:bg-opacity-10 p-1 rounded">
              <a href="#word">
                <img src="/assets/word.png" alt="word" className="h-6 w-6" />
              </a>
              <span className="absolute bottom-full mb-5 w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 group-hover:opacity-100 left-1/2 transform -translate-x-1/2 translate-y-2">
                Word
              </span>
            </li>
            <li className="relative group hover:bg-black hover:bg-opacity-10 p-1 rounded">
              <a href="#excel">
                <img src="/assets/excel.png" alt="excel" className="h-6 w-6" />
              </a>
              <span className="absolute bottom-full mb-5 w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 group-hover:opacity-100 left-1/2 transform -translate-x-1/2 translate-y-2">
                Excel
              </span>
            </li>
            <li className="relative group hover:bg-black hover:bg-opacity-10 p-1 rounded">
              <a href="#ppt">
                <img src="/assets/power-point.png" alt="ppt" className="h-6 w-6" />
              </a>
              <span className="absolute bottom-full mb-5 w-max bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 group-hover:opacity-100 left-1/2 transform -translate-x-1/2 translate-y-2">
                PowerPoint
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-800 text-white p-3 w-50 flex flex-col items-end justify-center text-[13px]" style={{ height: '50px' }}>
          <span>{formatTime(currentTime)}</span>
          <span>{formatDate(currentTime)}</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
