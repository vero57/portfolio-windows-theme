import { useState } from 'react';
import './index.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import DraggableSpotifyContainer from './components/DraggableSpotifyContainer';

function App() {
  const [showFile, setShowFile] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);

  const handleFileClick = () => {
    setShowFile(true);
  };

  const handleSpotifyClick = () => {
    setShowSpotify(true);
  };

  const handleClose = () => {
    setShowFile(false);
    setShowSpotify(false);
  };

  return (
    <>
      <Home onFileClick={handleFileClick} onSpotifyClick={handleSpotifyClick} onClose={handleClose} showFile={showFile} showSpotify={showSpotify} />
      {showSpotify && <DraggableSpotifyContainer onClose={handleClose} />}
      <Navbar showFile={showFile} showSpotify={showSpotify} />
    </>
  );
}

export default App;
