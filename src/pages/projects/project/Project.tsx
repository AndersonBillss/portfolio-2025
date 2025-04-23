import './project.css'
import { project } from "../../../projects"
import { RefObject, useEffect, useRef, useState } from 'react'

type componentProps = {
    project: project
}
export default function Project(props: componentProps){
    const project: project = props.project
    const [expanded, setExpanded] = useState(false)
    const [cardDimensions, setCardDimensions] = useState({width: 0, height: 0})
    const cardRef: RefObject<HTMLDivElement | null> = useRef(null);
    const cardTopRef: RefObject<HTMLDivElement | null> = useRef(null);

    useEffect(() => {
        // Observe changes to card and resize
        if(!cardRef.current) return
        const observer = new ResizeObserver(() => {
            if(!cardRef.current) return
            const boundingClient: DOMRect = cardRef.current.getBoundingClientRect()
            setCardDimensions({width: boundingClient.width, height: boundingClient.height})
        });
        observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, [])

    // Compute CSS text color
    let iconColor: string | null = null
    const root: HTMLElement | null = document.getElementById('root');
    if(root) iconColor = getComputedStyle(root).getPropertyValue('--text-light')

    return(
        <div className='card-container' style={{width: cardDimensions.width, height: cardDimensions.height}}>
            <div className="card" ref={cardRef}>
                <div className='card-top' ref={cardTopRef}>
                    <h3>{project.title}</h3>
                    <div className='icon button'>     
                        <svg 
                        onClick={() => {setExpanded(!expanded)}} 
                        className={expanded?"icon-path down":"icon-path right"} 
                        height="30px" viewBox="0 -960 960 960" width="30px" fill={iconColor??"white"}>
                            <path 
                            d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                        </svg>
                    </div>
                </div>
                {expanded && <div className='card-bottom'>
                    HELLO
                </div>}
            </div>
        </div>
    )
}