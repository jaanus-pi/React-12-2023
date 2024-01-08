import React, { useState } from 'react'

function ValitudTegelased() {
  const [valitudTegelased, uuendaValitudTegelased] = useState(JSON.parse(localStorage.getItem("valitudTegelased")) || []);
  
  const eemaldaYksTegelane = (index) => {
    valitudTegelased.splice(index, 1);
    uuendaValitudTegelased(valitudTegelased.slice());
    localStorage.setItem("valitudTegelased", JSON.stringify(valitudTegelased));
  }

  const eemaldaKoik = () => {
    uuendaValitudTegelased([]);
    localStorage.setItem("valitudTegelased", JSON.stringify([]));
  }

  return (
    <div>
      {valitudTegelased.length !== 0 ?
      <div>
        <div>Kokku on valitud {valitudTegelased.length} tegelast.</div>
        <button onClick={eemaldaKoik}>Eemalda kõik</button>
      </div> :
      <div>
        <div>Ühtegi tegelast pole valitud.</div>
      </div>}
      <div>{valitudTegelased.map((tegelane, index) =>
        <div key={index}>
          <div>{tegelane.eesnimi}</div>
          <div>{tegelane.perenimi}</div>
          <div>{tegelane.elukoht}</div>
          <div>{tegelane.vanus}</div>
          <button onClick={() => eemaldaYksTegelane(index)}>X</button>
        </div>
      )}</div>
    </div>
  )
}

export default ValitudTegelased