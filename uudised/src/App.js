import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import KasutajaPostitus from './pages/KasutajaPostitus';

function App() {
  return (
    <div className="App">
      <Link to='/'>
        <button className='nav-nupp'>Avalehele</button>
      </Link>
      <Link to='/uudised'>
        <button className='nav-nupp'>Uudised</button>
      </Link>
      <Link to='/kontakt'>
        <button className='nav-nupp'>Võta meiega ühendust</button>
      </Link>
      <Link to='/meist'>
        <button className='nav-nupp'>Info meist</button>
      </Link>

      <Routes>
        <Route path='' element={ <Avaleht /> } />
        <Route path='uudised' element={ <Uudised /> } />
        <Route path='kontakt' element={ <Kontakt /> } />
        <Route path='meist' element={ <Meist /> } />
        <Route path='kasutaja-postitus/:userId' element={ <KasutajaPostitus /> } />
      </Routes>
    </div>
  );
}

export default App;
