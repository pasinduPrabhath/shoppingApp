import React, { useState } from "react";
import "./App.css";
import profile from "../../icon/laptop.png";
import email from "./images/email.jpg";
import pass from "./images/pass.png";
import axios from "axios";
import EmailVerify from "../../components/EmailVerifyPage/EmailOTPVerifyPage";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [error, setError] = useState(null);
  const [isReg, setIsReg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(emailValue)) {
      setError("Invalid email format");
      return;
    }

    // if (!isValidPassword(passwordValue)) {
    //   setError(
    //     "Password should be 10 characters long with at least one special character and one number"
    //   );
    //   return;
    // }

    if (passwordValue !== confirmPasswordValue) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError(null);
      const response = await axios.post(
        "https://lapshopapp-f26f1576abb1.herokuapp.com/api/register",
        {
          email: emailValue,
          password: confirmPasswordValue,
          userName: nameValue,
        }
      );
      if (response.data.success === 1) {
        setIsReg(true);
      }

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (isReg) {
    navigate(`/registration/EmailVerify?email=${emailValue}`);
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
              <div className="error-message">{error && <p>{error}</p>}</div>
              <div>
                <input
                  type="text"
                  placeholder="username"
                  className="name"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                />
              </div>
              <div>
                <img src={email} alt="email" className="email" />
                <input
                  type="text"
                  placeholder="Email"
                  className="name"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="password"
                  className="name"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                />
              </div>
              <div className="third-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="name"
                  value={confirmPasswordValue}
                  onChange={(e) => setConfirmPasswordValue(e.target.value)}
                />
              </div>
              <div className="signup-button">
                <button className="craeteBtn">Create Account</button>
              </div>

              <p className="link">
                Already have an Account?{" "}
                <a href="/login">
                  <u>Login</u>
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
