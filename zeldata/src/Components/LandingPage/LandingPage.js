import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sword from '../../Assets/sword.png'
import audio from '../../Assets/select.wav'


import './LandingPage.css'

const playAudio = () => {
  new Audio(audio).play()
}

const LandingPage = () => {
  return (
    <div className='mainContainer'>
      <h1 className='splashLogo'>Zeldata</h1>
      <Link to='/main'>
        <button class="nes-btn is-primary" onClick={playAudio}>E N T E R</button>
      </Link>
    </div>
  )
}

export default LandingPage
