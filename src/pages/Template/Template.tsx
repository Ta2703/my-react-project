import React from "react";
import './Template.css';
import Button from "../../components/Button";
import Input from "../../components/Input";

const Template = () => {
    return (
        <div className="templateTopic">
            <p>text</p>
            <div className="templateTitle">
                <h3>Title</h3>
                <Button text={'button'}></Button>
            </div>
        </div>
    )
};

export default Template;