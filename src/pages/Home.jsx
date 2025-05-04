import React, { useEffect, useState } from 'react';
import AppDesk from '../components/AppDesk';
import DraggableContainer from '../components/DraggableContainer';
import { disableActions } from '../scripts/disableActions';

function Home({ onFileClick, onSpotifyClick, onClose, activeIcons }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const cleanup = disableActions();
    return cleanup;
  }, []);

  return (
    <div className="w-full p-5" style={{ height: 'calc(100vh - 50px)', backgroundImage: 'url(/assets/wallpaper.jpg)', backgroundSize: 'cover', position: 'relative' }}>
      {!isDesktop && (
        <div
          style={{
            position: 'fixed',
            zIndex: 9999,
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backdropFilter: 'blur(8px)',
            background: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'white', fontSize: 24, fontWeight: 'bold', textShadow: '0 2px 8px #000' }}>
            Only supports Desktop resolution
          </span>
        </div>
      )}
      {activeIcons.some((icon) => icon.alt === 'file') && <DraggableContainer onClose={() => onClose('file')} />}
      <AppDesk onFileClick={onFileClick} onSpotifyClick={onSpotifyClick} />
    </div>
  );
}

export default Home;
