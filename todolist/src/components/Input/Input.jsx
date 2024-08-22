import React, { useState } from 'react';
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

export const InputDescription = ({ placeholder, value, onChange, key }) => {
    return (

        <input className="inputModal-style" key={key} value={value} placeholder={placeholder} onChange={onChange} />

    )
}


export const CheckBox = ({ handleChange, checked, type, name }) => {

    const [isChacked, setIsChacked] = useState(checked);

    const CheckedChange = () => {
        setIsChacked(!isChacked);
        handleChange(!isChacked);
    }
    return (
        <label class={`container`}> {name}
            <input onChange={CheckedChange} type="checkbox" />
            <span class="checkmark"></span>
        </label>

    )
}

