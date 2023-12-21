import React, { useState, useRef } from 'react'
import tootajadFailist from '../data/tootajad.json'
import { Link } from 'react-router-dom'

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

  return (
    <div>
      <button onClick={sorteeri}>Sorteeri</button>
      <button onClick={filtreeri}>Jäta alles kes algab "M" tähega</button> <br />
      {tootajad.map((tootaja, index) => 
        <div key={index}>
          <span>{tootaja}</span>
          <Link to={'/tootaja/' + index}>
            <button>Detailsemalt</button>
          </Link>
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