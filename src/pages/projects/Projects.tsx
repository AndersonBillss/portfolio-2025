import "./projects.css"
import { projects, project } from "../../projects"
import Project from "./project/Project"
import { TextInput } from "../../shared/textInput/TextInput"

export default function Projects(){
    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <TextInput 
            label="Filter by technology"
            dropDownOptions={[
                "Dropdown Option 1",
                "Dropdown Option 2",
                "Dropdown Option 3",
                "Dropdown Option 4",
                "Dropdown Option 5",
                "Dropdown Option 6",
                "Dropdown Option 7",
                "Dropdown Option 8",
            ]}
            />
            {projects.map((project: project, index: number) => <Project project={project} key={index} />)}
        </div>
    )
}