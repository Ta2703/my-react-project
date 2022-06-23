import React, {FC} from "react";
import './Button.css';


type ButtonProps = {
    onClick?: () => void;
    className?:string;
    btnText:string;
    disabled?:boolean;

  }

const Button:FC<ButtonProps> = ({className, onClick, btnText, disabled}) => {
    return <button disabled={disabled} onClick={onClick} className={className}>
        {btnText}
    </button>
};

  
export default Button;