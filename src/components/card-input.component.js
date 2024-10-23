import {useState} from "react";
import './css/card-input.css'

const CardInputComponent = ({ className, title }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className={className}>
            <h2 className='card-input-title'>{title}</h2>
            <input
                type='text'
                value={inputValue}
                onChange={handleChange}
                placeholder='Value'
                className='input-field'
            />
        </div>
    );
};

export function CardInputDefaultComponent() {
    return (
        <CardInputComponent
            className='card-input-default'
            title='Input title'
        />
    );
}

export function CardInputSmallComponent() {
    return (
        <CardInputComponent
            className='card-input-small'
            title='Input title'
        />
    );
}