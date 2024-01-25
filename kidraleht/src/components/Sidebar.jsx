import "../css/Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME AND THIS PAGE</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, accusantium aliquid, 
          rem nostrum, quisquam aliquam fuga
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">lugemine</li>
          <li className="sidebarListItem">harjutused</li>
          <li className="sidebarListItem">palad</li>
          <li className="sidebarListItem">näpunäited</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CONTACT</span>
        <div className="sidebarContactIcons">
          <i class="sidebarIcon fa-solid fa-envelope"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar