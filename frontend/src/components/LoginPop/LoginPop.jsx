import React, { useState } from 'react'
import './LoginPop.css';
import { assets } from '../../assets/assets';

const LoginPop = ({setshowLogin}) => {

    const [State, setState] = useState('login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{State}</h2>
                <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {State==="login"? <></> : <input type="text" placeholder='username' /> }
               
                <input type="email" placeholder='Enter Your Email' />
                <input type="password" placeholder='Enter Your Password' />
            </div>
            <button>{State==="signup"? "Create Account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" />
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
           
            
            {State==='login'? <p>Create a new account? <span onClick={()=>setState("signup")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setState("login")}>Login here</span></p>}

        </form>
    </div>
  )
}

export default LoginPop