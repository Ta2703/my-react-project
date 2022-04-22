import React from "react";
import './Login.css';
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = ( ) => {
    return (
        <div className="login">
            <div className="loginTitle">
                <h3 className="loginLog">Login</h3>
                <h3 className="loginReg">Registation</h3>
            </div>
            <form>
                <label htmlFor="email">Email</label>
                <Input id="email"></Input>
                <label htmlFor="password">Password</label>
                <Input id="passvord"></Input>
            </form>
            <Button text={'Login'}></Button>
            <p>
                Forgot your passvord? <br/>
                <span>Reset password</span>
            
            </p>
        </div>
    )
};

export default Login;