import React from "react";
import './Card.css';

const Card = (props:any) => {
    const imgCard = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    return (
        <div className="card">
            <img src={props.image ? props.image : imgCard}
            className="imgCard"/>
            <h2 className="cardTitle">{props.title}</h2>
            <p className="cardText">{props.text}</p>
            <p className="cardDate">{props.date}</p>
        </div>
    );
};

export default Card;