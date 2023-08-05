import React from 'react'
import './Login.css';

export default function Login() {
  return (
    <div className='login-container'>
        <div className='log'>
            <h1>Login</h1>
            <form>
              <div>
                <input type="text" id="email" placeholder='Enter the email'/>
              </div>
              <br />
              <div>
                <input type="password" id="password" placeholder='Enter the password'/>
              </div>
              <br />
              <div>
                <a>Forgot Password?</a>
              </div>
              <br/>
              <div>
                <button type="button" className='customerbutton'>
                  Login
                </button>
              </div>
              <div>
              <p>Do not have an account? <a>Sign Up</a> here</p><br/>
              </div>
              <br />
           
            </form>
        </div>
    </div>
  )
}
