import React, { useState } from 'react';

function Tagasiside() {
  const [tagasisided, muudaTagasisidet] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);

  return (
    <div>
      {tagasisided.map(tagasiside => <div>{tagasiside}</div>)}
    </div>
  )
}

export default Tagasiside