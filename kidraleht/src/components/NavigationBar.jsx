import { useState } from "react";
import "../css/NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [searchbar, setSearchbar] = useState(false);

  const displaySearchBar = () => {
    if (searchbar === false) {
      setSearchbar(true);
    } else {
      setSearchbar(false);
    }
  }

  return (
    <div className="nav">
      <div className="left">
        <Link to="/" className="navLink">
          <i className="homeIcon fa-solid fa-guitar"></i>
        </Link>
        <span className="pageName">KIDRALEHT</span>
      </div>
      <div className="center">
        <ul className="navList">
          <li className="navItem">
            <Link to="/" className="navLink">KODU</Link>
          </li>
          <li className="navItem">
            <Link to="contact" className="navLink">KONTAKT</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        {searchbar === true && <input type="text" autoFocus={true} />}
        <i onClick={() => displaySearchBar()} className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default NavigationBar