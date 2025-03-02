import React from 'react';
import AppDesk from '../components/AppDesk';

function Home() {
  return (
    <div className="w-full p-5" style={{ height: 'calc(100vh - 50px)', backgroundImage: 'url(/assets/wallpaper.png)', backgroundSize: 'cover' }}>
      <AppDesk />
    </div>
  );
}

export default Home;
