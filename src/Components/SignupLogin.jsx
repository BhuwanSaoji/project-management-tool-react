import React from 'react'
import './SignupLogin.css'
import {CiMail} from 'react-icons/ci';
const SignupLogin = () => {
  return (
    <div className='main_signup_container'>
      <div className='sign_up_card'>
        <div className='details_signup'>
            <h2 className='signup__header'>Sign in to Productivitie</h2>
            <input type="email" name="email" placeholder='Email' className='mail'/>
            <input type="password" name="password" placeholder='Password' />
            <small>Forgot your password?</small>
            <button className='btn btn-log-in'>Sign in</button>
        </div>
        <div className='background_signup'>
          <h1 className='background_heading'>Hello, Friend!!</h1>
          <p className='background_para'>Enter your details</p>
          <p className='background_para'>and start a journey with us</p>
          <button className='btn btn-signup'>Sign Up</button>
        </div>
      </div>
    </div>
    
  )
}

export default SignupLogin