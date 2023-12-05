import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Work from './Pages/Work';
import Hobbies from './Pages/Hobbies';
import Courses from './Pages/Courses';

function App() {
  return (
    <div className='App'>
      <img className='main-picture' src="https://cdn.pixabay.com/photo/2023/11/28/08/53/skyscraper-8416953_960_720.jpg" alt="Skyscraper" />
      <div className='rectangle'></div>

      <div className='navigation-pictures'>
        <Link className="main-link" to="work">
          <img src="https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_640.jpg" alt="Girl studying" />
          <p>Tööde lehele</p>
        </Link>
        <Link className="main-link" to="hobbies">
          <img src="https://cdn.pixabay.com/photo/2016/06/12/20/27/macro-1452987_960_720.jpg" alt="Mechanical wheels" />
          <p>Hobide lehele</p>
        </Link>
        <Link className="main-link" to="courses">
          <img src="https://cdn.pixabay.com/photo/2017/05/08/19/07/stormtrooper-2296199_960_720.jpg" alt="Lego stormtroopers" />
          <p>Kursuste lehele</p>
        </Link>
      </div>

      <Routes>
        <Route path='work' element={ <Work /> } />
        <Route path='hobbies' element={ <Hobbies /> } />
        <Route path='courses' element={ <Courses /> } />
      </Routes>

      <a className="facebook-button" href="https://www.facebook.com">
        <img src="facebook.png" alt="" />
        <span>Facebook</span>
      </a>
    
    </div>
  );
}

export default App;
