import React, { useState } from 'react'

function Kujundus() {
  const [valitud, uuendaValitud] = useState('family');
  
  return (
    <div>
      <span 
        className={valitud === 'family' ? 'pakett-aktiive' :'pakett'}
        onClick={() => uuendaValitud('family')}>
          Family
      </span>
      <span
        className={valitud === 'standard' ? 'pakett-aktiive' :'pakett'}
        onClick={() => uuendaValitud('standard')}>
          Standard
      </span>
      <span
        className={valitud === 'mini' ? 'pakett-aktiive' :'pakett'}
        onClick={() => uuendaValitud('mini')}>
          Mini
      </span>
    </div>
  )
}

export default Kujundus