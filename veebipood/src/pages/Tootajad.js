import React, { useState, useRef } from 'react'
import tootajadFailist from '../data/tootajad.json'

function Tootajad() {
  const [tootajad, uuendaTootajad] = useState(tootajadFailist);
  const tootajaRef = useRef();

  const sorteeri = () => {
    tootajad.sort();
    uuendaTootajad(tootajad.slice());
  }

  const filtreeri = () => {
    const tulem = tootajad.filter(tootaja => tootaja.startsWith("M"));
    uuendaTootajad(tulem);
  }

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
      <button onClick={sorteeri}>Sorteeri</button>
      <button onClick={filtreeri}>Jäta alles kes algab "M" tähega</button> <br />
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

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

export default Tootajad