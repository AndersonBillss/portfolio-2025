import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import HexagonBackground from './shared/hexagonBackground/HexagonBackground'
import MouseLight from './shared/MouseLight'
import Navbar from './shared/navbar/Navbar'
import Projects from './pages/projects/Projects';
import Footer from './shared/footer/Footer';
import Blog from './pages/blog/Blog';

function App() {

  return (
    <div className='main'>
      <HexagonBackground inverted className='hexagon-background'/>
      <MouseLight radius={2000} className='mouse-light'/>
      <div className='top'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
