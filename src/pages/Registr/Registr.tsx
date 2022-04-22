import React from "react";
import './Registr.css';
import Button from "../../components/Button";
import Input from "../../components/Input";

const Registr = () => {
    return (
        <div className="registr">
            <div className="registrTitle">
                <h3 className="regLog">Login</h3>
                <h3 className="regReg">Registration</h3>
            </div>
            <form>
                <label htmlFor="userName">User name</label>
                <Input id='userName'></Input>
                <label htmlFor="email">Email</label>
                <Input id='email'></Input>
                <label htmlFor="password">Password</label>
                <Input id='password'></Input>
                <label htmlFor="confirmPassword">Confirm password</label>
                <Input id='confirmPassword'></Input>
            </form>
            <Button text={'Login'}></Button>]
            <p>
                If you have account your can
                <span>Login</span>
            </p>
        </div>
    )
};

export default Registr;