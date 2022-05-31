import React from "react";
import './Card.css';
import CardPost from "../CardPost";
import { Link } from "react-router-dom";

const Card = (props:any) => {
    const Card = props.data.map((item: any) => {
        return (
            <Link key={item.id} to={`/card/${item.id}`}>
                <CardPost 
                 image={item.image}
                 title={item.title}
                 text={item.text}
                 date={item.date}
               />
            </Link>
        );
    });
    return <div className="card">{Card}</div>;
};
//     return (
//         <div className="card">
//             <img src={props.image ? props.image : imgCard}
//             className="imgCard"/>
//             <h2 className="cardTitle">{props.title}</h2>
//             <p className="cardText">{props.text}</p>
//             <p className="cardDate">{props.date}</p>
//         </div>
//     );
// };

export default Card;