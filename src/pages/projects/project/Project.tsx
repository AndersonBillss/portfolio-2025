import './project.css'
import { project } from "../../../projects"
import { technologies, technologyNames } from '../../../technologies';
import { RefObject, useEffect, useRef, useState } from 'react'

function useDimensions(ref: RefObject<HTMLElement | null>) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    
    useEffect(() => {
        const observer = new ResizeObserver(([entry]) => {
            let { width, height } = entry.contentRect;
            width += entry.contentRect.x * 2
            height += entry.contentRect.y * 2
            setDimensions({ width, height });
        });
        
        if (ref.current) observer.observe(ref.current);
        
        return () => observer.disconnect();
    }, [ref]);
    
    return dimensions;
}

type componentProps = {
    project: project
}
export default function Project(props: componentProps){
    const projectData: project = props.project
    const [expanded, setExpanded] = useState(false)
    const cardRef: RefObject<HTMLDivElement | null> = useRef(null);
    const cardDimensions = useDimensions(cardRef)
    const cardTopRef: RefObject<HTMLDivElement | null> = useRef(null);
    const cardTopDimensions = useDimensions(cardTopRef)

    const dimensions = expanded?cardDimensions:cardTopDimensions
    
    // Compute CSS text color
    let iconColor: string | null = null
    const root: HTMLElement | null = document.getElementById('root');
    if(root) iconColor = getComputedStyle(root).getPropertyValue('--text-light')

    return(
        <div className='card-container' style={{width: dimensions.width, height: dimensions.height}}>
            <div className="card" ref={cardRef}>
                <div className='card-top' ref={cardTopRef}>
                    <h3>{projectData.title}</h3>
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
                <div className='card-bottom'>
                    {projectData.description}
                    <div className='card-technologies'>
                        {projectData.technologies.map((technology: technologies, index: number) => {
                            return <div className='card-technology' key={index}>{technologyNames.get(technology)}</div>
                        })}
                    </div>
                    <div className='links'>
                        
                        <a className='card-link link' href={projectData.githubLink} target='_blank'>
                            See GitHub repository
                            <svg className='link-icon' height="16px" viewBox="0 -960 960 960" width="16px" fill={iconColor??"white"}>
                                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
                            </svg>
                        </a>
                        
                        {projectData.hostedLink && 
                        <a className='card-link link' href={projectData.hostedLink} target='_blank'>
                            See hosted demo!
                            <svg className='link-icon' height="16px" viewBox="0 -960 960 960" width="16px" fill={iconColor??"white"}>
                                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
                            </svg>
                        </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}