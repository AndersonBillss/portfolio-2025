import './App.css'
import Home from './pages/home/Home'
import HexagonBackground from './shared/HexagonBackground'
import MouseLight from './shared/MouseLight'

function App() {

  return (
    <div className='main'>
      <HexagonBackground inverted className='hexagon-background'/>
      <MouseLight radius={600} className='mouse-light'/>
      <Home/>
    </div>
  )
}

export default App
