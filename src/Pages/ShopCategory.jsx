import React, {useContext} from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from "../Context/ShopContext";
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {data} = useContext(ShopContext);


  return(
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' width="800" height="400" />
      <div className="shopcategory-indexSort">

      </div>
      <div className="shopcategory-products">
        {data.map((item,i)=>{
          if(props.category===item.category){


                  return <div style={{ display:'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Item key={i} id={item.electronicId} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}

            /></div>

          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
