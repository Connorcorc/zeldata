import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './MainPage.css'
import audio from '../../Assets/fairy.mp3'
import getData from '../../apicalls.js'




const MainPage = () => {
  const [characterData, setCharacterData] = useState([])

  // useEffect(async () => {
  //   await timeout(1500)
  //   playAudio()
  // }, [])
  //
  // const timeout = (delay: number) => {
  //   return new Promise( res => setTimeout(res, delay) );
  // }
  //
  // const playAudio = () => {
  //   new Audio(audio).play()
  // }

  const fetchData = (clickData) => {
    getData(clickData)
    .then(data => setCharacterData(data.data))
  }

  console.log(characterData)

  return (
    <main className='mainpageContainer'>
    <div className='nesDiv' class="nes-container with-title is-centered">
      <p class="title">Zeldata</p>
      <p>It's dangerous to go alone! Take this.</p>
      <button class="nes-btn is-primary" onClick={() => fetchData('characters')}>Characters</button>
      <p>{characterData[0].description}</p>
    </div>
    </main>

  )
}



export default MainPage
