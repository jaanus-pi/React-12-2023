import React, { useState } from 'react'

function Avaleht() {
  const [kuva, uuendaKuva] = useState("");
  const valitudTegelasedLS = JSON.parse(localStorage.getItem("valitudTegelased")) || [];
  const tegelased = JSON.parse(localStorage.getItem("koikTegelased")) || [];

  const kuvaNimi = (tegelane) => {
    uuendaKuva(tegelane.eesnimi)
  }

  const valiTegelane = (klikutudTegelane) => {
    valitudTegelasedLS.push(klikutudTegelane);
    localStorage.setItem("valitudTegelased", JSON.stringify(valitudTegelasedLS));
  }
  
  return (
    <div>
      {kuva !== "" && <div>Klikkisid tegelase {kuva} peal</div>}
      {tegelased.map((tegelane, index) => 
        <div key={index}>
          <div onClick={() => kuvaNimi(tegelane)}>{tegelane.eesnimi}</div>
          <div>{tegelane.perenimi}</div>
          <div>{tegelane.elukoht}</div>
          <div>{tegelane.vanus}</div>
          <button onClick={() => valiTegelane(tegelane)}>Vali tegelane</button>
        </div>
        )}
    </div>
  )
}

export default Avaleht