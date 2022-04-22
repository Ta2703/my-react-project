import React from "react";
import "./Input.css";

const Input = (props: any) => {
    return <input className={props.className} type={props.type} id={props.id}/>
};

export default Input;