import React, { useState } from 'react'
import tootedFailist from '../data/tooted.json'

// Saab tooteid kustutada ja muuta.

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);


  const kustuta = (index) => {
    tootedFailist.splice(index, 1);
    uuendaTooted(tootedFailist.slice());
  }

  return (
    <div>
      {tooted.map((toode, index) =>
       <div key={index}>
        {toode}
        <button onClick={() => kustuta(index)}>Kustuta</button>
      </div>
      )}
    </div>
  )
}

export default HaldaTooted