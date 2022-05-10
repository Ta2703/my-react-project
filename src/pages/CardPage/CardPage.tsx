import React from "react";
import './CardPage.css';
import Card from '../../components/Card';
import { match } from "assert";

const CardPage = (props:any) => {
    const data ={ 
        id: Math.random(),
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ,
        text: "Lorem ipsum dolor sit amet consectetur.",
        date: "2022-04-21",
        lesson_num: 0,
        title: "What is Lorem Ipsum",
        author: 0,
    }
    return (
        <div className="cardPage">
            <p>Username</p>
            <h3>Content title</h3>
            <Card 
            src= {data.image}
            title={data.title}
            text={data.text}
            date={data.date}
            >
            </Card>

        </div>
    )
};

export default CardPage;