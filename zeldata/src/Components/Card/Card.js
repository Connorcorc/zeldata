import './Card.css'

const Card = ({characterData}) => {
  console.log(characterData)
  return (
    <div className='infoCard'>
    <h2 class="nes-text is-warning">{characterData.name}</h2>
    <p>{characterData.description}</p>
    </div>
  )
}

export default Card
