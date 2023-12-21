import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tagasiside from './pages/Tagasiside';
import Avaleht from './pages/Avaleht';
import TagasisideAndjad from './pages/TagasisideAndjad';
import YksikTagasisideAndja from './pages/YksikTagasisideAndja';
import Tegevused from './pages/Tegevused';
import Kasutajad from './pages/Kasutajad';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasiside</button>
      </Link>
      <Link to="/tagasiside-andjad">
        <button>Tagasiside andjad</button>
      </Link>
      <Link to="/tegevused">
        <button>Tegevused</button>
      </Link>
      <Link to="/kasutajad">
        <button>Kasutajad</button>
      </Link>
      <Routes>
        <Route path="/" element={ <Avaleht /> }/>
        <Route path="/tagasiside" element={ <Tagasiside /> }/>
        <Route path="/tagasiside-andjad" element={ <TagasisideAndjad /> }/>
        <Route path="/yksik-tagasiside/:index" element={ <YksikTagasisideAndja /> }/>
        <Route path="/tegevused" element={ <Tegevused /> }/>
        <Route path="/kasutajad" element={ <Kasutajad /> }/>
      </Routes>
    </div>
  );
}

export default App;
