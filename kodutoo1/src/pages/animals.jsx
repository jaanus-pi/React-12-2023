import React from 'react';
import { useState } from 'react';

function Animals() {
  const [animals, setAnimals] = useState(['pigs', 'goats', 'sheep']);

  return (
    <div>
      {animals.map(animal => <div>{animal}</div>)} <br />
      {animals.length === 0 && <div>Loomi pole!</div>}
      <div>Loomi kokku: {animals.length} tk</div>
      <button onClick={() => setAnimals([])}>Tühjenda</button>
    </div>
  )
}

export default Animals