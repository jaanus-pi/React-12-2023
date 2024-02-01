import "../css/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">MINUST JA KIDRALEHEST</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, accusantium aliquid, 
          rem nostrum, quisquam aliquam fuga
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">lugemine</li>
          <li className="sidebarListItem">harjutused</li>
          <li className="sidebarListItem">palad</li>
          <li className="sidebarListItem">näpunäited</li>
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">KONTAKT</span>
        <div className="sidebarContactIcons">
          <Link to="contact" className="sidebarImageLink">
            <i class="sidebarIcon fa-solid fa-envelope"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar