import { useState } from 'react';
import './index.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const [showFile, setShowFile] = useState(false);

  const handleFileClick = () => {
    setShowFile(true);
  };

  return (
    <>
      <Home onFileClick={handleFileClick} />
      <Navbar showFile={showFile} />
    </>
  );
}

export default App;
