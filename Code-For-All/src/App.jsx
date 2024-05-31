import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './HomeComponents/Header';
import Hero from './HomeComponents/Hero';
import Board from './HomeComponents/Board';
import BoardCard from './HomeComponents/BoardCard';
import Social from './HomeComponents/Social';
import Projects from './HomeComponents/Projects';
import LatestEvent from './HomeComponents/LatestEvent';
import LatestEvent2 from './HomeComponents/LatestEvent2';
import LottieAnimation from './HomeComponents/LottieAnimation'; // Lottie component
import purpleblender from './assets/background blender purple.png';

function App() {
  return (
    <>

<div className=""><LottieAnimation /></div>
     
     
      <Header />
      <Hero className="mb-20" />
      
      <div className="relative">
     
        <div className="absolute inset-x-0 -bottom-20 flex  z-10 opacity-40 pointer-events-none">
          <img src={purpleblender} alt="Purple Blender" className="w-screen" />
        </div>
        <Board className="bg-custom-dark-blue"/>
      </div>
      <div className="relative">
     
        <div className="absolute inset-x-0 -top-20 flex  z-0 ">
          <img src={purpleblender} alt="Purple Blender" className="w-screen" />
        </div>
        <LatestEvent className="bg-custom-dark-blue"/>
      </div>
     
      <Projects />
      <Social />
      
    </>
  );
}

export default App;