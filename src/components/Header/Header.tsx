import React from "react";
import './Header.css';
import { Theme, useThemeContext } from "../../context/themeModeContext";
import BurgerMenu from "../HeaderBurgerMenu/BurgerMenu";
import { Outlet } from "react-router-dom";
// import { wrap } from "module";

const Header = () => {
    const { theme, onChangeTheme = () => {} } = useThemeContext ()
    const isLinghtTheme = theme === Theme.Light
    const onClickTheme = () => {
        isLinghtTheme ? onChangeTheme(Theme.Dark) : onChangeTheme(Theme.Light)
    }
    return (
        <div>
        <header className={isLinghtTheme ? "header" : "header _dark"}>
            <div className="headerContainer">
                <div className="menuIcon">
            <BurgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                <span>
                    <i className="fa-regular fa-user headerItem"></i>
                </span>
                </div>
                <h3>User Name</h3>
                <div className="checkboxGroup">
                    <input type="checkbox" className="checkbox" id="checkbox"/>
                    <label onClick={onClickTheme} className="checkboxLabel" htmlFor="checkbox"/>
            </div>;
            </div>
        </header>
        <Outlet />
    </div>
    ); 
} 
;


export default Header;

