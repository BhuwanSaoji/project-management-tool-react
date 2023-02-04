import React from 'react'
import './Login.css';

const SignupLogin = () => {

  return (
    <div className='main_login_container'>
      <div className='login_card'>
        <div className='details_login' id='text_animation_left_to_right'>
          <div className='form_container' id='form_container_animation'>
            <h2 className='login__header'>Sign in to Productivitie</h2>
            <input type="email" name="email" placeholder='Email' className='mail' />
            <input type="password" name="password" placeholder='Password' />
            <small>Forgot your password?</small>
            <button className='btn btn-log-in'>LOGIN</button>
          </div>
          <div className='details_signup' id='signup_detail_container_animation'>
            <h2 className='signup__header'>Create Account</h2>
            <input type="text" name="name" placeholder='Name' className='name' />
            <input type="email" name="email" placeholder='Email' className='mail' />
            <input type="password" name="password" placeholder='Password' />
            <button className='btn btn-sign-up'>SIGN UP</button>
          </div>

        </div>
        <div className='background_login' id='login_card_animation'>
          <div className='content_container' id='content_container_animation'>
            <h1 className='background_heading'>Hello, Friend!!</h1>
            <p className='background_para'>Enter your details</p>
            <p className='background_para'>and start a journey with us</p>
            <button className='btn btn-login'>Sign Up</button>

          </div>
          <div className='background_signup' id='signup_form_container_animation'>
            <h1 className='background_heading'>Welcome Back!</h1>
            <p className='background_para'>To keep connected with us please</p>
            <p className='background_para'>login with your personal info</p>
            <button className='btn btn-signup'>LOGIN</button>
          </div>
          

        </div>
      </div>




    </div>

  )
}

export default SignupLogin