import { useState } from 'react';
import './index.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import DraggableSpotifyContainer from './components/DraggableSpotifyContainer';

function App() {
  const [activeIcons, setActiveIcons] = useState([]);

  const handleFileClick = () => {
    setActiveIcons((prevIcons) => [
      ...prevIcons.filter((icon) => icon.alt !== 'file'),
      { src: '/assets/file.png', alt: 'file', label: 'About-me.txt' },
    ]);
  };

  const handleSpotifyClick = () => {
    setActiveIcons((prevIcons) => [
      ...prevIcons.filter((icon) => icon.alt !== 'spotify'),
      { src: '/assets/spotify.png', alt: 'spotify', label: 'Spotify' },
    ]);
  };

  const handleClose = (alt) => {
    setActiveIcons((prevIcons) => prevIcons.filter((icon) => icon.alt !== alt));
  };

  return (
    <>
      <Home onFileClick={handleFileClick} onSpotifyClick={handleSpotifyClick} onClose={handleClose} activeIcons={activeIcons} />
      {activeIcons.some((icon) => icon.alt === 'spotify') && <DraggableSpotifyContainer onClose={() => handleClose('spotify')} />}
      <Navbar activeIcons={activeIcons} />
    </>
  );
}

export default App;
