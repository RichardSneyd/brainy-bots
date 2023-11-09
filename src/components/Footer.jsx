import { Link } from "react-router-dom";

const Footer = () => {
 return (
    <>
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
              {/* <Link className="nav-link" to="./privacy">Privacy Statement</Link> */}

            </div>

          </div>
        </div>
      </div>
    </footer>
    </>
 )
}

export default Footer;