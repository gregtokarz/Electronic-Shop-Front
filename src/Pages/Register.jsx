import React, { useState } from 'react';
import './CSS/Register.css'
import {Link} from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const [registrationMessage, setRegistrationMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

        if (response.ok) {
          setRegistrationMessage('Rejestracja przebiegła pomyślnie!');
          // Dodaj dodatkową logikę, jeśli potrzebujesz
        } else {
          setRegistrationMessage('Błąd rejestracji. Spróbuj ponownie.');
          // Obsłuż błędy rejestracji
        }

    } catch (error) {
      setRegistrationMessage('Wystąpił błąd podczas rejestracji.');
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className='register'>
      <div className="register-container">
        <h1>Rejestracja</h1>

        <form onSubmit={handleSubmit}>
          <div className="register-fields">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Imię" />
            <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Nazwisko" />
            <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Hasło" />
          </div>
          <button type="submit">Zarejestruj się</button>
          <div className="register-agree">
            <input type="checkbox" name='' id='' required/>
            <p>Kontynuując zgadzam się z warunkami użytkowania</p>
          </div>
        </form>

        {registrationMessage && (
          <p className={registrationMessage.includes('pomyślnie') ? 'register-success' : 'register-fail'}>
            {registrationMessage}
          </p>
        )}

        <p className="register-login">Masz konto? <Link to='/login'><span>Zaloguj się</span></Link></p>

      </div>
    </div>
  );
}

export default Register;
