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

export const ButtonDelete = ({item, toDoList, SetToDoList}) => {
    return(

        <button onClick={() => {
            let list = toDoList.filter((element)=>{
                return element.id !== item.id
            });

            SetToDoList([
                ...list
            ])
        } } className="tinyButton">
            X
        </button>

    )
}
