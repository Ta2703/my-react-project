import React, { useState } from 'react';

import './Autorization';

import Login from './Login';
import Registr from './Registr';

import { Theme, useThemeContext } from '../../context/themeModeContext';
import classNames from 'classnames';


const Authorization = () => {
    const {theme, onChangeTheme = () => {}} = useThemeContext();
    const isLightTheme = theme ===Theme.Light;

    const [tabName, setTabName] = useState ('login');
    const [Confirmation, setConfirmation] = useState (false);
    const onButtonClick = (name: string) => {setTabName (name)};
    const onClickRegister = () => {setConfirmation(true)};
    
        return  (
          <div className={classNames( {['auth-wrapper']:isLightTheme}, {['auth-wrapper dark'] : !isLightTheme})}>
    
        {/* <HeaderPage onClick={onButtonClick} activeTab={tabName} /> */}
    {tabName === 'login' ? (
        <Login 

        // onClick={onButtonClick} onConfirmClick={onClickRegister}
        
        />
    ):(
        <Registr onClick={onButtonClick} onConfirmClick={onClickRegister} />
    )};
         </div>
       
    )
        }

export default Authorization;