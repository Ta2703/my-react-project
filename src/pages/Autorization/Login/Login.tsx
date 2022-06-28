import React, {FC, useEffect, useState} from "react";
import './Login.css';
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import HeaderPage from "../HeaderPage";
import Confirmation from "../../Confirmation";
import Regist from "../Registr";
import { useDispatch } from "react-redux";





type LoginFormProps = {
    onClick: (name: string) => void;
    onConfirmClick: () => void;
}



const LoginForm: FC <LoginFormProps> = ({
    onClick,
    onConfirmClick
}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState(Number);
    const [emailError, setEmailError] = useState('');
    const[passError, setPassError] = useState('');
    const[formValid, setFormValid] = useState(false);




    useEffect(() => {
        if (emailError || passError) {
            setFormValid(false)
        } else {
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
        setPass(event.target.value)
        const result = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!result.test((event.target.value))) {
           setPassError ('The password should contain 8 values with a symbol, capital and lowercase letters and digits')
        }
         else {
           setPassError ('')
        }
    }

    const dispatch = useDispatch();


    
    const onClickPlus = (isPlus: boolean) => {
        const PLUS_ACTION = { type: "counter/incremented" };
        const MINUS_ACTION = { type: "counter/decremented" };
        dispatch(isPlus ? PLUS_ACTION : MINUS_ACTION);
      };
    return ( 
        <form className="loginForm">
        <div className="loginFormEmail">
            <p>Email</p>
            <Input  type='email' required='required' value={email} onChange={emailValid} />
            {emailError && <div className='err'>{emailError}</div>}
        </div>
    
        <div className="loginFormPassword">
            <p>Password</p>
            <Input   type='password' required='required' value={pass} onChange={passValid} />
            {passError && <div className='err'>{passError}</div>}
        </div>
    
        {/* <Button className="btn" value={"ПЛЮС"} onClick={()=>onClickPlus(true)}/>;
    <Button className="btn" value={"МИНУС"} onClick={()=>onClickPlus(false)}/>; */}

            <Button disabled={!formValid}
            // className='btnLoginConfirm' 
            btnText='Login' onClick={() => { } } className={"btnLoginConfirm'"}  />
            <div className="loginForgot">
        <p className="loginForgotText">Forgot your password?</p>
        <a href="#reset" className="loginReset">Reset password</a>
    </div>
    </form> 
    )
}

const Login = () => {
    const [tabName, setTabName] = useState ('login');
    const [isConfirmed, setConfirmed] = useState (false);
  const onButtonClick = (name: string) => {setTabName (name)};
  const onClickRegister = () => {setConfirmed(true)};
  
      return !isConfirmed ? (
       <div className='login-wrapper'>
  
  <HeaderPage onClick={onButtonClick} activeTab={tabName} /> 
  {tabName === 'login' ? (
      <LoginForm onClick={onButtonClick} onConfirmClick={onClickRegister} />
  ): (
      <Regist onClick={onButtonClick} onConfirmClick={onClickRegister} />
  )}

       </div>
      ) : (
         <Confirmation />
  )
      }





// const Login = ( ) => {
//     return (
//         <div className="login">
//             <div className="loginTitle">
//                 <h3 className="loginLog">Login</h3>
//                 <h3 className="loginReg">Registation</h3>
//             </div>
//             <form>
//                 <label htmlFor="email">Email</label>
//                 <Input id="email"></Input>
//                 <label htmlFor="password">Password</label>
//                 <Input id="passvord"></Input>
//             </form>
//             <Button text={'Login'}></Button> 
//             <p>
//                 Forgot your passvord? <br/>
//                 <span>Reset password</span>
            
//             </p>
//         </div>
//     )
// };

export default Login