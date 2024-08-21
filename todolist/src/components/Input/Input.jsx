import React from 'react';
import { IoIosSearch } from "react-icons/io";
import './Input.css'


export const Input = ({ placeholder, value }) => {
    return (
        <div className='box-input'>
            <IoIosSearch color='white' size={20} />
            <br />
            <input className="input-style" value={value} placeholder={placeholder} />
        </div>
    );
};

export const InputDescription = ({ placeholder, value }) => {
    return (

        <input className="inputModal-style" value={value} placeholder={placeholder} />

    )
}


export const CheckBox = ({ type, name }) => {
    return (
        <label class="container"> Nome
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>

    )
}

