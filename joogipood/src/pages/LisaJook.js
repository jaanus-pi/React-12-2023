import React, { useState, useRef }from 'react'
import joogidFailist from '../joogid.json'

function LisaJook() {
  const jookRef = useRef();

  const lisaUusJook = () => {
    joogidFailist.push(jookRef.current.value);
    jookRef.current.value = '';
  }

  return (
    <div>
      <label>Lisa jook: </label>
      <input ref={jookRef} type='text' />
      <button onClick={lisaUusJook}>Sisesta</button>
    </div>
  )
}

export default LisaJook