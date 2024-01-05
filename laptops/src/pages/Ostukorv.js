import React, { useState } from 'react'

const Ostukorv = () => {
  const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("cartLaptops"))) || [];

  const kustuta = (index) => {
    ostukorv.splice(index, 1);
    uuendaOstukorv(ostukorv.slice());
    localStorage.setItem("cartLaptops", JSON.stringify(ostukorv));
  }

  return (
    <div>
      { ostukorv.map((ese, index) => 
        <div key={index}>
          <div>{ese.mark}</div>
          <div>{ese.mudel}</div>
          <div>{ese.maksumus}</div>
          <button onClick={() => kustuta(index)}>Kustuta</button>
        </div>
      )}
    </div>
  )
}

export default Ostukorv