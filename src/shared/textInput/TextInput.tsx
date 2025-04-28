import "./textInput.css"
import { ChangeEventHandler, useState, KeyboardEvent} from "react";

type componentProps = {
    label?: string;
    onValueChange?: ChangeEventHandler<HTMLInputElement>;
    onSubmit?: () => void;
    className?: string
}
export function TextInput(props: componentProps){
    const [hasText, setHasText] = useState(false)

    function inputKeyPress(e: KeyboardEvent<HTMLInputElement>){
        if(e.key === "Enter") props.onSubmit?props.onSubmit():''
    }

    return(
        <div className={`${props.className??""} text-input-container ${hasText?"contains-text":""}`}>
            <input 
            className="text-input" 
            onChange={e => {setHasText(e.target.value !== ""); props.onValueChange?props.onValueChange(e):''}} 
            onKeyDown={inputKeyPress}
            />

            {props.label&&
            <div 
            className="text-input-label"
            >{props.label}
            </div>}
        </div>
    )
}