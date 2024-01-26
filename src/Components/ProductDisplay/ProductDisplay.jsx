import React, {useContext} from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import {ShopContext} from "../../Context/ShopContext";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import Breadcrum from "../Breadcrums/Breadcrum";
const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);


  if (!product) {
    return <div>Loading...</div>; // You can customize this loading message or return null
  }

  return (
    <div>
      <Breadcrum product={product}/>
      <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image}/>
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">{product.old_price}</div>
          <div className="productdisplay-right-price-new">{product.new_price}</div>
        </div>

        <button onClick={()=>{addToCart(product.electronicId)}}>Dodaj do koszyka</button>

      </div>

    </div>
    <DescriptionBox product={product} /></div>

  )
}

export default ProductDisplay
