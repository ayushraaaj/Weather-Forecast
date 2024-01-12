import React from "react";

const Button = (props) => {
    return (
        <div>
            <button onClick={props.click}>{props.name}</button>
        </div>
    );
}

export default Button;