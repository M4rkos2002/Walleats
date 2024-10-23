import React, {useState} from "react";
import './css/button.css'

export function TipButtonComponent(props) {
    const [isSelected, setIsSelected] = useState(false)

    const handleClick = () => {
        setIsSelected(!isSelected);
        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <button className={isSelected ? "button-tip-selected" : "button-tip-default"}
                onClick={handleClick}
        >
            {props.percent}%
        </button>
    );
}
