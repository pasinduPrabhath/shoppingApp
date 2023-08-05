import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://lapshopapp-f26f1576abb1.herokuapp.com/api/login",
        { email, password }
      );

      if (response.status === 200) {
        console.log(response.data);
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="log">
        <h1 className="titile">Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="email"
              placeholder="Enter the email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              id="password"
              placeholder="Enter the password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />

          <br />
          <div>
            <button type="submit" className="customerbutton">
              Login
            </button>
          </div>
          <div>
            <p>
              Do not have an account? <a href="/registration">Sign Up</a> here
            </p>
            <br />
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}
