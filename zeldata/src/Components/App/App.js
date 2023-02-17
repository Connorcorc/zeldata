import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'

import "../../Assets/HyliaSerif.otf"
import './App.css';


const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </main>
  );
}

export default App;
