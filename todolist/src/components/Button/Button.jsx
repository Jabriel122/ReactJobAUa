import React from "react";
import './Button.css';

export const Button = ({textButton, type, onClick}) => {
    return(
        <button
            type={type}
            className="Button-add"
            onClick={onClick}
        >
            {textButton}
        </button>
    );
};

export const ButtonEdit = () =>{
    return(
        <button className="tinyButton">
            E
        </button>

    )
}

export const ButtonDelete = () => {
    return(

        <button className="tinyButton">
            X
        </button>

    )
}
