import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { useState, useRef } from 'react';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import Leht from './pages/Leht';
import Loader from './pages/Loader';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState('ei');
  const [sonum, muudaSonum] = useState('');
  const kasutajanimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value === '123') {
      muudaSisselogitud('jah');
      muudaSonum(kasutajanimiRef.current.value + ', oled sisselogitud');
    } else {
      muudaSonum('Vale parool');
    }
  }

  const logiV2lja = () => {
    muudaSisselogitud('ei')
    muudaSonum('');
  }

  return (
    <div className="App">
      <div>{sonum}</div>
      { sisselogitud === 'ei' &&
        <div>
        <label>Kasutajanimi</label> <br />
        <input ref={kasutajanimiRef} type='text' /> <br />
        <label>Parool</label> <br />
        <input ref={paroolRef} type='password' /> <br />
        <button onClick={logiSisse}>Logi sisse</button> <br />
        </div> }

      { sisselogitud === 'jah' && <div><button onClick={logiV2lja}>Logi välja</button> <br /></div>}

      <Link to="/">
        <button className="nupp">Avaleht</button>
      </Link>
      <Link to="/kontakt">
        <button className="nupp">Kontakt</button>
      </Link>
      <Link to="/meist">
        <button className="nupp">Meist</button>
      </Link>
      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="/kontakt" element={ <Kontakt/> } />
        <Route path="/meist" element={ <Meist /> } />
        <Route path="/seaded" element={ <Seaded /> } />
        <Route path="/leht" element={ <Leht /> } />
        <Route path="/loader" element={ <Loader /> } />
      </Routes>    
    </div>
  );
}

export default App;
