import React, { useState } from "react";
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const isEmailValid = (email) => {
    // Wyrażenie regularne do sprawdzenia poprawności formatu adresu email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      if (isEmailValid(email)) {

        setMessage("Poprawnie zapisano na newsletter!");
      } else {
        setMessage("Podany email ma niepoprawny format!");
      }
    } else {
      setMessage("Pole email nie może być puste!");
    }
  };

  return (
    <div className='newsletter'>
      <h1>Ekskluzywne oferty prosto na twój email</h1>
      <p>Subskrybuj nasz newsletter i bądź na bieżąco</p>
      <div>
        <input
          type="email"
          placeholder='Twój Email'
          value={email}
          onChange={handleInputChange}
        />
        <button onClick={handleSubscribe}>Subskrybuj</button>
      </div>
      <p className="message">{message}</p>
    </div>
  );
}

export default NewsLetter;
