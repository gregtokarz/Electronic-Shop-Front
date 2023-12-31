import React, {useState} from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from "react-router-dom";
const Navbar = () => {

    const [menu, setMenu] = useState("sklep");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>ELectronics shop</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("sklep")}}><Link style={{textDecoration: "none"}} to='/'>Sklep</Link>{menu==="sklep"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("telefony")}}><Link style={{textDecoration: "none"}} to='/telefony'>Telefony</Link>{menu==="telefony"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("komputery")}}><Link style={{textDecoration: "none"}} to='/komputery'>Komputery</Link>{menu==="komputery"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("AGD")}}><Link style={{textDecoration: "none"}} to='/agd'>AGD</Link>{menu==="AGD"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'> <img src={cart_icon} alt='' /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
