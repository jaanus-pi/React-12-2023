import { useState, useRef } from 'react'

function LisaTegelane() {
  const [message, m22raMessage] = useState('Tere');
  const nimiRef = useRef();

  const lisaTegelane = () => {
    if (nimiRef.current.value === '') {
      m22raMessage('Tühja nimega ei saa lisada');
  } else {
      m22raMessage('Tegelane lisatud');
  }
  }

  return (
    <div>
      <div>{message}</div>
      <label>Tegelase nimi</label> <br />
      <input ref={nimiRef} type='text' /> <br />
      <button onClick={lisaTegelane}>Lisa uus</button>
    </div>
  )
}

export default LisaTegelane