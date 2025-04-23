import './App.css'
import Home from './pages/home/Home'
import HexagonBackground from './shared/HexagonBackground'
import MouseLight from './shared/MouseLight'
import Navbar from './shared/navbar/Navbar'

function App() {

  return (
    <div className='main'>
      <Navbar />
      <HexagonBackground inverted className='hexagon-background'/>
      <MouseLight radius={2000} className='mouse-light'/>
      <Home/>
    </div>
  )
}

export default App
