import React from 'react'
import { useParams } from 'react-router-dom'
import tootajadFailist from '../data/tootajad.json'

function YksTootaja() {
  const { index } = useParams();
  const tootaja = tootajadFailist[index];

  return (
    <div>
      Nimi: {tootaja}
    </div>
  )
}

export default YksTootaja