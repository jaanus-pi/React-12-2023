import React, { useState } from 'react'
import tootajadFailist from '../data/tootajad.json'

function Kontakt() {
  const [tootajad, uuendaTootajad] = useState(tootajadFailist);

  const sorteeriAZ = () => {
    tootajad.sort((a, b) => a.localeCompare(b));
    uuendaTootajad(tootajad.slice());
  }

  const sorteeriZA = () => {
    tootajad.sort((a,b) => b.localeCompare(a));
    uuendaTootajad(tootajad.slice());
  }

  const sorteeriKasvav = () => {
    tootajad.sort((a,b) => a.length - b.length);
    uuendaTootajad(tootajad.slice());
  }

  const sorteeriKahanev = () => {
    tootajad.sort((a,b) => b.length - a.length);
    uuendaTootajad(tootajad.slice());
  }

  const filtreeriLõppE = () => {
    const vastus = tootajad.filter(tootaja => tootaja.endsWith("e"));
    uuendaTootajad(vastus);
  }

  const filtreeriSisaldabII = () => {
    const vastus = tootajad.filter(tootaja => tootaja.includes("II"));
    uuendaTootajad(vastus);
  }

  return (
    <div>
      <span>Sorteeri: </span>
      <button onClick={sorteeriAZ}>AZ</button>
      <button onClick={sorteeriZA}>ZA</button>
      <button onClick={sorteeriKasvav}>Kasvav</button>
      <button onClick={sorteeriKahanev}>Kahanev</button> <br />
      <span>Filtreeri: </span>
      <button onClick={filtreeriLõppE}>Lõppeb "e"</button>
      <button onClick={filtreeriSisaldabII}>Sisaldab "II"</button>
      {tootajad.map((tootaja, index) => <div key={index}>{tootaja}</div>)}
    </div>
  )
}

export default Kontakt