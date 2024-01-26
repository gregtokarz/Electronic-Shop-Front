import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.jpg'
import {Link} from "react-router-dom";
const Offers = () => {
  return(
    <div className='offers'>
      <div className='offers-left'>
        <h1>Ekskluzywne</h1>
        <h1>Oferty dla ciebie</h1>
        <p>TYLKO BESTSELLERY</p>
        <Link to={"/komputery"}><button >Sprawdź</button></Link>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image} alt='' />
      </div>
    </div>
  )
}

export default Offers
