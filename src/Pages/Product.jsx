import React, {useContext} from 'react'
import {ShopContext} from "../Context/ShopContext";
import {useParams} from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const {data} = useContext(ShopContext);
  console.log("fsdfsdsdffdssfd")
  const {productId} = useParams();
  const product = data.find((e)=> e.electronicId === productId);
  return(
    <div>

      <ProductDisplay product={product} />

      <RelatedProducts />
    </div>
  )
}

export default Product
