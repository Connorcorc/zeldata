import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import MainPage from '../MainPage/MainPage'
import 'nes.css/css/nes.min.css';

import "../../Assets/HyliaSerif.otf"
import "../../Assets/NES.ttf"
import './App.css';


const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </main>
  );
}

export default App;
