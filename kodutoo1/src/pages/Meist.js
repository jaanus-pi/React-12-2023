import { useState } from 'react';

function Meist() {
  const [message, m22raMessage] = useState('Vali mõni tegevus');

  const kandideeriTooleMessage = () => {
    m22raMessage('Selleks saada meile e-mail jobs@html-css.com')
  }

  const vaataTootajaidMessage = () => {
    m22raMessage('Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal')
  }

  const votaUhendustMessage = () => {
    m22raMessage('Ühenduse võtmiseks mine lehele Kontakt')
  }

  return (
    <div>
      <div>{ message }</div>
      <button onClick={kandideeriTooleMessage}>Kandideeri tööle</button>
      <button onClick={vaataTootajaidMessage}>Vaata meie töötajaid</button>
      <button onClick={votaUhendustMessage}>Võta meiega ühendust</button>
    </div>
  )
}

export default Meist