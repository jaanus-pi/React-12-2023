import { useState, useRef } from 'react'

function LisaTegelane() {
  const [message, m22raMessage] = useState('Lisa uue tegelase andmed');
  const eesnimiRef = useRef();
  const perenimiRef = useRef();
  const elukohtRef = useRef();
  const vanusRef = useRef();

  const lisaTegelane = () => {
    if (!eesnimiRef.current.value || !perenimiRef.current.value) {
      m22raMessage('Tühja nimega ei saa lisada');
      return;
    } else if (!elukohtRef.current.value) {
      m22raMessage('Lisa elukoht');
      return;
    } else if (!vanusRef.current.value) {
      m22raMessage('Lisa vanus');
      return;
    } else {
      m22raMessage('Tegelane lisatud');
    }

    const uusTegelane = {
      eesnimi: eesnimiRef.current.value, 
      perenimi: perenimiRef.current.value, 
      elukoht: elukohtRef.current.value, 
      vanus: Number(vanusRef.current.value)
    }

    const tegelased = JSON.parse(localStorage.getItem("koikTegelased")) || [];
    tegelased.push(uusTegelane);
    localStorage.setItem("koikTegelased", JSON.stringify(tegelased));
  }

  return (
    <div>
      <div>{message}</div>
      <label>Eesnimi</label> <br />
      <input ref={eesnimiRef} type='text' /> <br />
      <label>Perekonnanimi</label> <br />
      <input ref={perenimiRef} type='text' /> <br />
      <label>Elukoht</label> <br />
      <input ref={elukohtRef} type='text' /> <br />
      <label>Vanus</label> <br />
      <input ref={vanusRef} type='number' /> <br />
      <button onClick={lisaTegelane}>Lisa uus</button>
    </div>
  )
}

export default LisaTegelane