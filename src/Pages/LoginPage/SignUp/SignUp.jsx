import "./sign-up.css";
import Input from "../LoginComponents/Input";
import GoogleIcon from "../loginPage-assets/icons8-google.svg?react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUp({
  textWrapperClass,
  buttonText,
  loginWithGoogleText,
  title,
  displayNone,
}) {
  const [input, setInput] = useState({
    email: "",
    password: "",
    username: "",
  });

  const navigate = useNavigate();

  const [profilePicture, setProfilePicture] = useState(null);

  const onChangeHandler = (value, name) => {
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const onFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", input.email);
      formData.append("password", input.password);
      formData.append("username", input.username);
      formData.append("image", profilePicture);
      const response = await axios.post(
        "http://localhost:3001/api/register",
        formData
      );
      console.log("Response from api:", response.data);
      if(response.data) {
        navigate("/new/login");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };


  return (
    <div className="signUpWrapper">
      <form className="logini" onSubmit={onSubmitHandler}>
        <div className={`textWrapper`}>
          <p className="welcomeText">{title}</p>
          <p className={`weAreHappyText ${displayNone}`}>
            We are happy to have you back!
          </p>
        </div>
        <Input
          placeholder="Username"
          type="text"
          value={input.username}
          onChange={(e) => onChangeHandler(e.target.value, "username")}
        />
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
        <div className="profilePitureWrp">
          <label>Profile picture</label>
          <input type="file" onChange={onFileChange} style={{maxWidth:'250px'}} />
        </div>
        <button type="submit" className="loginButton">
          <p>{buttonText}</p>
        </button>
        {/* <p className="orText">-&nbsp;&nbsp;Or&nbsp;&nbsp;-</p> */}

        <button className="loginWithGoogleWrapper">
          <GoogleIcon className="googleIcon" />
          <p>{loginWithGoogleText}</p>
        </button>
        <div className={`dontHaveAccountWrapper ${displayNone}`}>
          <p>Don't have account?</p>
          <Link to="/register" className="signupLink">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
