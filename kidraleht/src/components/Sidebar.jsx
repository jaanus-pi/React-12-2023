import "../css/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">MINUST JA KIDRALEHEST</span>
        <p>
          Olen Jaanus, väiksemat sorti kidramees ja loodetavasti ka tulevane suur veebiarendaja!
        </p>
        <p>
          Lehel olevad materjalid võiksid olla kasulikud täiesti algajale roki- ja popi-fännile, kelle valitud tööriist enda tunnete ja musikaalsuse väljendamiseks on akustiline või elektriline kitarr.
        </p>
        <p>
          Suurtemate unistuste korral või juba kidramehe staatuse omastanud inimestele soovitan YouTube'st kindlasti uurida JustinGuitar või Eric Haugen Guitar kohta.
        </p>
        <p>
          Head harjutamist! 🤘
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