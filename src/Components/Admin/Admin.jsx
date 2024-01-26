import React, {useEffect, useState} from 'react'
import './Admin.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import axios from "axios";
import Item from "../Item/Item";
import {useAuth} from "../AuthHandler/AuthHandler";
import remove_icon from "../Assets/cart_cross_icon.png";
const Admin = (props) => {
  const [data, setData] = useState([]);
  const { token } = useAuth();
  const { isAdmin } = useAuth();

  useEffect(() => {
    if (!isAdmin) {
      // Jeżeli użytkownik nie jest zalogowany, możesz przekierować go do strony logowania
      // Należy dostosować to zgodnie z Twoimi potrzebami
      console.log('Nieautoryzowany dostęp. Przekierowuję do strony logowania.');
      return;
    }
    // Wykonaj żądanie HTTP GET do serwera Spring Boot
    axios.get('http://localhost:8080/api')
      .then(response => {
        // Ustaw otrzymane dane w stanie komponentu
        setData(response.data);
        console.log("myy", response.data)
      })
      .catch(error => {
        // Obsłuż błąd żądania
        console.error('Error fetching data:', error);
      });
  }, [isAdmin]);

  const handleDelete = (productId) => {
    // Utwórz adres URL endpointu usuwania
    const deleteEndpoint = `http://localhost:8080/api/delete/${productId}`;

    // Wyślij zapytanie DELETE za pomocą funkcji fetch
    fetch(deleteEndpoint, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {

        } else {
          console.error('Nie udało się usunąć produktu.');
        }
      })
      .catch((error) => console.error('Błąd sieci:', error));
    window.location.reload();
  };

  return(
    <div className='adminitems'>
      <h1>Wszystkie produkty</h1>
      <hr/>
      {data.map((item, i) => {
        console.log(item);
        return(
          <div className='admin-format admin-format-main'>
            <img src={item.image} alt='' className='admin-product-icon'/>
            <p>{item.name}</p>
            <p>{item.new_price}</p>
            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>handleDelete(item.electronicId)} alt=''/>
          </div>
        )})}
        </div>
  )

}

export default Admin
