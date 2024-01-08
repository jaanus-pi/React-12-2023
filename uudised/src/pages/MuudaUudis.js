import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'

const MuudaUudis = () => {
  const { index } = useParams();
  const uudisedLS = JSON.parse(localStorage.getItem("uudised")) || [];
  const leitudUudis = uudisedLS[index];
  const muudaRef = useRef();

  const muuda = () => {
    uudisedLS[index] = muudaRef.current.value;
    localStorage.setItem("uudised", JSON.stringify(uudisedLS));
  }

  return (
    <div>
      <label>Muuda uudist</label> <br />
      <input type='text' defaultValue={leitudUudis} ref={muudaRef}/> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaUudis