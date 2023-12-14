import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import Leht from './pages/Leht';
import Loader from './pages/Loader';
import Months from './pages/months';
import Animals from './pages/animals';
import Words from './pages/words';
import Books from './pages/Books';
import Numbrid from './pages/Numbrid';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState('ei');
  const [sonum, muudaSonum] = useState('');
  const kasutajanimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value.length < 8) {
      toast.error('Parooli pikkus vähemalt 8 tähemärki!');
      return;
    }

    if (paroolRef.current.value === paroolRef.current.value.toLowerCase()) {
      toast.error('Paroolis vähemalt üks suur täht!');
      return;
    }

    if (paroolRef.current.value === paroolRef.current.value.toUpperCase()) {
      toast.error('Paroolis vähemalt üks väike täht!');
      return;
    }

    if (paroolRef.current.value.includes('%') === false) {
      toast.error('Parool ei sisalda % märki!');
      return;
    }

    if (paroolRef.current.value === '%TereTere123') {
      muudaSisselogitud('jah');
      muudaSonum("Tere " + kasutajanimiRef.current.value + "!");
      toast.success("Oled sisselogitud");
      return;
    }
    
    toast.error("Vale parool!");
  }

  const logiV2lja = () => {
    muudaSisselogitud('ei');
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
      <Link to="/months">
        <button className="nupp">Kuud</button>
      </Link>
      <Link to="/animals">
        <button className="nupp">Loomad</button>
      </Link>
      <Link to="/words">
        <button className="nupp">Sõnad</button>
      </Link>
      <Link to="/books">
        <button className="nupp">Raamatud</button>
      </Link>
      <Link to="/numbrid">
        <button className="nupp">Numbrid</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="/kontakt" element={ <Kontakt/> } />
        <Route path="/meist" element={ <Meist /> } />
        <Route path="/seaded" element={ <Seaded /> } />
        <Route path="/leht" element={ <Leht /> } />
        <Route path="/loader" element={ <Loader /> } />
        <Route path="/months" element={ <Months /> } />
        <Route path="/animals" element={ <Animals /> } />
        <Route path="/words" element={ <Words /> } />
        <Route path="/books" element={ <Books /> } />
        <Route path="/numbrid" element={ <Numbrid /> } />
      </Routes>

      <ToastContainer 
        position="top-right"
        theme="dark"
      />    
    </div>
  );
}

export default App;
