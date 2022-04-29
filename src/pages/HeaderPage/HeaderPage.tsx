import React, {FC} from "react";
import './HeaderPage.css';
import Button from "../../components/Button";
import classNames from 'classnames';

type HeaderPageProps = {
    onClick: (tabName:string) => void
    activeTab: string;
}

const HeaderPage: FC <HeaderPageProps> =({onClick, activeTab}) => {
    const loginActive = activeTab === 'login' ;
    return (
        <div className="headerPage">
        <Button className={classNames('btnHeader', {['active']: loginActive})}  
        onClick = {() => onClick('login')} btnText='Login' />

        <p className="line">
        </p>
        
        <Button className={classNames('btnHeader', {['active']: !loginActive})} 
        onClick = {() => onClick('registration')} btnText='Registration'/>
    </div>
    )};


export default HeaderPage;