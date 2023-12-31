import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from '../data/tooted.json'

// useState, useRef, useParams -> Reacti hookid
// Hookid on erikood, mis tuleb node modules kausta seest, moeldud lihtsustamaks mingit loogikat.
// Hookide reeglid:
// 1. Algavad alati use- eesliidesega
// 2. Alati peab importima
// 3. Ei tohi olla loodud funktsiooni sees
// 4. Ei tohi olla tingimuslikult loodud (ifi taga nt)
// 5. Peab lõppema sulgudega, see käivitatakse

// [] = useState <--- peab olema täpselt nii palju kui määratletud (useState -> 2tk)
// {} = useParams <--- võib olla palju tahes: 1tk ..... 9tk

function YksToode() {
  const { index } = useParams(); // toode/:index
  const leitud = tootedFailist[index]; 
  // ["Nobe", "Tesla", "BMW"][0] --> "Nobe"
  // ["Nobe", "Tesla", "BMW"]["samsung"] --> undefined

  if (leitud === undefined) {
    return <div>Toodet ei leitud</div>
  }

  return (
    <div>
      {leitud.aktiivne === false && <i>Toode on mitteaktiivne</i>}
      <div>Toote järjekorranumber: {index}</div>
      <div>Toote nimi: {leitud.nimi}</div>
      <div>Toote hind: {leitud.hind}</div>
      {/* <div>Toote aktiivsus: {leitud.aktiivne}</div> */}
      <img src={leitud.pilt} alt='' />
    </div>
  )
}

export default YksToode