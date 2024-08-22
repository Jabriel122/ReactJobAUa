import React from 'react';

import './NewTask.css'
import { Button } from '../components/Button/Button';
import { Title } from '../components/Title/Title';
import { InputDescription } from '../components/Input/Input';
let nextid = 0;
export const NewTask = ({ isOpen, onClose, SetToDoList, toDoList, SetName, name}) => {

    if (!isOpen) return null;
    return (

        <div className="modal-overlay">
            <div className="modal-content">
                <Button textButton={"Confirmar Tarefa"} onClick={() => {

                    let list = toDoList;

                    list.push({
                        id:nextid++,
                        name:name,
                        status:false
                    })
                    onClose(); 
                    SetToDoList([
                        ...list
                    ])
                    }} />
                <InputDescription 
                    placeholder={"Exemplo de descrição"}
                    value={name}
                    onChange={e => SetName(e.target.value)}

                />
                <Title title={"Descreva sua tarefa"}/>
            </div>
        </div>
    );
};

