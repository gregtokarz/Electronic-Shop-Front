import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return(
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Twoje imię'/>
          <input type="email" placeholder='Twój email'/>
          <input type="password" placeholder='Hasło'/>
        </div>
        <button>Kontynuuj</button>
        <p className="loginsignup-login">Masz konto? <span>Zaloguj się</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Kontynuując zgadzam się z warunkami użytkowania</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
