import React, { useEffect } from 'react';
import AppDesk from '../components/AppDesk';
import DraggableContainer from '../components/DraggableContainer';
import { disableActions } from '../scripts/disableActions';

function Home({ onFileClick, onSpotifyClick, onClose, activeIcons }) {
  useEffect(() => {
    const cleanup = disableActions();
    return cleanup;
  }, []);

  return (
    <div className="w-full p-5" style={{ height: 'calc(100vh - 50px)', backgroundImage: 'url(/assets/wallpaper.jpg)', backgroundSize: 'cover' }}>
      {activeIcons.some((icon) => icon.alt === 'file') && <DraggableContainer onClose={() => onClose('file')} />}
      <AppDesk onFileClick={onFileClick} onSpotifyClick={onSpotifyClick} />
    </div>
  );
}

export default Home;
