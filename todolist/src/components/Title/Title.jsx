import React from "react";
import './Title.css'

export const TitleDay = () => {


    const d = new Date();

    let week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"];
    let month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    let weekDay = week[d.getDay()]
    let day = d.getDate()
    let monthName = month[d.getMonth()];

    return (

        <h1 className="title-day"> {weekDay},<span id="purple-span"> {day}</span> de {monthName} </h1>
    );
};

export const Title = ({title}) =>{
    return(
        <h1 className="title-day">{title}</h1>
    )
}