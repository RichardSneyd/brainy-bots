const AnchorLinks = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#listenUp">
                <em>ListenUp</em><sup>tm</sup> <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutBrainyBots">
                About BrainyBots<sup>tm</sup>
              </a>
             
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ourMission">
                Our Mission
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactUs" id="contactUsLink">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#privacyPolicy" id="privacyPolicyLink">
                Privacy Policy
              </a>
            </li>
          </ul>
    )
}

export default AnchorLinks;