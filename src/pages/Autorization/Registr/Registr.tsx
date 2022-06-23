import React, {FC, useEffect, useState} from "react";
import './Registr.css';
import Button from "../../../components/Button";
import Input from "../../../components/Input";

type RegistProps = {
    onClick: (name: string) => void;
    onConfirmClick: () => void;
}

const Registr: FC<RegistProps> = ({
    onClick,
    onConfirmClick, 
}) => {
    // const [userName, setUserName] = useState ('');
    const [email, setEmail] = useState ('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');
    const [pass, setPass] = useState('');
    // const [password, setPassword] = useState ('');
    const [formValid, setFormValid] = useState(false);
    const [passConfirm, setPassConfirm] = useState ('');
    const [passErrorConfirm, setPassErrorConfirm] = useState ('');
    

    useEffect(() => {
        if(emailError || passError) {
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [emailError, passError])

    const emailValid = (event: any) => {
        event.preventDefault();
        setEmail(event.target.value)
        if (
        !String(event.target.value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ){
         setEmailError('Error email')
        } else {
            setEmailError ('')
        }
    };
    const passValid = (event: any) => {
        event.preventDefault ();
        setPass(event.target.value);
        const result = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!result.test((event.target.value))) {
           setPassError ('The password should contain 8 values with a symbol, capital and lowercase letters and digits')
        }
         else {
           setPassError ('')
        }
    }

    const passValidConfirm = (event:any) => {
        event.preventDefault();
        setPassConfirm(event.target.value);
if (setPass(event.target.value) != setPassConfirm(event.target.value)){
    setPassErrorConfirm('Пароли не совпадают')
} else {
    setPassErrorConfirm('')
}
    }

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

            {/* <Button text={'Login'}></Button> */}
            <Button disabled={!formValid} 
            className='btnLoginConfirm' 
            btnText='Login' onClick={() => {}}  />
            <p>
                If you have account your can 
                {/* <br/> */}
                 {/* <span>Login</span>  */}
            </p>
        </div>
    )
}

export default Registr;