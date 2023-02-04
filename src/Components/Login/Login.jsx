import React, { useState, useCallback } from 'react'
import './Login.css';
import {NotificationManager} from 'react-notifications';


const SignupLogin = () => {

  function goToLoginPage() {
    document.getElementsByClassName('details_login')[0].id= "text_animation_left_to_right2";    //setAttribute("id", );
    document.getElementsByClassName('form_container')[0].id ="form_container_animation2";
    document.getElementsByClassName('details_signup')[0].id ="signup_detail_container_animation2";
    document.getElementsByClassName('content_container')[0].id ="content_container_animation2";
    document.getElementsByClassName('background_signup')[0].id ="signup_form_container_animation2";
    document.getElementsByClassName('background_login')[0].id ="login_card_animation2";

  }

  function goToSignUpPage() {
    document.getElementsByClassName('details_login')[0].id = "text_animation_left_to_right";
    document.getElementsByClassName('form_container')[0].id = "form_container_animation";
    document.getElementsByClassName('details_signup')[0].id = "signup_detail_container_animation";
    document.getElementsByClassName('content_container')[0].id = "content_container_animation";
    document.getElementsByClassName('background_signup')[0].id = "signup_form_container_animation";
    document.getElementsByClassName('background_login')[0].id = "login_card_animation";

  }

  function signUp() {
    
    NotificationManager.success("Signed Up")
  }

  return (
    <div className='main_login_container'>
      <div className='login_card'>
        <div className='details_login'>
          <div className='form_container'>
            <h2 className='login__header'>Sign in to Productivitie</h2>
            <input type="email" name="email" placeholder='Email' className='mail' />
            <input type="password" name="password" placeholder='Password' />
            <small>Forgot your password?</small>
            <button className='btn btn-log-in'>LOGIN</button>
          </div>
          <div className='details_signup'>
            <h2 className='signup__header'>Create Account</h2>
            <input type="text" name="name" placeholder='Name' className='name' />
            <input type="email" name="email" placeholder='Email' className='mail' />
            <input type="password" name="password" placeholder='Password' />
            <button className='btn btn-sign-up' onClick={signUp}>SIGN UP</button>
          </div>

        </div>
        <div className='background_login' >
          <div className='content_container'>
            <h1 className='background_heading'>Hello, Friend!!</h1>
            <p className='background_para'>Enter your details</p>
            <p className='background_para'>and start a journey with us</p>
            <button className='btn btn-login' onClick={goToSignUpPage}>Sign Up Page</button>

          </div>
          <div className='background_signup'>
            <h1 className='background_heading'>Welcome Back!</h1>
            <p className='background_para'>To keep connected with us please</p>
            <p className='background_para'>login with your personal info</p>
            <button className='btn btn-signup' onClick={goToLoginPage}>LOGIN Page</button>
          </div>


        </div>
      </div>




    </div>

  )
}

export default SignupLogin