import { useState } from 'react';

function Kontakt() {
  const [aadress, m22raAadress] = useState('Tallinn');
  const [telefon, m22raTelefon] = useState('5512345');
  const [email, m22raEmail] = useState('bla@blaa.com');
  const [ingliseKeelne, m22raIngliseKeelne] = useState('ei');

  const muudaEng = () => {
    m22raAadress('London');
    m22raTelefon('12312');
    m22raEmail('london@lond.com');
    m22raIngliseKeelne('jah');
  }

  return (

    <div>
      <div>{ aadress }</div>
      <div>{ telefon }</div>
      <div>{ email }</div>
      <button onClick={muudaEng}>English</button>
      { ingliseKeelne === 'jah' && <div>Leht on inglise keelne</div> }
    </div>
  )
}

export default Kontakt