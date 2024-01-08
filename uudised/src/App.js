import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import KasutajaPostitus from './pages/KasutajaPostitus';
import YksPostitus from './pages/YksPostitus';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import YksUudis from './pages/YksUudis';
import MuudaUudis from './pages/MuudaUudis';

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
      <Link to='/lisa-uudis'>
        <button className='nav-nupp'>Lisa uudis</button>
      </Link>
      <Link to='/halda'>
        <button className='nav-nupp'>Halda uudiseid</button>
      </Link>

      <Routes>
        <Route path='' element={ <Avaleht /> } />
        <Route path='uudised' element={ <Uudised /> } />
        <Route path='kontakt' element={ <Kontakt /> } />
        <Route path='meist' element={ <Meist /> } />
        <Route path='lisa-uudis' element={ <LisaUudis /> } />
        <Route path='halda' element={ <HaldaUudiseid /> } />
        <Route path='kasutaja-postitus/:userId' element={ <KasutajaPostitus /> } />
        <Route path='yks-postitus/:id' element={ <YksPostitus /> } />
        <Route path='yks-uudis/:index' element={ <YksUudis /> } />
        <Route path='muuda-uudis/:index' element={ <MuudaUudis /> } />
      </Routes>
    </div>
  );
}

export default App;
