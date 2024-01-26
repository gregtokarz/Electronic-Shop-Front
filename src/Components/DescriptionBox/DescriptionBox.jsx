import React, {useContext} from 'react'
import './DescriptionBox.css'
import {ShopContext} from "../../Context/ShopContext";
import {useParams} from "react-router-dom";
const DescriptionBox = (props) => {

  const {product} = props;

  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
          <div className='descriptionbox-nav-box'>Opis</div>
        </div>
      <div className='descriptionbox-description'>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default DescriptionBox
