import React, { useState } from 'react'

function Loader() {
  const [kasLaeb, uuendaLaadmist] = useState(true);

  return (
    <div>
      { kasLaeb === true && <div class="lds-dual-ring"></div>}
      <button onClick={() => uuendaLaadmist(false)}>Lõpeta laadimine</button>
    </div>
  )
}

export default Loader