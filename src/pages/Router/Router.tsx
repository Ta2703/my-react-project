import React from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "../../components/Header";
// import Information from "../Information";

import HeaderBurgerMenu from '../../components/HeaderBurgerMenu'
import Information from "../Information";
import PostCard from '../../components/PostCard';
import Authorization from "../Autorization";
import Confirmation from "../Confirmation";
import Registr from "../Autorization/Registr";
import CardPage from "../CardPage";



const Router = () => {
   // const isLoggedIn = false;
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return (
    <BrowserRouter>
    {isLoggedIn?(
        <Routes> 
        <Route path={'/'} element={<HeaderBurgerMenu/>}>
            <Route path={'cards-list'} element={<CardPage />}/>
            <Route path={'cards-list/:id'} element={<PostCard/>}/>
            <Route path={'info'} element={<Information/>}/>
        </Route>
        </Routes>
     ) : ( 
     <Routes> 
         <Route  path={'/'} element={<Authorization/>}/>
         <Route  path={'confirm'} element={<Confirmation/>}/>
     </Routes>  
     )}
    </BrowserRouter>
);
};

export default Router;