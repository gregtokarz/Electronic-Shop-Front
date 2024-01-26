import React, {useEffect, useState} from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from "../Item/Item";
import axios from 'axios';
const Popular = () => {

  const [sliceData, setSliceData] = useState([]);

  useEffect(() => {
    // Wykonaj żądanie HTTP GET do serwera Spring Boot
    axios.get('http://localhost:8080/api')
      .then(response => {
        // Ustaw otrzymane dane w stanie komponentu
        setSliceData(response.data.slice(0, 4));
      })
      .catch(error => {
        // Obsłuż błąd żądania
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='popular'>
      <h1>POPULARNE</h1>
      <hr/>
      <div className='popular-item'>
        {sliceData.map((item, i) => {

          return <Item key={i} id={item.electronicId} name={item.name} image={item.image} new_price={item.new_price}
                               old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
