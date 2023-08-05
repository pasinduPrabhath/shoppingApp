import React from 'react'
import './Login.css';

export default function Login() {
  return (
    <div className='login-container'>
        <div className='log'>
            <h1>Login</h1>
            <form>
              <div>
                <input type="text" id="username" placeholder='Enter the username'/>
              </div>
              <br />
              <div>
                <input type="password" id="password" placeholder='Enter the password'/>
              </div>
              <br />
            </form>
        </div>
    </div>
  )
}
