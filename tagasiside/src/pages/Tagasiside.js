import React, { useState, useRef } from 'react';

function Tagasiside() {
  const [tagasisided, muudaTagasisidet] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
  const tagasisideRef = useRef();

  const eemaldaTagasiside = (index) => {
    tagasisided.splice(index, 1);
    muudaTagasisidet(tagasisided.slice());
  }

  const lisaTagasiside = () => {
    tagasisided.push(tagasisideRef.current.value);
    muudaTagasisidet(tagasisided.slice());
  }

  return (
    <div>
      <div>
        Tagasisided:
        {tagasisided.map((tagasiside, index) => <div>{tagasiside} <button onClick={() => eemaldaTagasiside(index)}>X</button></div>)} <br />
      </div>
      <div>
        <label>Lisa uus tagasiside:</label>
        <input ref={tagasisideRef} type="text"/>
        <button onClick={lisaTagasiside}>Sisesta</button>
      </div>
    </div>
  )
}

export default Tagasiside