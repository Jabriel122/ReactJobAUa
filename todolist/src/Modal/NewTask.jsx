import React from 'react';

import './NewTask.css'
import { Button } from '../components/Button/Button';
import { Title } from '../components/Title/Title';
import { InputDescription } from '../components/Input/Input';

export const NewTask = ({ isOpen, onClose }) => {

    if (!isOpen) return null;
    return (

        <div className="modal-overlay">
            <div className="modal-content">
                <Button textButton={"Confirmar Tarefa"} onClick={onClose}/>
                <InputDescription placeholder={"Exemplo de descrição"}/>
                <Title title={"Descreva sua tarefa"}/>
            </div>
        </div>
    );
};

