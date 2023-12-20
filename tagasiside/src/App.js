import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tagasiside from './pages/Tagasiside';
import Avaleht from './pages/Avaleht';
import TagasisideAndjad from './pages/TagasisideAndjad';
import YksikTagasisideAndja from './pages/YksikTagasisideAndja';

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
      <Routes>
        <Route path="/" element={ <Avaleht /> }/>
        <Route path="/tagasiside" element={ <Tagasiside /> }/>
        <Route path="/tagasiside-andjad" element={ <TagasisideAndjad /> }/>
        <Route path="/yksik-tagasiside/:index" element={ <YksikTagasisideAndja /> }/>
      </Routes>
    </div>
  );
}

export default App;
