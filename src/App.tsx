import './App.css'
import HexagonBackground from './shared/HexagonBackground'
import MouseLight from './shared/MouseLight'

function App() {

  return (
    <div className='main'>
      <HexagonBackground inverted className='hexagon-background'/>
      <MouseLight radius={600} className='mouse-light'/>

      <div className='home-img-container'>
        <div className='home-img-overlay'></div>
        <img className='home-img' src='motherboard.jpg'></img>
        <div className='home-img-title'>
          <h1>Hi, my name is Anderson</h1>
          <p>Full Stack Software Developer</p>
        </div>
      </div>
    </div>
  )
}

export default App
