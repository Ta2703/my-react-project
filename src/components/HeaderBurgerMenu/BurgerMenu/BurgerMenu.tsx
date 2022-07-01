import React from "react";
import './BurgerMenu.css';
import { elastic as HeaderBurgerMenu } from "react-burger-menu";
import { NavLink } from 'react-router-dom';
import {logout} from "../../../redux/reducers/authReducer";
import { useDispatch } from "react-redux";


export default (props: any) => {
    const dispatch = useDispatch();

// export default (props: any) => {
    const removeItem = () => {
        dispatch(logout({}));
      };

    return (
        <HeaderBurgerMenu>
    <NavLink className="menuItem" to="/all posts">
            All posts
            </NavLink>
    <NavLink className="menuItem" to="/my posts">
            My posts
        </NavLink>
    <NavLink className="menuItem" to="/add posts">
            Add posts
        </NavLink>
        <NavLink className="menuItem" to="/log out">
            Log out
        </NavLink>
    </HeaderBurgerMenu>
    );
};