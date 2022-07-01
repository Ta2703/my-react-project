import React, { FC, useState } from "react";
import "./CardPost.css";
import "../../pages/Posts/Posts.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faFloppyDisk,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useDispatch, useSelector } from "react-redux";
import {
  PostsSelectors,
  setSelectedImg,
} from "../../redux/reducers/postsReducer";
import { setLikePost, setSavePost } from "../../redux/reducers/postsReducer";
import { Card as CardType } from "../../common/types";
import PopUp from "../PopUp";
import Button from "../../components/Button";

type CardPostProps = {
  id?: string;
  image?: string;
  title: string;
  text: string;
  date: string;
  onClick?: (event: any) => void;
  likeStatus?: string | null;
  saved?: boolean;
  isPersonal?: boolean;
  // data: CardType;
};

const CardPost: FC<CardPostProps> = ({
  image = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  title,
  text,
  date,
  id,
  likeStatus,
  saved,
  isPersonal,
  onClick,
}) => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  //const { id, image, title, text, date, likeStatus, saved } = data;

  const dispatch = useDispatch();

  const selectedImg = useSelector(PostsSelectors.getSelectedImg);

  const [isVisible, setVisible] = useState(false);
  const onEyeClick = (event: any) => {
    dispatch(setSelectedImg(image));
    setVisible(!isVisible);
    event.stopPropagation();
  };

  const handleButtonClick = (action: string) => {
    if (action == "like" || action == "dislike") {
      dispatch(
        setLikePost({ id, action: likeStatus === action ? null : action })
      );
    } else if (action == "save" || action === "unset") {
      dispatch(setSavePost({ id, action }));
    }
  };

  return (
    <div
      className={classNames(
        { ["card-post"]: isLightTheme },
        { ["card-post dark"]: !isLightTheme }
      )}
    >
      <img src={image} className="card-img" alt="" />
      <p className="card-title">{title}</p>
      <p className="card-text">{text}</p>
      <div className="iconsFooter">
        <p className="card-date">{date}</p>

        <div className="btnsCardFooter">
          <Button
            className={classNames("btnLike", {
              ["activeBtn"]: likeStatus === "like",
            })}
            onClick={() => handleButtonClick("like")}
            btnText={<FontAwesomeIcon icon={faThumbsUp} />}
          />
          <Button
            className={classNames("btnDislike", {
              ["activeBtn"]: likeStatus === "dislike",
            })}
            onClick={() => handleButtonClick("dislike")}
            btnText={<FontAwesomeIcon icon={faThumbsDown} />}
          />
          <Button
            className={classNames("btnSave", { ["activeBtn"]: saved })}
            onClick={() => handleButtonClick(saved ? "unset" : "save")}
            btnText={<FontAwesomeIcon icon={faFloppyDisk} />}
          />
          <Button
            className="btnEye"
            onClick={(event) => onEyeClick(event)}
            btnText={<FontAwesomeIcon icon={faEye} />}
          />
        </div>
      </div>
      {selectedImg && (
        <PopUp isVisible={isVisible}>
          <img src={selectedImg} alt="image" />
        </PopUp>
      )}
    </div>
  );
};


// import React,{FC} from "react";
// import './CardPost.css';
// import classNames from "classnames";


// type CardPostType = {
//   id?: string
//   image?: string
//   title: string
//   text: string
//   date: string
// }

// const CardPost: FC <CardPostType> =  ({id, image, title, text, date}) => {
  
//   const img ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
// return (

// <div className='cardPost' key={id}>
//     <img src={image ? image : img} className="imgCard" alt=''/>
//     <p className="titleCard">{title}</p>
//     <p className="textCard">{text}</p>
//     <p className="datteCard">{date}</p>
// </div>
// )
// }


// const data = [
//     {
//         id: 0,
//         image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ,
//         text: "Lorem ipsum dolor sit amet consectetur.",
//         date: "2022-04-21",
//         lesson_num: 0,
//         title: "What is Lorem Ipsum",
//         author: 0,
//       },
//       {
//         id: 1,
//         image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ,
//         text: "Lorem ipsum dolor sit amet consectetur.",
//         date: "2022-04-21",
//         lesson_num: 0,
//         title: "What is Lorem Ipsum",
//         author: 0,
//       },
//       {
//         id: 2,
//         image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ,
//         text: "Lorem ipsum dolor sit amet consectetur.",
//         date: "2022-04-21",
//         lesson_num: 0,
//         title: "What is Lorem Ipsum",
//         author: 0,
//       },
//       {
//         id: 3,
//         image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ,
//         text: "Lorem ipsum dolor sit amet consectetur.",
//         date: "2022-04-21",
//         lesson_num: 0,
//         title: "What is Lorem Ipsum",
//         author: 0,
//       },
// ];

// const CardPost = () => {
//     return (
//         <div className="cardPost">
//             {data.map(item => 
//             <Card 
//             key={item.id} 
//             src={item.image}
//             title={item.title}
//             text={item.text}
//             date={item.date}
//             >
//             </Card> )}
//         </div>
//     )
// };

export default CardPost;