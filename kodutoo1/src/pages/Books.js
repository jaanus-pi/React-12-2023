import React from 'react'
import { useState } from 'react'

function Books() {
  const [raamatud, muudaRaamatud] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Kevade", "The Lord of The Rings", "AA", "BBB", "CCCC"]);
  
  const sorteeriAZ = () => {
    raamatud.sort((a, b) => a.localeCompare(b));
    muudaRaamatud(raamatud.slice());
  }

  const sorteeriZA = () => {
    raamatud.sort((a, b) => b.localeCompare(a));
    muudaRaamatud(raamatud.slice());
  }

  const sorteeriSonaPikkus = () => {
    raamatud.sort((a, b) => b.length - a.length);
    muudaRaamatud(raamatud.slice());
  }

  const sorteeriTeineTaht = () => {
    raamatud.sort((a, b) => a[1].localeCompare(b[1]));
    muudaRaamatud(raamatud.slice());
  }

  const sorteeriSonadeArv = () => {
    raamatud.sort((a, b) => b.split(/\s+/).length - a.split(/\s+/).length); // Split by whitespace and count words
    muudaRaamatud(raamatud.slice());
  }

  const sorteeriEelviimane = () => {
    raamatud.sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 2]));
    muudaRaamatud(raamatud.slice());
  }

  const filtreeriThe = () => {
    const vastus = raamatud.filter(raamat => raamat.startsWith("The"));
    muudaRaamatud(vastus);
  }

  const filtreeriKeskelAnd = () => {
    const vastus = raamatud.filter(raamat => raamat.includes(" and "));
    muudaRaamatud(vastus);
  }

  const filtreeriRohkemKui10 = () => {
    const vastus = raamatud.filter(raamat => raamat.length > 10);
    muudaRaamatud(vastus);
  }

  const filtreeriVahemKui7 = () => {
    const vastus = raamatud.filter(raamat => raamat.length < 7);
    muudaRaamatud(vastus);
  }

  const filtreeriKolmJaRohkemSona = () => {
    const vastus = raamatud.filter(raamat => raamat.split(/\s+/).length >= 3)
    muudaRaamatud(vastus);
  }
  
  const filtreeriEelviimaneOnE = () => {
    const vastus = raamatud.filter(raamat => raamat[raamat.length - 2] === "c")
    muudaRaamatud(vastus);
  }

  return (
    <div>
      {raamatud.map(raamat => <div>{raamat}</div>)} <br />
      <div>
        Sorteeri:
        <button onClick={sorteeriAZ}>A-Z</button>
        <button onClick={sorteeriZA}>Z-A</button>
        <button onClick={sorteeriSonaPikkus}>Sõnapikkus</button>
        <button onClick={sorteeriTeineTaht}>2. täht</button>
        <button onClick={sorteeriSonadeArv}>Sõnade arv</button>
        <button onClick={sorteeriEelviimane}>Eelviimane täht</button>
      </div>
      <div>
        Filtreeri:
        <button onClick={filtreeriThe}>The</button>
        <button onClick={filtreeriKeskelAnd}>and</button>
        <button onClick={filtreeriRohkemKui10}>Rohkem kui 10</button>
        <button onClick={filtreeriVahemKui7}>Vähem kui 7</button>
        <button onClick={filtreeriKolmJaRohkemSona}>Kolm ja rohkem sõna</button>
        <button onClick={filtreeriEelviimaneOnE}>Eelviimane on "C"</button>
      </div>
      <div>
        <button onClick={() => muudaRaamatud(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Kevade", "The Lord of The Rings", "AA", "BBB", "CCCC"])}>Originaal</button>
      </div>

    </div>
  )
}

export default Books