import React from "react";
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <div className='footer'>
      <a href="/" style={{textDecoration: "none"}}><div className='footer-logo'>
        <img src={footer_logo} alt="" />
        <p>ELECTRONICS SHOP</p>
    </div></a>
      <ul className="footer-links" >
        <li ><a href="/">Sklep</a></li>
        <li><a href="/agd">Produkty</a></li>
        <li><a href="/biura">Biura</a></li>
        <li><a href="/o-nas">O nas</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <Link to="https://www.instagram.com/"><img src={instagram_icon} alt="" /></Link>
        </div>
        <div className="footer-icons-container">
          <Link to="https://pl.pinterest.com/"><img src={pinterest_icon} alt="" /></Link>
        </div>
        <div className="footer-icons-container">
          <Link to="https://www.whatsapp.com/"><img src={whatsapp_icon} alt="" /></Link>
        </div>
      </div>
      <div className="footer-copright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
