import React from 'react';
import Board from './Board';
import LatestEvent from './LatestEvent';
import purpleblender from '../assets/'; // Replace with the correct path to your image

function HomePage() {
  return (
    <div>
      <Board />
      <div className="flex justify-center my-10">
        <img src={purpleblender} alt="Purple Blender" className="w-full max-w-5xl" />
      </div>
      <LatestEvent />
    </div>
  );
}

export default HomePage;
