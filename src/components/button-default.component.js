import './css/button.css'

export function ButtonDefaultComponent(props) {
    return (
        <button className="button-default" onClick={props.onClick}>
            {props.text}
        </button>
    );
}