import React, {useContext, useEffect, useState} from 'react'
import './Navbar.css'
import {jwtDecode} from "jwt-decode";
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from "react-router-dom";
import {useAuth} from "../AuthHandler/AuthHandler";
import {ShopContext} from "../../Context/ShopContext";

const Navbar = () => {
  const { token, isAdmin, handleLogout } = useAuth();


  const [menu, setMenu] = useState("sklep");
  const {getTotalCartItems} = useContext(ShopContext);


  return (
    <div className='navbar'>
      <Link style={{textDecoration: "none"}} to='/'><div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>Electronics shop</p>
      </div></Link>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("sklep")}}><Link style={{textDecoration: "none"}} to='/'>Sklep</Link>{menu==="sklep"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("telefony")}}><Link style={{textDecoration: "none"}} to='/telefony'>Telefony</Link>{menu==="telefony"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("komputery")}}><Link style={{textDecoration: "none"}} to='/komputery'>Komputery</Link>{menu==="komputery"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("AGD")}}><Link style={{textDecoration: "none"}} to='/agd'>AGD</Link>{menu==="AGD"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        {token ? (
          <>
            {isAdmin &&
              <a href="/admin" style={{textDecoration: 'none'}}>ADMIN</a>

            }
            {isAdmin &&
              <a href="/add" style={{textDecoration: 'none'}}>DODAJ</a>

            }
            <button onClick={handleLogout}>Wyloguj się</button>

          </>
        ) : (
          <Link to="/login">
            <button>Zaloguj się</button>
          </Link>
        )}
        <Link to='/cart'> <img src={cart_icon} alt='' /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
