import { useState } from 'react';
import './index.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Navbar />
    </>
  );
}

export default App;
