import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-{1140px} m-auto w-full p-4 py-16">
      <h2 className="text-cenrter text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-col-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img className="w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmVzb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt="/"
          />
        </div>

        <div>
          <img className="w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UmVzb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt="/"
          />
        </div>

        <div>
          <img 
          className="w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJlc29ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            alt="/"
          />
        </div>

        <div>
          <img
          className="w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1559599746-8823b38544c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1aXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt="/"
          />
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3J1aXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
