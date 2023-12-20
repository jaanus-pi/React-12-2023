import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import LisaJook from './pages/LisaJook';
import HaldaJook from './pages/HaldaJook';
import Jook from './pages/Jook';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/lisa">
        <button>Lisa jook</button>
      </Link>
      <Link to="/halda">
        <button>Halda jooke</button>
      </Link>
      <Routes>
        <Route path='/' element={ <Avaleht /> } />
        <Route path='/lisa' element={ <LisaJook /> } />
        <Route path='/halda' element={ <HaldaJook /> } />
        <Route path='/jook/:number' element={ <Jook /> } />
      </Routes>
      
    </div>
  );
}

export default App;
