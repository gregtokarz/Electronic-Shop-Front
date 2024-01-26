import React from "react";
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='aboutus'>
      <div className='aboutus-container'>
        <h2>O nas</h2>
        <p>
          Jesteśmy firmą specjalizującą się w sprzedaży najnowszej elektroniki.
          Naszym celem jest dostarczanie klientom najwyższej jakości produktów
          w konkurencyjnych cenach.
        </p><br/>
        <p>
          W naszym asortymencie znajdziesz szeroki wybór smartfonów, laptopów,
          tabletów, akcesoriów elektronicznych i wiele więcej. Dbamy o to, aby
          nasze produkty były zgodne z najnowszymi trendami technologicznymi.
        </p><br/>
        <p>
          Zaufało nam już tysiące klientów, a nasza firma stale się rozwija,
          aby sprostać oczekiwaniom nawet najbardziej wymagających
          entuzjastów technologii.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
