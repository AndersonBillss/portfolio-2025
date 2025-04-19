import './App.css'
import HexagonBackground from './shared/HexagonBackground'

function App() {

  return (
    <div className='main'>
      <HexagonBackground inverted className='hexagon-background'/>
      <div className='home-img-container'>
        <div className='home-img-overlay'></div>
        <img className='home-img' src='public/motherboard.jpg'></img>
        <div className='home-img-title-container'>
          <h1 className='home-img-title'>Hi, my name is Anderson</h1>
        </div>
      </div>
    </div>
  )
}

export default App
