import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import Leht from './pages/Leht';
import Loader from './pages/Loader';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState('ei');

  return (
    <div className="App">
      { sisselogitud === 'ei' && <div><button onClick={() => muudaSisselogitud('jah')}>Logi sisse</button> <br /></div>}
      { sisselogitud === 'jah' && <div><button onClick={() => muudaSisselogitud('ei')}>Logi välja</button> <br /></div>}

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
