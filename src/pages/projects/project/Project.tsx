import './project.css'
import { project } from "../../../projects"

type componentProps = {
    project: project
}
export default function Project(props: componentProps){
    const project: project = props.project
    return(
        <div className="card">
            <h2>{project.title}</h2>
        </div>
    )
}