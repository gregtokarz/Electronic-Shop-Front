import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} width="350" height="418" alt='' />
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>
          {props.new_price} zł
        </div>
        <div className='item-price-old'>
          {props.old_price} zł
        </div>
      </div>
    </div>
  )
}

export default Item