import React from 'react';
import { useState } from 'react';

function Months() {
  const [months, setMonths] = useState(['March', 'Jan', 'Feb', 'Dec']);

  return (
    <div>
      {months.map(month => <div>{month}</div>)} <br />
      {months.length === 0 && <div>Kuid pole!</div>}
      <div>Kuid kokku: {months.length}tk</div>
      <button onClick={() => setMonths([])}>Tühjenda</button>
    </div>
  )
}

export default Months