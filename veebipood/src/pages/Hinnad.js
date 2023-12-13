import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, uuendaHinnad] = useState([55, 12, 55, 23, 16, 89, 10, 222, 4]);
  
  const suurus = () => {
    hinnad.sort((a, b) => a - b);
    uuendaHinnad(hinnad.slice());
  }

  const suurusTagurpidi = () => {
    hinnad.sort((a, b) => b - a);
    uuendaHinnad(hinnad.slice());
  }

  const filtreeri = () => {
    const vastus = hinnad.filter(hind => hind > 50);
    uuendaHinnad(vastus);
  }

  return (
    <div>
      <button onClick={suurus}>Suuruse järjekorda</button>
      <button onClick={suurusTagurpidi}>Tagurpidi järjekorda</button>
      <button onClick={filtreeri}>Jäta alles suurem kui 50</button>
      <br />
      {hinnad.map(hind => <button>{hind}</button>)}
    </div>
  )
}

export default Hinnad
