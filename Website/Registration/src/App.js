import React, { useState } from 'react';
import './App.css';
import profile from "./images/a.png";
import email from "./images/email.jpg";
import pass from "./images/pass.png";
import axios from 'axios';

function App() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://lapshopapp-f26f1576abb1.herokuapp.com/api/register',
        { email: emailValue, password: passwordValue, confirmPassword: confirmPasswordValue }
      );

    
      console.log(response.data);
    } catch (error) {
    
      console.error(error);
    }
  };
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>

         </div>
         <div>
           <h1>Registration</h1>
           <form onSubmit={handleSubmit}>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="Email" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
           <div className="third-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Confirm password" className="name" value={confirmPasswordValue} onChange={(e) => setConfirmPasswordValue(e.target.value)}/>
           </div>
          <div className="signup-button">
          <button>Create Account</button>
          </div>
         
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#">Login</a>
            </p>
            </form>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default App;