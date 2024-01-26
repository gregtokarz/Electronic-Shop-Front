import React, {createContext, useEffect, useState} from 'react';
import all_product from "../Components/Assets/all_product";
import axios from "axios";
export const ShopContext = createContext(null);


const ShopContextProvider = (props) => {

  const [data, setData] = useState([]);





  useEffect(() => {
    // Wykonaj żądanie HTTP GET do serwera Spring Boot
    axios.get('http://localhost:8080/api')
      .then(response => {
        // Ustaw otrzymane dane w stanie komponentu
        setData(response.data);
        setCartItems(getDefaultCart(response.data));
      })
      .catch(error => {
        // Obsłuż błąd żądania
        console.error('Error fetching data:', error);
      });
  }, []);

  const getDefaultCart = (products) => {
    let cart = {};
    // Sprawdź, czy products nie jest undefined przed próbą dostępu do length
    if (products && products.length) {
      for (let index = 0; index < products.length + 1; index++) {
        cart[index] = 0;
      }
    }
    return cart;
  };


  const [cartItems, setCartItems] = useState(getDefaultCart());



  let updatedcart= null;

  const addToCart = (itemId) =>{
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log("fsdf", updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      return updatedCart;
    });
  };

  const getTotalCartItems = () => {


    let totalItem = 0;
    for(const item in cartItems){
      console.log("dsadsds", cartItems);
      if(cartItems[item]>0){
        totalItem += cartItems[item];
      }
    }return totalItem;

  }


  const contextValue = {getTotalCartItems, data, cartItems, addToCart, removeFromCart};
  return (
    <ShopContext.Provider value={contextValue}>

      {props.children}
    </ShopContext.Provider>
  )
}



export default ShopContextProvider;
