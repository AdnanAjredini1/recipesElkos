import Input from "./LoginComponents/Input";
import "./loginPage.css";
import GoogleIcon from "./loginPage-assets/icons8-google.svg?react";
import { Link } from "react-router-dom";

function LoginPage({ textWrapperClass, buttonText, loginWithGoogleText, displayNone,title }) {
  return (
    <div className="loginPageWrapper">
      <div className="logini">
        <div className={`textWrapper`}>
          <p className="welcomeText">{title}</p>
          <p className={`weAreHappyText ${displayNone}`}>We are happy to have you back!</p>
        </div>

        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <div className="loginButton">
          <p>{buttonText}</p>
        </div>
        <p className="orText">-&nbsp;&nbsp;Or&nbsp;&nbsp;-</p>
        <div className="loginWithGoogleWrapper">
          <GoogleIcon className="googleIcon" />
          <p>{loginWithGoogleText}</p>
        </div>
        <div className={`dontHaveAccountWrapper ${displayNone}`}>
          <p>Don't have account?</p>
          <Link to="/register" className="signupLink">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
