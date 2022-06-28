import React, { FC } from "react";
import './Confirmation.css';
import Button from "../../components/Button";
import "../../components/Button/Button.css";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Toggle from "../../components/Toggle";
import classNames from 'classnames';
import { Theme, useThemeContext } from '../../context/themeModeContext';
import { AuthSelector, userActivate } from "../../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { userActivateApi } from "../../redux/api";
type ConfirmationProps = {
  onClick?: (name: string) => void;
};
const Confirmation: FC<ConfirmationProps> = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector(AuthSelector.getTempMail);

  const { uuid, token } = useParams();
  const onHomeClick = () => {
    dispatch(userActivate({ uuid, token, callback: () => navigate("/auth") }));
  };

  return (
    <div
      className={classNames(
        { ["registration-wrapper"]: isLightTheme },
        { ["registration-wrapper dark"]: !isLightTheme }
      )}
    >
      <Toggle />
      <h1 className="registration-title">Registration Confirmation</h1>
      <div className="registration-text">
        <p>
          Please activate your account with the activation link in the email{""}{" "}
          <Button className="btnLink" btnText={email ?? ""} /> Please, check
          your email
        </p>
      </div>
      <Button
        className="btn-registration"
        btnText="Home"
        onClick={onHomeClick}
      />
    </div>
  );
};

// const Confirmation = () => {
//     const { theme, onChangeTheme = () => {} } = useThemeContext();
//     const isLightTheme = theme === Theme.Light;
//     const location: any = useLocation();
//     console.log(location.state.email);

//     const onHomeClick = () => {
//         localStorage.setItem("isLoggedIn", "true");
//         window.location.replace("/card");
// };
// return (
//     <div className={classNames( {['confirmation']:isLightTheme}, {['confirmationDark'] : !isLightTheme})}>
//         <Toggle/>
//         <h1 className="confirmationTitle">Registration Confirmation</h1>
//         <div className="confirmationMessage">
//         <p>Please activate your account with the activation link in the
//           email{''} <Button className='btnLink' btnText={location?.state?.email ?? ''} />  Please, check your email</p>
//         </div>
//         <Button className='btnConfirmation' btnText='Home' onClick={onHomeClick}/>
//       </div>
// );
// };


// const Confirmation = (prors:any) => {
// return (
//     <div className="confirmation">
//         <h2 className="title">Registration Confirmation</h2>
//         <p className="text">
//             Please activate your account with <br />
//             the activation link in the email <br/>
//             <span>test@gmail.com</span>
//         <br/>
//         Please check your email
// </p>
// <Button className='btnConfirmation' btnText={'Home'}></Button>
//     </div>
// )
// };
export default Confirmation;