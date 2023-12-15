import React, { useState, useRef } from 'react'
import nimeFail from '../nimed.json'

function TagasisideAndjad() {
  const [nimed, muudaNimed] = useState(nimeFail);
  const inputiLuger = useRef();

  const filtreeriTahtM = () => {
    const vastus = nimed.filter(nimi => nimi.startsWith("M"));
    muudaNimed(vastus);
  }

  const filtreeriTahtKokku6 = () => {
    const vastus = nimed.filter(nimi => nimi.length === 6);
    muudaNimed(vastus);
  }

  const filtreeriLoppebY = () => {
    const vastus = nimed.filter(nimi => nimi.endsWith("y"));
    muudaNimed(vastus);
  }

  const sorteeriZA = () => {
    nimed.sort((a, b) => b.localeCompare(a));
    muudaNimed(nimed.slice());
  }

  const eemaldaNimi = (index) => {
    nimed.splice(index, 1);
    muudaNimed(nimed.slice());
  }

  const lisaNimiLoppu = () => {
    nimed.push(inputiLuger.current.value);
    muudaNimed(nimed.slice());
  }

  return (
    <div>
      Tagasiside andjad:
      <div>Kokku: {nimed.length}</div>
      Filtreeri:
      <button onClick={filtreeriTahtM}>Algab M</button>
      <button onClick={filtreeriTahtKokku6}>Pikkus 6</button>
      <button onClick={filtreeriLoppebY}>Lõppeb y</button> <br />
      Sorteeri:
      <button onClick={sorteeriZA}>Z-A</button> <br />
      <label>Lisa lõppu uus nimi:</label>
      <input ref={inputiLuger} type="text" />
      <button onClick={lisaNimiLoppu}>Sisesta</button>

      {nimed.map((nimi, index) => 
      <div>EST-{nimi} <button onClick={() => eemaldaNimi(index)}>X</button></div>)}
    </div>
  )
}

export default TagasisideAndjad