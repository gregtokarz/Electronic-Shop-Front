import React, {useContext, useEffect} from "react";
import './CartItems.css'
import {ShopContext} from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
  const {data, cartItems, removeFromCart} = useContext(ShopContext);

  if (!data|| data.length === 0) {
    return <p>Ładowanie danych...</p>;
  } else{return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Produkty</p>
        <p>Nazwa</p>
        <p>Cena</p>
        <p>Ilość</p>
        <p>Usuń</p>
      </div>
      <hr/>
      {data.map((e)=>{
        if(cartItems[e.electronicId]>0){
          return <div>
            <div className='cartitems-format cartitems-format-main'>
              <img src={e.image} alt='' className='carticon-product-icon'/>
              <p>{e.name}</p>
              <p>{e.new_price}</p>
              <button className='cartitems-quantity'>{cartItems[e.electronicId]}</button>
              <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.electronicId)}} alt=''/>
            </div>
            <hr/>
          </div>
        }
      })}
    </div>
  )}


}

export default CartItems
