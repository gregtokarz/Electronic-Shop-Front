import React, {useContext} from 'react'
import './NewCollections.css'
import Item from "../Item/Item";
import {ShopContext} from "../../Context/ShopContext";
const NewCollections =() => {

  const {data} = useContext(ShopContext);
  let new_collection;
  new_collection = data.slice(4, 12)

  return(
    <div className='new-collections'>
      <h1>NOWE PRODUKTY</h1>
      <hr/>
      <div className='collections'>
        {new_collection.map((item,i)=>{
          return <Item key={i} id={item.electronicId} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
