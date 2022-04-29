import React from "react";
import './Header.css';
import BurgerMenu from "../BurgerMenu";
// import { wrap } from "module";

const Header = () => {
    return (
        <header id="outer-container">
            <BurgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
            <div id="page-wrap">
            <div className="header">
                <span>
                    <i className="fa-regular fa-user headerItem"></i>
                </span>
                <span className="headerItem">Username</span>
            </div>;
            </div>
        </header>
    );
}
;


export default Header;

