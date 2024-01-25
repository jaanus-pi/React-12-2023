import "../css/NavigationBar.css"

const NavigationBar = () => {
  return (
    <div className="nav">
      <div className="left">
        <i className="homeIcon fa-solid fa-guitar"></i>
        <span className="pageName">KIDRALEHT</span>
      </div>
      <div className="center">
        <ul className="navList">
          <li className="navItem">HOME</li>
          <li className="navItem">ABOUT</li>
          <li className="navItem">CONTACT</li>
          <li className="navItem">WRITE</li>
          <li className="navItem">LOGOUT</li>
        </ul>
      </div>
      <div className="right">
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default NavigationBar