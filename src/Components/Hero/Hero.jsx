import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.jpg'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>OKAZJE</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>NOWOŚCI</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Elektronika</p>
          <p>dla wszystkich</p>
        </div>
        <div className='hero-latest-btn'>
          <div>Najnowsze produkty</div>
          <img src={arrow_icon} alt=''/>
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_image} height='842px' width='613' alt=''/>
      </div>
    </div>
  )
}

export default Hero
