import "./textInput.css"
import { ChangeEventHandler, useState, KeyboardEvent, RefObject, useRef, useEffect} from "react";

type componentProps = {
    label?: string;
    dropDownOptions?: string[];
    onValueChange?: ChangeEventHandler<HTMLInputElement>;
    onSubmit?: () => void;
    className?: string
}
export function TextInput(props: componentProps){
    const [focused, setFocused] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const dropDownOptionsRef: RefObject<HTMLDivElement | null> = useRef(null)
    
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropDownOptionsRef.current && !dropDownOptionsRef.current.contains(event.target as Node)) {
                setFocused(false)
            } else {
                setFocused(true)
            }
        }
        if(props.dropDownOptions) document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },[])

    function inputKeyPress(e: KeyboardEvent<HTMLInputElement>){
        if(e.key === "Enter") props.onSubmit?props.onSubmit():''
    }
    function handleOptionClick(index: number){
        if(!props.dropDownOptions) return
        setInputValue(props.dropDownOptions[index])
    }

    return(
        <div className="text-input-element" ref={dropDownOptionsRef}>
            <div className={`${props.className??""} text-input-container ${inputValue?"contains-text":""}`}>
                <input 
                value={inputValue}
                className="text-input" 
                onChange={e => {
                    setInputValue(e.target.value)
                    props.onValueChange?props.onValueChange(e):''
                }} 
                onKeyDown={inputKeyPress}
                />

                {props.label&&
                <div 
                className="text-input-label"
                >{props.label}
                </div>}
            </div>
            {props.dropDownOptions&&<div className={`text-input-dropdown-container ${focused?'focused':''}`}>
                <div className="text-input-dropdown">
                    {
                    props.dropDownOptions.map((option, index) => 
                    <div 
                    onClick={() => (handleOptionClick(index))} 
                    className="text-input-dropdown-option"
                    key={index}
                    >
                        {option}
                    </div>
                    )}
                </div>
            </div>}
        </div>
    )
}