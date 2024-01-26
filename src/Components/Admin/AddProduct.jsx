import React, { useState } from 'react';
import './AddProduct.css'
const AddProduct = () => {
  const [formData, setFormData] = useState({
    electronicId: '',
    name: '',
    category: '',
    image: '',
    new_price: '',
    old_price: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Przygotowanie danych do przesłania
    const dataToSend = {
      electronicId: formData.electronicId,
      name: formData.name,
      category: formData.category,
      image: formData.image,
      new_price: formData.new_price,
      old_price: formData.old_price,
      description: formData.description,
    };

    // Przesłanie danych do serwera
    const response = await fetch('http://localhost:8080/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });
    // fetch('http://localhost:8080/api/add', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: dataToSend,
    // })
    window.location.reload();

  };

  return (
    <div>
      <h2>Dodaj Produkt</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Electronic ID:
          <input type="text" name="electronicId" value={formData.electronicId} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Nazwa:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Kategoria:
          <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Obraz:
          <input type="text" name="image" value={formData.image} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Nowa Cena:
          <input type="text" name="new_price" value={formData.new_price} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Stara Cena:
          <input type="text" name="old_price" value={formData.old_price} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Opis:
          <textarea name="description" value={formData.description} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit" >Dodaj Produkt</button>
      </form>
    </div>
  );
};

export default AddProduct;
