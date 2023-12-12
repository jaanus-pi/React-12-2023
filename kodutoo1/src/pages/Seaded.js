import React, { useState } from 'react'

function Seaded() {
  const [teema, muudaTeema] = useState(localStorage.getItem("veebilehe_kujundus"))

  const darkMode = () => {
    localStorage.setItem("veebilehe_kujundus", "dark_mode")
    muudaTeema("dark_mode")
  }

  const lightMode = () => {
    localStorage.setItem("veebilehe_kujundus", "light_mode")
    muudaTeema("light_mode")
  }

  const rainbowMode = () => {
    localStorage.setItem("veebilehe_kujundus", "rainbow_mode")
    muudaTeema("rainbow_mode")
  }

  return (
    <div>
      <br />
      <button onClick={darkMode}>Dark mode</button>
      <button onClick={lightMode}>Light mode</button>
      <button onClick={rainbowMode}>Rainbow mode</button>
      {teema === "dark_mode" && <div>TUME LEHT</div>}
      {teema === "light_mode" && <div>HELE LEHT</div>}
      {teema === "rainbow_mode" && <div>VÄRVILINE LEHT</div>}
    </div>
  )
}

export default Seaded