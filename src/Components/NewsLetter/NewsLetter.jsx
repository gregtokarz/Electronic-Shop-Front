import React from "react";
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Ekskluzywne oferty prosto na twój email</h1>
      <p>Subsrybuj nasz newsletter i bądź na bieżąco</p>
      <div>
        <input type="email" placeholder='Twój Email'/>
        <button>Subskrybuj</button>
      </div>
    </div>
  )
}

export default NewsLetter
