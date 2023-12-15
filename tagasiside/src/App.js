import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tagasiside from './pages/Tagasiside';
import Avaleht from './pages/Avaleht';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasiside</button>
      </Link>
      <Routes>
        <Route path="/" element={ <Avaleht /> }/>
        <Route path="/tagasiside" element={ <Tagasiside /> }/>
      </Routes>
    </div>
  );
}

export default App;
