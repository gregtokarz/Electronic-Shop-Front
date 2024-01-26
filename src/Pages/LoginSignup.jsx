import React, {useState} from 'react'
import './CSS/LoginSignup.css'
import {Link} from "react-router-dom";
const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  // Funkcja obsługująca zdarzenie logowania
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Wyślij zapytanie do serwera w celu logowania
      const response = await fetch('http://localhost:8080/api/auth/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        // Pomyślne zalogowanie - ustaw wiadomość na ekranie
        setLoginMessage('Zalogowano pomyślnie!');
        setTimeout(() => {
          window.location.href = "/"
        }, 1300)
        console.log(localStorage.getItem('token'))
      } else {
        // Błąd logowania - ustaw wiadomość na ekranie
        setLoginMessage('Nieudane logowanie. Sprawdź swoje dane.');
      }
    } catch (error) {
      // Błąd sieci lub inny błąd - ustaw wiadomość na ekranie
      setLoginMessage('Bład sieci. Spróbuj ponownie później.');
    }
  };

  return(
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Logowanie</h1>
        <form onSubmit={handleLogin}>
          <div className='loginsignup-fields'>
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Hasło'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit'>Zaloguj się</button>
        </form>
        <p className='loginsignup-message'>{loginMessage}</p>
        <p className='loginsignup-login'>
          Nie masz konta?{' '}
          <Link to='/signup'>
            <span>Zarejestruj się</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginSignup
