import { Link } from "react-router-dom";
import AnchorLinks from "./AnchorLinks";

const NavBar = () => {
    return (
        <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-info">
        <Link className="navbar-brand transucent" to="/">
          <img
            className="inline-icon-2 rounded ms-2 me-2"
            src="img/icons/happy-robot-pink-brain-96.png"
            alt="Icon"
            height="60px"
          />BrainyBots<sup>tm</sup>
        </Link>
        <button
          className="navbar-toggler me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <AnchorLinks />
          <ul className="navbar-nav ms-auto me-2">
            <li className="nav-item">
              <a
                className="faded"
                href="#"
                // target="_blank"
                // rel="noreferrer"
                onClick={() => {
                  // Assuming the function to open the widget is named `bmcfw`.
                    document.getElementById("bmc-wbtn").click();
                  
                }}
              >
                <img
                  className="drop-shadow buy-coffee"
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
                  alt="Buy Me A Coffee"
                  height={50}
                  // style={{, }}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar;