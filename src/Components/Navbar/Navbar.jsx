import React, {useState} from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {

    const [menu, setMenu] = useState("sklep");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>ELectronic shop</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("sklep")}}>Sklep{menu==="sklep"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("telefony")}}>Telefony{menu==="telefony"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("komputery")}}>Komputery{menu==="komputery"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("AGD")}}>AGD{menu==="AGD"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt='' />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
