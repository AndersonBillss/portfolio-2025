import "./projects.css"
import { projects, project } from "../../projects"
import Project from "./project/Project"

export default function Projects(){
    return (
        <div className="projects-page">
            <h1>Projects</h1>
            {projects.map((project: project, index: number) => <Project project={project} key={index} />)}
        </div>
    )
}