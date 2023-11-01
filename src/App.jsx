import AppDisplay from "./components/AppDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/bootstrap-custom.css";
import Helmet from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>BrainyBots - Free Therapeutic Apps & Games</title>
        <meta
          name="description"
          content="BrainyBots is on a mission to democratize access to high-quality, research-based neurodevelopmental interventions. Explore our free apps and games today."
        />
        <meta
          name="keywords"
          content="BrainyBots, auditory integration, free auditory integraiton, free listening therapy, listening skills, auditory training, therapeutic apps, sensory integration, neurodiverse, free, educational games, autism, ASD, SPD, language acquisition, neuroplasticity, auditory processing, sensorimotor integration, sensory integration"
        />
        <meta name="author" content="Richard Sneyd" />
        <meta
          property="og:title"
          content="BrainyBots - Free Therapeutic Apps & Games"
        />
        <meta
          property="og:description"
          content="BrainyBots is on a mission to democratize access to high-quality, research-based neurodevelopmental interventions. Explore our free apps and games today."
        />
        <meta
          property="og:image"
          content="img/icons/happy-robot-pink-brain-152.png"
        />
        <meta property="og:url" content="https://brainy-bots.com" />
      </Helmet>
      <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-info">
        <a className="navbar-brand transucent" href="#">
          <img
            className="inline-icon-2 rounded ms-2 me-2"
            src="img/icons/happy-robot-pink-brain-96.png"
            alt="Icon"
            height="60px"
          />
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
              <a className="nav-link" href="#listenUp">
                ListenUp<sup>tm</sup> <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutBrainyBots">
                About BrainyBots
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
            <section className="area" id="listenUp">
              <AppDisplay
                title="ListenUp"
                imgSrc="img/brainbeats-512x512.png"
                webUrl="https://listenup.brainy-bots.com/"
              >
                <p>
                  Level up your listening! ListenUp is a completely free
                  listening therapy and auditory training tool, serving as a
                  high quality and universally accessible alternative to premium
                  auditory integration programs such as the Tomatis Method, the
                  Safe & Sound Protocol and similar.
                </p>
                <p>
                  We released it as part of our mission to democratise access to
                  high quality sensory integration tools for families with
                  neurodiverse memebers (like ours). Check it out!
                </p>
              </AppDisplay>
            </section>
            <section className="area" id="aboutBrainyBots">
              <h2 className="mb-02">About BrainyBots</h2>
              <p>
                BrainyBots is a one-man studio on a mission to disrupt the world
                of neurodevelopmental interventions through the provision of
                entirely free, cutting-edge apps and games. Founded by Richard
                Sneyd, an experienced software developer with a background in
                educational game development, BrainyBots aims to democratize
                access to quality intervention tools.
              </p>
              <p>
                This initiative was first inspired by the challenges faced by
                Richard&amp;s family in finding accessible, effective resources
                for their son, who has Autism Spectrum Disorder (ASD), Sensory
                Processing Disorder (SPD), Auditory Processing Disorder, and
                other developmental challenges. Due to the lack of accessible
                quality services and tools, especially in remote areas, Richard
                leveraged his expertise to develop these much-needed resources
                and decided to share them freely so that families seeking high
                quality therapeutic and educational tools would no longer find
                their financial status to be a barrier to access.
              </p>
            </section>
            <section className="area" id="ourMission">
              <h2 className="mb-2">Our Mission</h2>
              <p>
                At BrainyBots, we believe that everyone should have access to
                high quality educational and therapeutic tools, as such access
                has the potential to significantly improve their quality of
                life. Such access should be universal, irrespective of
                geographical location or financial status. Our mission is to
                continue developing intuitive and research-based apps and games
                aimed at auditory and sensorimotor integration, neurosensory
                balancing, language acquisition, literacy, numeracy and
                cognitive development. We pull insights from the latest
                scientific research on neuroplasticity, auditory processing, and
                sensorimotor integration to create tools that are not only
                effective but also versatile.
              </p>
              <p>
                From apps that help with auditory integration to games that
                foster brain balance through neurosensory exercises, BrainyBots
                offers a wide range of digital tools. These are designed not
                only for individuals with specific developmental challenges but
                also for those who wish to optimize their neurological
                functions. Whether you&apos;re a parent seeking interventions
                for your child, a therapist looking for supplementary tools, or
                an adult aiming to enhance your sensory faculties, BrainyBots
                has something for you.
              </p>
            </section>
            <section className="area" id="contactUs">
              <h2 className="mb-2">Contact Us</h2>
              <p>
                Have feedback or an enquiry? We&apos;d love to hear from you, just use the
                form below. Heads-up, It&apos;ll redirect you to your mail client when you click send. Nothing wrong, just send the message as you normally would.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const subject = encodeURIComponent(e.target.subject.value);
                  const sender = encodeURIComponent(e.target.sender.value);
                  const body = encodeURIComponent(e.target.body.value);
                  window.location.href = `mailto:richardsneyd@hotmail.com?subject=${subject}&body=${body}%0D%0A%0D%0ASender: ${sender}`;
                }}
              >
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sender">Your Email:</label>
                  <input
                    type="email"
                    id="sender"
                    name="sender"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="body">Message:</label>
                  <textarea
                    id="body"
                    name="body"
                    className="form-control"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send"
                    className="btn btn-primary"
                  />
                </div>
              </form>
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
              <a href="#aboutBrainyBots">
                <img
                  className="drop-shadow slightly-faded"
                  src="img/icons/happy-robot-pink-brain-152.png"
                  style={{ maxHeight: "130px" }}
                />
              </a>
            </div>
            {/* <!-- Support Buttons --> */}
            <div className="col-md-3 mt-2">
              <h5>We Build Free Therapeutic Apps & Games</h5>
              <p>Can you support our work?</p>
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
              <h5>Please Share BrainyBots:</h5>
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
                  onClick={() =>
                    document
                      .getElementById("contactUsLink").click()
                  }
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
