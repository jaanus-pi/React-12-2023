// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Link to="avaleht">
      <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

      <Link to="ostukorv">
      <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="lisa-toode">
      <button className="nupp">Lisa toode</button>
      </Link>

      <Routes>
        <Route path='avaleht' element={ <div>See on avaleht, mis on nahtav BASE_URL + /avaleht abil</div> } />
        <Route path='ostukorv' element={ <div>See on ostukorv, mis on nahtav localhost:3000/ostukorv</div> } />
        <Route path='lisa-toode' element={ <div>Siin saab lisada toodet, mis on nahtav localhost:3000/lisa-toode</div> } />
        <Route path='*' element={ <div>Not Found Leht</div> } />
      </Routes>
    
    </div>
  );
}

export default App;
