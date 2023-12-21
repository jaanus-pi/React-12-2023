import React, { useState, useRef } from 'react'
import tootajadFailist from '../data/tootajad.json'

function HaldaTootajad() {
  const [tootajad, uuendaTootajad] = useState(tootajadFailist);
  const tootajaRef = useRef();

  const lisaTootaja = () => {
    tootajadFailist.push(tootajaRef.current.value);
    uuendaTootajad(tootajadFailist.slice());
  }

  const kustutaTootaja = (index) => {
    tootajadFailist.splice(index, 1);
    uuendaTootajad(tootajadFailist.slice());
  }

  return (
    <div>
      <label>Lisa töötaja: </label>
      <input ref={tootajaRef} type='text' />
      <button onClick={lisaTootaja}>Sisesta</button>
      {tootajad.map((tootaja, index) => 
        <div key={index}>
          <span>{tootaja}</span>
          <button onClick={kustutaTootaja}>x</button>
        </div>
      )}
    </div>
  )
}

export default HaldaTootajad