import React from "react";

export type Card = {
  id?: string;
  image?: string;
  title: string;
  text: string;
  date: string;
  onClick?: () => void;
  likeStatus?: string | null;
  saved: boolean;
};



// export type Card = {
//   id?: string;
//       image: string;
//       text: string;
//       date: string;
//       title: string;
     
//     };
