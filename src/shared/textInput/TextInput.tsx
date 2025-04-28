import "./textInput.css"
import { ChangeEventHandler, useState} from "react";

type componentProps = {
    label?: string
    valueChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string
}
export function TextInput(props: componentProps){
    const [hasText, setHasText] = useState(false)

    return(
        <div className={`${props.className??""} text-input-container ${hasText?"contains-text":""}`}>
            <input 
            className="text-input" 
            onChange={e => {setHasText(e.target.value !== "")}} 
            />

            {props.label&&
            <div 
            className="text-input-label"
            >{props.label}
            </div>}
        </div>
    )
}