import './App.css'
import HexagonBackground from './shared/HexagonBackground'
import MouseLight from './shared/MouseLight'

function App() {

  return (
    <div className='main'>
      <HexagonBackground inverted className='hexagon-background'/>
      <div className='home-img-container'>
        <div className='home-img-overlay'></div>
        <img className='home-img' src='motherboard.jpg'></img>
        <h1 className='home-img-title'>Hi, my name is Anderson</h1>
      </div>
      <MouseLight radius={500} className='mouse-light'/>
    </div>
  )
}

export default App
