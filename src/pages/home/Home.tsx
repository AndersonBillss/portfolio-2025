import "./home.css"

export default function Home(){
    return(
      <div className="home-page">
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