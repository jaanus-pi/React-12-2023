import React, { useState } from 'react';

function Words() {
  const [words, setWords] = useState(['spray', 'elite', 'exuberant', 'destruction', 'present']);

  return (
    <div>
      {words.map(word => <div>{word}</div>)} <br />
      {words.length === 0 && <div>Sõnu pole!</div>}
      <div>Sõnu kokku: {words.length}tk</div>
      <button onClick={() => setWords([])}>Tühjenda</button>
    </div>
  )
}

export default Words