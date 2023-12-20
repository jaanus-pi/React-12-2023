import React, { useState } from 'react'

function Avaleht() {
  const [kuva, uuendaKuva] = useState("");

  const tegelased = [
    {"eesnimi": "Mickey", "perenimi": "Mouse", "elukoht": "Disneyland"},
    {"eesnimi": "Minnie", "perenimi": "Mouse", "elukoht": "Disneyland"},
    {"eesnimi": "Winnie", "perenimi": "Pooh", "elukoht": "Hundred Acre Wood"},
    {"eesnimi": "Roo", "perenimi": "Kangaroo", "elukoht": "Hundred Acre Wood"},
    {"eesnimi": "Scooby", "perenimi": "Doo", "elukoht": "Crystal Cove"}
  ];

  const kuvaNimi = (tegelane) => {
    uuendaKuva(tegelane.eesnimi)
  }
  
  return (
    <div>
      {kuva !== "" && <div>Klikkisid tegelase {kuva} peal</div>}
      {tegelased.map((tegelane, index) => 
        <div key={index}>
          <div onClick={() => kuvaNimi(tegelane)}>{tegelane.eesnimi}</div>
          <div>{tegelane.perenimi}</div>
          <div>{tegelane.elukoht}</div>
        </div>
        )}
    </div>
  )
}

export default Avaleht