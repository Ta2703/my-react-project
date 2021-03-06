import React from "react";
import './BurgerMenu.css';
import {slide as Header} from "react-burger-menu";
import { NavLink } from 'react-router-dom'


export default (props: any) => {
    return (
    <NavLink>
        <a className="menuItem" href="/all posts">
            All posts
        </a>
        <a className="menuItem" href="/my posts">
            My posts
        </a>
        <a className="menuItem" href="/add posts">
            Add posts
        </a>
        <a className="menuItem" href="/log out">
            Log out
        </a>
    </NavLink>
    );
};