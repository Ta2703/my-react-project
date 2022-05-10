import React from "react"
import Input from "../Input"
import classNames from 'classnames';
import { Theme, useThemeContext } from '../../context/themeModeContext';
import './Toggle.css';


const Toggle = () => {

    const {theme, onChangeTheme = () => {}} = useThemeContext();
    const isLightTheme = theme === Theme.Light;
 
    const onClickTheme = () => {
        onChangeTheme((theme === "light") ? Theme.Dark : Theme.Light);
    }
 return (
<label className="switch">
  <Input type="checkbox"  
  className='themeBtn'/>

  <span 
  className="router round" 
  onClick= {onClickTheme} >
  </span>

</label>
 )   
 }

export default Toggle;