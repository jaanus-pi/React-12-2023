import { useRef, useState } from 'react'

const LisaUudis = () => {
  const uudiseRef = useRef();
  const [sonum, uuendaSonum] = useState("Uudise nimi");

  const lisaUusUudis = () => {
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
    uudised.push(uudiseRef.current.value);
    localStorage.setItem("uudised", JSON.stringify(uudised));
  }

  const kontrolli = () => {
    uuendaSonum("Uudise nimi")

    if (uudiseRef.current.value.length > 0 && uudiseRef.current.value.at(0) === uudiseRef.current.value.at(0).toLowerCase()) {
      uuendaSonum("Nimetus peab algama suure tähega");
    }
    if (uudiseRef.current.value.includes("  ")) {
      uuendaSonum("Nimetuses ei tohi olla üle kahe tühiku järjest");
    }
  }

  return (
    <div>
      <label>{sonum}</label> <br />
      <input ref={uudiseRef} type='text' onChange={kontrolli}/> <br />
      <button onClick={lisaUusUudis}>Lisa uudis</button>
    </div>
  )
}

export default LisaUudis