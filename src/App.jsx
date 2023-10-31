import AppDisplay from "./components/AppDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/bootstrap-custom.css";

function App() {
  return (
    <>
      <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand transucent" href="#">
          <img
            className="inline-icon-2 rounded ms-2 me-2"
            src="img/icons/happy-robot-pink-brain-96.png"
            alt="Icon"
            height="60px"
          />
          BrainyBots
        </a>
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#container">
                ListenUp<sup>tm</sup> <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="whoAreBrainyBots"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#infoModal"
              >
                Our Mission
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#theScienceModal"
              >
                About BrainyBots
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto me-2">
            <li className="nav-item">
              <a
                className="faded"
                href="https://www.buymeacoffee.com/richardsneyd"
                target="_blank"
                rel="noreferrer"
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

      <div className="container white-bg mt-5 mb-5" id="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <header className="text-center">
              <h1 className="mb-0">BrainyBots Apps</h1>
              {/* <p>Your one-stop destination for intelligent apps!</p> */}
            </header>
            <AppDisplay
              title="ListenUp"
              imgSrc="img/brainbeats-512x512.png"
              webUrl="https://listenup.brainy-bots.com/">
                <p>Level up your listening! ListenUp is a completely free listening therapy and auditory training tool. ListenUp is a free alternative to premium tools like the Tomatis Method and the Safe & Sound Protocol.</p>
                <p>
                We released it as part of our mission to democratise access to high quality sensory integration tools.
                </p>
              </AppDisplay>
            <section className="area">
              <header className="text-center">
                <h1 className="mb-0">Our Mission</h1>
                
              </header>
              <p>Yo...</p>
            </section>
          </div>
        </div>
      </div>
      {/* <!-- Footer --> */}
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <div className="row">
            {/* <!-- Call to Action --> */}
            <div className="col-md-5 mt-2">
              <h5>Copyright © BrainyBots 2023:</h5>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/brainybots"
                rel="noreferrer"
              >
                <img
                  className="drop-shadow slightly-faded"
                  src="img/icons/happy-robot-pink-brain-152.png"
                  style={{ maxHeight: "130px" }}
                />
              </a>
            </div>
            {/* <!-- Support Buttons --> */}
            <div className="col-md-3 mt-2">
              <h5>
                Everything We Build is Free
              </h5>
              <p>Can you support our mission?</p>
              {/* <!-- Patreon --> */}
              <a
                title="Support Me on Patreon"
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.patreon.com/BrainyBots"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fab fa-patreon"></i>
              </a>
              {/* <!-- Buy Me a Coffee --> */}
              <a
                title="Buy Me a Coffee"
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.buymeacoffee.com/richardsneyd"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fas fa-coffee"></i>
              </a>
            </div>
            {/* <!-- Social Media Icons --> */}
            <div className="col-md-4 mt-2">
              <h5>
                Please Share BrainyBots:
              </h5>
              {/* <!-- Facebook --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.facebook.com/sharer/sharer.php?u=https://richardsneyd.github.io/auditory-trainer/"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* <!-- Twitter --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://twitter.com/intent/tweet?url=https://richardsneyd.github.io/auditory-trainer/"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>
              {/* <!-- LinkedIn --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.linkedin.com/shareArticle?url=https://richardsneyd.github.io/auditory-trainer/"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              {/* <!-- Instagram --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
              {/* <!-- Youtube --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fab fa-youtube"></i>
              </a>
              {/* <!-- Feedback Button --> */}
              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-outline-light"
                  id="feedbackButton"
                  data-bs-toggle="modal"
                  data-bs-target="#feedbackModal"
                >
                  Have Feedback?
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
    // </div>
  );
}

export default App;
