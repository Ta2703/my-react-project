import React, { FC } from "react";
import './PostCard.css';
import Card from '../Card';


const data = [
    {
        id: 0,
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ,
        text: "Lorem ipsum dolor sit amet consectetur.",
        date: "2022-04-21",
        lesson_num: 0,
        title: "What is Lorem Ipsum",
        author: 0,
      },
      {
        id: 1,
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ,
        text: "Lorem ipsum dolor sit amet consectetur.",
        date: "2022-04-21",
        lesson_num: 0,
        title: "What is Lorem Ipsum",
        author: 0,
      },
      {
        id: 2,
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ,
        text: "Lorem ipsum dolor sit amet consectetur.",
        date: "2022-04-21",
        lesson_num: 0,
        title: "What is Lorem Ipsum",
        author: 0,
      },
      {
        id: 3,
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ,
        text: "Lorem ipsum dolor sit amet consectetur.",
        date: "2022-04-21",
        lesson_num: 0,
        title: "What is Lorem Ipsum",
        author: 0,
      },
];

const CardPost = () => {
    return (
        <div className="cardPost">
            {data.map(item => 
            <Card 
            key={item.id} 
            src={item.image}
            title={item.title}
            text={item.text}
            date={item.date}
            >
            </Card> )}
        </div>
    )
};

export default CardPost;