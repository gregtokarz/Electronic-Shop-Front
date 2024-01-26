import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-container'>
        <h2>Kontakt</h2>
        <p>
          Masz pytania? Skontaktuj się z nami!
        </p>
        <div className='contact-details'>
          <p>Email: <a href='mailto:info@naszafirma.com'>info@naszafirma.com</a></p>
          <p>Telefon: +48 123 456 789</p>
          <p>Adres: ul. Przykładowa 1, 00-000 Warszawa</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
