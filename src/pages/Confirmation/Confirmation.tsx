import React from "react";
import './Confirmation.css';
import Button from "../../components/Button";

const Confirmation = (prors:any) => {
return (
    <div className="confirmation">
        <h2 className="title">Registration Confirmation</h2>
        <p className="text">
            Please activate your account with <br />
            the activation link in the email <br/>
            <span>test@gmail.com</span>
        <br/>
        Please check your email
</p>
<Button className='btnConfirmation' text={'Home'}></Button>
    </div>
)
};
export default Confirmation;