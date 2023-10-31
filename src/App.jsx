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
              <a className="nav-link" href="#">
                ListenUp<sup>tm</sup> <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#aboutBrainyBots"
              >
                About BrainyBots
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#ourMission"
              >
                Our Mission
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
            <section className="area">
            <AppDisplay
              title="ListenUp"
              imgSrc="img/brainbeats-512x512.png"
              webUrl="https://listenup.brainy-bots.com/">
                <p>Level up your listening! ListenUp is a completely free listening therapy and auditory training tool. ListenUp is a free alternative to premium tools like the Tomatis Method and the Safe & Sound Protocol.</p>
                <p>
                We released it as part of our mission to democratise access to high quality sensory integration tools.
                </p>
              </AppDisplay>
              </section>
              <section className="area" id="aboutBrainyBots">
                <h2 className="mb-0">About BrainyBots</h2>
                <p>
                Introducing BrainyBots: a one-man studio on a mission to revolutionize the world of neurodevelopmental interventions through cutting-edge apps and games. Founded by Richard Sneyd, an experienced software developer with a background in educational game development, BrainyBots aims to democratize access to quality intervention tools. 
                </p>
                <p>
                This initiative was initially inspired by the challenges faced in finding accessible, effective resources for Richard&apos;s son, who has Autism Spectrum Disorder (ASD), Sensory Processing Disorder (SPD), Auditory Processing Disorder, and other developmental challenges. Due to the lack of quality services and tools, especially in remote areas, Richard leveraged his expertise to develop these much-needed resources and decided to share them freely with the world.
                </p>

            </section>
            <section className="area" id="ourMission">
                <h2 className="mb-0">Our Mission</h2>
                <p>
                At BrainyBots, we believe that everyone should have access to specialized tools that can significantly improve their quality of life, irrespective of their geographical location or financial status. Our mission is to develop intuitive and research-based apps and games aimed at auditory and sensorimotor integration, neurosensory balancing, and cognitive development. We pull insights from the latest scientific research on neuroplasticity, auditory processing, and sensorimotor integration to create tools that are not only effective but also versatile.
                </p>
                <p>
                From apps that help with auditory integration to games that foster brain balance through neurosensory exercises, BrainyBots offers a wide range of digital tools. These are designed not only for individuals with specific developmental challenges but also for those who wish to optimize their neurological functions. Whether you&apos;re a parent seeking interventions for your child, a therapist looking for supplementary tools, or an adult aiming to enhance your sensory faculties, BrainyBots has something for you.
                </p>
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
