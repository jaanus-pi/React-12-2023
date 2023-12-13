import React, { useState } from 'react'
import poedFailist from '../data/poed.json'

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist);

  const originaali = () => {
   uuendaPoed(poedFailist);
  }

  const sorteeriAZ = () => {
    poed.sort((a,b) => a.localeCompare(b));
    // poed.sort();
    uuendaPoed(poed.slice());
    // uuendaPoed([...poed]) ---teeb ka koopia, sama mis slice
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.localeCompare(a));
    // poed.sort();
    uuendaPoed(poed.slice());
  }

  const sorteeriKasv = () => {
    poed.sort((a,b) => a.length - b.length);
    uuendaPoed(poed.slice());
  }

  const sorteeriKah = () => {
    poed.sort((a,b) => b.length - a.length);
    uuendaPoed(poed.slice());
  }

  const sorteeriKolmas = () => {
    poed.sort((a,b) => a[2].localeCompare(b[2]));
    uuendaPoed(poed.slice());
  }

  const sorteeriEgaLoppev = () => {
    const vastus = poed.filter(yksPood => yksPood.endsWith("e"));
    uuendaPoed(vastus);
  }

  const sorteeri9Tahelised = () => {
    const vastus = poed.filter(yksPood => yksPood.length === 9);
    uuendaPoed(vastus);
  }

  const sorteeri7Tahelised = () => {
    const vastus = poed.filter(yksPood => yksPood.length >= 7);
    uuendaPoed(vastus);
  }

  const sorteeriKellelIs = () => {
    const vastus = poed.filter(yksPood => yksPood.includes("is"));
    uuendaPoed(vastus);
  }

  const sorteeriKolmasOnI = () => {
    const vastus = poed.filter(yksPood => yksPood[2] === "i");
    uuendaPoed(vastus);
  }

  return (
    <div>
      <div>{poed.length} tk</div>
      <button onClick={originaali}>Originaal tagasi</button>
      <br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriKasv}>Sorteeri tähemärgid kasvavalt</button>
      <button onClick={sorteeriKah}>Sorteeri tähemärgid kahanevalt</button>
      <button onClick={sorteeriKolmas}>Sorteeri A-Z kolmanda tähe järgi</button>
      <br /><br />
      <button onClick={sorteeriEgaLoppev}>Jäta alles 'e'ga lõppevad</button>
      <button onClick={sorteeri9Tahelised}>Jäta alles täpselt 9 tähelised</button>
      <button onClick={sorteeri7Tahelised}>Jäta alles vähemalt 7 tähelised</button>
      <button onClick={sorteeriKellelIs}>Jäta alles 'is' sisaldavad</button>
      <button onClick={sorteeriKolmasOnI}>Jäta alles kellel 3s täht 'i'</button>
      {poed.map(yksPood => <div>{yksPood}</div>)}
    </div>
  )
}

export default Poed