import React from 'react'
import { useState } from 'react'

function Numbrid() {
  const [numbrid, muudaNumbrid] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135, 777, 10]);

  const sorteeriKasvav = () => {
    numbrid.sort((a, b) => a - b);
    muudaNumbrid(numbrid.slice());
  }

  const sorteeriKahanev = () => {
    numbrid.sort((a, b) => b - a);
    muudaNumbrid(numbrid.slice());
  }

  const sorteeriTahestik = () => {
    numbrid.sort(); // .sort((a, b) => a.toString().localeCompare(b.toString()))
    muudaNumbrid(numbrid.slice());
  }

  const sorteeriTahestikVastupidi = () => {
    numbrid.sort((a, b) => b.toString().localeCompare(a.toString())) // numbrid.sort().reverse();
    muudaNumbrid(numbrid.slice());
  }

  const filtreeriSuuremKui8 = () => {
    const vastus = numbrid.filter(number => number > 8);
    muudaNumbrid(vastus);
  }

  const filtreeriVaiksemKui10 = () => {
    const vastus = numbrid.filter(number => number < 10);
    muudaNumbrid(vastus);
  }

  const filtreeriPaaris = () => {
    const vastus = numbrid.filter(number => number % 2 === 0);
    muudaNumbrid(vastus);
  }

  const filtreeriPaaritu = () => {
    const vastus = numbrid.filter(number => number % 2 !== 0);
    muudaNumbrid(vastus);
  }

  const filtreeriNumberAlgab1 = () => {
    const vastus = numbrid.filter(number => number.toString()[0] === "1"); // .toString().startsWith("1")
    muudaNumbrid(vastus);
  }

  const filtreeriNumberSisaldab3 = () => {
    const vastus = numbrid.filter(number => number.toString().includes("3") === true);
    muudaNumbrid(vastus);
  }


  return (
    <div>
      <div></div>{numbrid.map(number => <div>{number}</div>)}
      <div>
        Sorteeri:
        <button onClick={sorteeriKasvav}>Kasvav</button>
        <button onClick={sorteeriKahanev}>Kahanev</button>
        <button onClick={sorteeriTahestik}>Tahestik</button>
        <button onClick={sorteeriTahestikVastupidi}>Tahestik vastupidi</button>
      </div>
      <div>
        Filtreeri:
        <button onClick={filtreeriSuuremKui8}>Suurem kui 8</button>
        <button onClick={filtreeriVaiksemKui10}>Vaiksem kui 10</button>
        <button onClick={filtreeriPaaris}>Paaris</button>
        <button onClick={filtreeriPaaritu}>Paaritu</button>
        <button onClick={filtreeriNumberAlgab1}>Algab 1</button>
        <button onClick={filtreeriNumberSisaldab3}>Sisaldab 3</button>
      </div>
      <div>
        <button onClick={() => muudaNumbrid([4, 23, 7, 39, 19, 0, 9, 14, 135, 777, 10])}>Originaal</button>
      </div>
    </div>
  )
}

export default Numbrid