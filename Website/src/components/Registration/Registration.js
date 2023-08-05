import React, { useState } from "react";
import "./App.css";
import profile from "./images/a.png";
import email from "./images/email.jpg";
import pass from "./images/pass.png";
import axios from "axios";

const Registration = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

     if (!isValidEmail(emailValue)) {
      setError("Invalid email format");
      return;
    }

    if (!isValidPassword(passwordValue)) {
      setError(
        "Password should be 10 characters long with at least one special character and one number"
      );
      return;
    }

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
          password: passwordValue,
          confirmPassword: confirmPasswordValue,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,}$/;
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
              <div>
                <img src={email} alt="email" className="email" />
                <input type="text" placeholder="Email" className="name" />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="password"
                  className="name"
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
                <a href="#">Forgot password ?</a> Or <a href="/login">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
