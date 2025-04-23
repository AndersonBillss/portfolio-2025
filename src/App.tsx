import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import HexagonBackground from './shared/HexagonBackground'
import MouseLight from './shared/MouseLight'
import Navbar from './shared/navbar/Navbar'
import Projects from './pages/projects/Projects';

function App() {

  return (
    <div className='main'>
      <Navbar />
      <HexagonBackground inverted className='hexagon-background'/>
      <MouseLight radius={2000} className='mouse-light'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
