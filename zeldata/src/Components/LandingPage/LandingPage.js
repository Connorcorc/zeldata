import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sword from '../../Assets/sword.png'


import './LandingPage.css';


const LandingPage = () => {
  return (
    <div className='mainContainer'>
      <h1 className='splashLogo'>Zeldata</h1>
      <Link to='/main'>
        <button>E N T E R</button>
      </Link>
    </div>
  );
}

export default LandingPage;
