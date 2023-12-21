import React, { useState } from 'react'
import kasutajateFail from '../kasutajad.json'

function Kasutajad() {
  const [kasutajad, uuendaKasutajad] = useState(kasutajateFail);

  const taastaKasutajadFailist = () => {
    uuendaKasutajad(kasutajateFail);
  }

  const filtreeriNimiPikemKui10 = () => {
    const vastus = kasutajad.filter(kasutaja => kasutaja.username.length >= 10);
    uuendaKasutajad(vastus);
  }

  const leiaIndexJaEemalda = (kasutaja) => {
    const index = kasutajad.indexOf(kasutaja);
    if (index !== -1) {
      // const uuedKasutajad = [...kasutajad];
        const uuedKasutajad = kasutajad.slice();
        uuedKasutajad.splice(index, 1);
        uuendaKasutajad(uuedKasutajad);
    }
    // const uusKasutajad = kasutajad.filter(k => k !== kasutaja);
    // uuendaKasutajad(uusKasutajad);

    // const index = kasutajad.indexOf(kasutaja);
    // console.log(index);
    // kasutajad.splice(index, 1);
    // uuendaKasutajad(kasutajad.slice());
  }

  const lucioEmailIndex = () => {
    const index = kasutajad.findIndex(kasutaja => kasutaja.email === 'Lucio_Hettinger@annie.ca');
    console.log(index);
  }

  const esimeneCTaht = () => {
    const leitud = kasutajad.find(kasutaja => kasutaja.name.substring(0, 1) === "C");
    console.log(leitud);
    // const index = kasutajad.findIndex(kasutaja => kasutaja.name.startsWith("C"));
    // console.log(kasutajad[index]);
  }

  const sorteeriLat = () => {
    kasutajad.sort((a, b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
    uuendaKasutajad(kasutajad.slice());
  }

  const filtreeriLngPositiivne = () => {
    const vastus = kasutajad.filter(kasutaja => kasutaja.address.geo.lng > 0);
    uuendaKasutajad(vastus);
  }

  const liidaKokkuId = () => {
    let sum = 0;
    kasutajad.forEach(kasutaja => sum += kasutaja.id);
    console.log(sum);
  }

  const lisaPhoneAlgus = () => {
    const vastus = kasutajad.map(kasutaja => ({...kasutaja, phone: '000-' + kasutaja.phone}));
    uuendaKasutajad(vastus);

  }

  const ainultEmailid = () => {
    const vastus = kasutajad.map(kasutaja => kasutaja.email);
    console.log(vastus);
  }

  const catchPhraseAsendaAjaE = () => {
    const vastus = kasutajad.map(kasutaja => (
      {...kasutaja, company: {...kasutaja.company, catchPhrase: kasutaja.company.catchPhrase.replaceAll('a', 'e')}}
      ));
    uuendaKasutajad(vastus);
  }

  return (
    <div>
      <div>Kasutajaid kokku: {kasutajad.length}</div>
      <button onClick={taastaKasutajadFailist}>Taasta</button>
      <button onClick={filtreeriNimiPikemKui10}>Kasutajanimi pikem kui 10 tähte</button>
      <button onClick={lucioEmailIndex}>Lucio index console.log</button>
      <button onClick={esimeneCTaht}>Esimene C tähega console.log</button>
      <button onClick={sorteeriLat}>Sorteeri Lat järgi</button>
      <button onClick={filtreeriLngPositiivne}>Filtreeri Lng positiivne</button>
      <button onClick={liidaKokkuId}>Liida kokku id-d console.log</button>
      <button onClick={lisaPhoneAlgus}>Lisa phone 000</button>
      <button onClick={ainultEmailid}>Näita ainult emaile console.log</button>
      <button onClick={catchPhraseAsendaAjaE}>Asenda catchphrase A ja E</button>
      {kasutajad.map((kasutaja, index) =>
        <div key={index}>
          <br />
          <div>{kasutaja.id}</div>
          <div>{kasutaja.name}</div>
          <div>{kasutaja.username}</div>
          <div>{kasutaja.email}</div>
          <div>{kasutaja.address.street}, {kasutaja.address.suite}, {kasutaja.address.city}, {kasutaja.address.zipcode}</div>
          <div>LAT {kasutaja.address.geo.lat} LNG {kasutaja.address.geo.lng}</div>
          <div>{kasutaja.phone}</div>
          <div>{kasutaja.website}</div>
          <div>{kasutaja.company.name}</div>
          <div>{kasutaja.company.catchPhrase}</div>
          <div>{kasutaja.company.bs}</div>
          <button onClick={() => leiaIndexJaEemalda(kasutaja)}>Eemalda</button>
        </div>
        )}
    </div>
  )
}

export default Kasutajad