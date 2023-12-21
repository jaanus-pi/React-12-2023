import React, { useState } from 'react'
import tegevusteFail from '../tegevused.json'

function Tegevused() {
  const [tegevused, uuendaTegevused] = useState(tegevusteFail);

  const koikId1Tegevused = () => {
    const vastus = tegevused.filter(element => element.userId === 1);
    uuendaTegevused(vastus);
  }

  const koikId2Tegevused = () => {
    const vastus = tegevused.filter(element => element.userId === 2);
    uuendaTegevused(vastus);
  }

  const koikId3Tegevused = () => {
    const vastus = tegevused.filter(element => element.userId === 3);
    uuendaTegevused(vastus);
  }

  const koikValmisTegevused = () => {
    const vastus = tegevused.filter(element => element.completed === true);
    uuendaTegevused(vastus);
  }

  const koikMitteValmisTegevused = () => {
    const vastus = tegevused.filter(element => element.completed === false);
    uuendaTegevused(vastus);
  }

  const tTahegaAlgavadTegevused = () => {
    const vastus = tegevused.filter(element => element.title.startsWith("t"));
    uuendaTegevused(vastus);
  }

  const tahemarkeRohkemKui20 = () => {
    const vastus = tegevused.filter(element => element.title.length > 20);
    uuendaTegevused(vastus);
  }

  const kuvaKoikTegevused = () => {
    uuendaTegevused(tegevusteFail);
  }


  return (
    <div>
      <div>Kogu tegevuste arv: {tegevused.length}</div> <br />
      <button onClick={koikId1Tegevused}>ID 1 tegevused</button>
      <button onClick={koikId2Tegevused}>ID 2 tegevused</button>
      <button onClick={koikId3Tegevused}>ID 3 tegevused</button>
      <button onClick={koikValmisTegevused}>Valmis tegevused</button>
      <button onClick={koikMitteValmisTegevused}>Mittevalmis tegevused</button>
      <button onClick={tTahegaAlgavadTegevused}>"t" tähega algavad tegevused</button>
      <button onClick={tahemarkeRohkemKui20}>Tähemärke rohkem kui 20 tegevused</button>
      <button onClick={kuvaKoikTegevused}>Kõik tegevused</button>
      {tegevused.map((element, index) => 
        <div key={index}>
          <div>{element.userId}</div>
          <div>{element.id}</div>
          <div>{element.title}</div>
          <div>{element.completed}</div>
          <br />
        </div>
        )}
    </div>
  )
}

export default Tegevused