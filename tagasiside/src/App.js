import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tagasiside from './pages/Tagasiside';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Tere</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasiside</button>
      </Link>
      <Routes>
        <Route path="/" element="Tere"/>
        <Route path="/tagasiside" element={ <Tagasiside /> }/>
      </Routes>
    </div>
  );
}

export default App;
