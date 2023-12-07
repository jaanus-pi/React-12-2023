import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';

function App() {
  return (
    <div className="App">
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
      </Routes>    
    </div>
  );
}

export default App;
