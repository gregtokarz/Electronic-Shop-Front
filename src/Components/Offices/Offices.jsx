import React from "react";
import './Offices.css'

const Offices = () => {
  return (
    <div className='offices'>
      <div className='offices-container'>
      <h2>Nasze biura</h2>
      <address>
        <b><p>Biuro w Warszawie</p></b>
        <p>ul. Krucza 50, 00-001 Warszawa</p>
        <p>Polska</p>
        <p>Lokalizacja: Centrum</p>
      </address><br/>
      <address>
        <b><p>Oddział w Krakowie</p></b>
        <p>ul. Floriańska 30, 31-019 Kraków</p>
        <p>Polska</p>
        <p>Lokalizacja: Stare Miasto</p>
      </address>
      </div>
    </div>
  )
}

export default Offices
