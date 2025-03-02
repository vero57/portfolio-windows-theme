import React from 'react';

function AppDesk() {
  return (
    <div>
      <div className="container flex flex-col gap-4 items-start">
        <div className="container-1 w-50 h-15 flex gap-4">
          <div className="flex flex-col items-center group hover:bg-gray-600 hover:bg-opacity-10 p-1 rounded transition-all duration-300">
            <img src="/assets/rbin.png" alt="Recycle Bin" className="h-10 w-10" />
            <span className="text-white">Recycle Bin</span>
          </div>
          <div className="flex flex-col items-center group hover:bg-gray-600 hover:bg-opacity-10 p-1 rounded transition-all duration-300">
            <img src="/assets/github.png" alt="GitHub" className="h-10 w-10" />
            <span className="text-white">GitHub</span>
          </div>
        </div>
        <div className="container-2 w-50 h-15 flex justify-start gap-10">
          <div className="flex flex-col items-center group hover:bg-gray-600 hover:bg-opacity-10 p-1 rounded transition-all duration-300">
            <img src="/assets/vscode.png" alt="VSCode" className="h-10 w-10" />
            <span className="text-white">VSCode</span>
          </div>
          <div className="flex flex-col items-center group hover:bg-gray-600 hover:bg-opacity-10 p-1 rounded transition-all duration-300">
            <img src="/assets/spotify.png" alt="Spotify" className="h-11 w-11" />
            <span className="text-white">Spotify</span>
          </div>
        </div>
        <div className="container-2 w-50 h-15 flex justify-start gap-3">
          <div className="flex flex-col items-center group hover:bg-gray-600 hover:bg-opacity-10 p-1 rounded transition-all duration-300">
            <img src="/assets/cmd.png" alt="CMD" className="h-12 w-12" />
            <span className="text-white">Terminal</span>
          </div>
          <div className="flex flex-col items-center group hover:bg-gray-600 hover:bg-opacity-10 p-3 rounded transition-all duration-300">
            <img src="/assets/file.png" alt="file" className="h-10 w-10" />
            <span className="text-white">About-me.txt</span>
          </div>
        </div>
        <div className="container-2 w-50 h-15 flex justify-start gap-3 p-1">
          <div className="flex flex-col items-center group hover:bg-gray-600 hover:bg-opacity-10 p-1 rounded transition-all duration-300">
            <img src="/assets/folder.png" alt="CMD" className="h-10 w-10" />
            <span className="text-white">Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDesk;
