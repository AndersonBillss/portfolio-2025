import { RefObject, useEffect, useRef } from "react"
import "./home.css"

export default function Home(){
  const descriptionRef: RefObject<HTMLDivElement | null> = useRef(null)
  const descriptionAnimationPlayed: RefObject<boolean> = useRef(false);

  useEffect(() => {
    handleScroll()
    document.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  },[])

  function handleScroll(){
    if(descriptionAnimationPlayed.current) return
    const viewBottom: number = window.scrollY + window.innerHeight
    if(descriptionRef.current){
      const descriptionPosAvg = descriptionRef.current.offsetTop + descriptionRef.current.offsetHeight * .5
      if(descriptionPosAvg < viewBottom) addDescriptionAnimations()
    }
  }

  function addDescriptionAnimations(){
    descriptionAnimationPlayed.current = true
    if(descriptionRef.current == null) return
    for(let i=0; i<descriptionRef.current.children.length; i++){
      setTimeout(() => {
        if(descriptionRef.current)
        descriptionRef.current.children[i].classList.add("animated")
      }, 300 * i)
    }
  }

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
      <div className="portrait-section">
        <div className="portrait-img-container">
          <img className="portrait-img" src="Anderson-Photo.png" />
          <div className="photo-outline"></div>
        </div>
        <div className="description" ref={descriptionRef}>
          <p className="description-paragraph">Certified by Mountainland Technical College</p>
          <p className="description-paragraph">Work experience at MotivHealth</p>
          <p className="description-paragraph">Currently enrolled in BYU as a CS major (emphasis on Software Engineering)</p>
        </div>
      </div>
    </div>
  )
}