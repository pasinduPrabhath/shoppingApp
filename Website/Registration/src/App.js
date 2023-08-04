import './App.css';
import profile from "./images/a.png";
import email from "./images/email.jpg";
import pass from "./images/pass.png";

function App() {
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
             <input type="password" placeholder="Confirm password" className="name"/>
           </div>
          <div className="signup-button">
          <button>Create Account</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#">Login</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default App;