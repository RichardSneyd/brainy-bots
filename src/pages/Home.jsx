import Helmet from "react-helmet";
import NavBar from "../components/NavBar";
import AppDisplay from "../components/AppDisplay";
import Footer from "../components/Footer";
import Privacy from "./Privacy";


const Home = ()=> {
 return (
    <>
   <NavBar />
    <div className="container white-bg mt-5 mb-5" id="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <header className="text-center">
            <h1 className="mb-0">BrainyBots Apps</h1>
            {/* <p>Your one-stop destination for intelligent apps!</p> */}
          </header>
          <section className="area" id="listenUp">
            <AppDisplay 
              imgSrc="img/brainbeats-512x512.png"
              webUrl="https://listenup.brainy-bots.com/"
              androidUrl="https://play.google.com/store/apps/details?id=com.brainy_bots.listenup.twa"
            >
              <h2 className="mb-2"><em>ListenUp</em><sup>tm</sup></h2>
              <p>
                Level up your listening! <em>ListenUp</em><sup>tm</sup> is a <strong>completely free </strong> 
                 listening therapy and auditory training tool, serving as a
                high quality and universally accessible alternative to premium
                auditory integration programs such as the Tomatis Method, the
                Safe & Sound Protocol and similar.
              </p>
              <p>
                We released <em>ListenUp</em><sup>tm</sup> as part of our mission to democratise access to
                high quality sensory integration tools for families with
                neurodiverse memebers (like ours). Check it out!
              </p>
            </AppDisplay>
          </section>
          <section className="area" id="aboutBrainyBots">
            <h2 className="mb-02">About BrainyBots<sup>tm</sup></h2>
            <p>
              BrainyBots is a one-man studio on a mission to disrupt the world
              of neurodevelopmental interventions through the provision of
              entirely free, cutting-edge apps and games. Founded by Richard
              Sneyd, an educator and seasoned software engineer with a background in
              educational game development, BrainyBots aims to democratize
              access to quality intervention tools.
            </p>
            <p>
              This initiative was first inspired by the challenges faced by
              Richard&apos;s family in finding accessible, effective resources
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
          <Privacy />
        </div>
      </div>
    </div>
    <Footer />
  </>
 );
}

export default Home;