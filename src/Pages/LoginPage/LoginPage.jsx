import Input from "./LoginComponents/Input";
import "./loginPage.css";
import GoogleIcon from "./loginPage-assets/icons8-google.svg?react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { isLoggedInActions } from "../../Store/isLoggedIn";

function LoginPage({
  textWrapperClass,
  buttonText,
  loginWithGoogleText,
  displayNone,
  title,
}) {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onChangeHandler = (value, name) => {
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://recipeback-ijkr.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: input.email,
          password: input.password,
        }),
        credentials: "include"  
      });
  
      const data = await response.json();  
  
      if (response.ok) {
        console.log("Login successful:", data);
        dispatch(isLoggedInActions.setIsLoggedIn());
        navigate("/");
      } else {
        console.log("Login failed:", data.message); 
      }
    } catch (err) {
      console.error("Error submitting form:", err); 
    }
  };

  const handleClick = () => {
    window.location.href = 'http://localhost:3000/auth/google'; 
  };
  

  return (
    <div className="loginPageWrapper">
      <form className="logini" onSubmit={onSubmitHandler}>
        <div className={`textWrapper`}>
          <p className="welcomeText">{title}</p>
          <p className={`weAreHappyText ${displayNone}`}>
            We are happy to have you back!
          </p>
        </div>

        <Input
          type="email"
          placeholder="Email"
          name="username"
          value={input.email}
          onChange={(e) => onChangeHandler(e.target.value, "email")}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={(e) => onChangeHandler(e.target.value, "password")}
        />

        <button type="submit" className="loginButton">
          <p>{buttonText}</p>
        </button>
        <p className="orText">-&nbsp;&nbsp;Or&nbsp;&nbsp;-</p>
        <button className="loginWithGoogleWrapper" onClick={handleClick}>
          <GoogleIcon className="googleIcon" />
          <p>{loginWithGoogleText}</p>
        </button>
        <div className={`dontHaveAccountWrapper ${displayNone}`}>
          <p>Don't have account?</p>
          <Link to="/new/sign-up" className="signupLink">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
