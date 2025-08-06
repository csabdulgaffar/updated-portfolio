import "./Home.css";
import Typed from "typed.js";
import { useEffect } from "react";

function Home() {

  useEffect(() => {
    const options = {
      strings: ["Problem Solver", "Software Developer", "MMA Enthusiast", "Backpacker"],
      typeSpeed: 100,
      backSpeed: 60,
      cursorChar: "",
      loop: true,
    };

    const typed = new Typed(".typing", options);

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <section className="home" id="home">
      <div className="social">
        <a
          href="https://github.com/csabdulgaffar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/csabdulgaffar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="mailto:csabdulgaffar@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-gmail"></i>
        </a>
      </div>
      <div className="home-img">
        <img src="/img/image1.jpeg" alt="Profile" />
      </div>
      <div className="home-text">
        <span>Hello, I'm</span>
        <h1>Abdul Gaffar</h1>
        <div className="typed-box"><h2 className="typing"></h2></div>

        <p>
          I'm a dedicated learner with a clear focus on my goals, consistently exploring new technologies to enhance my skills.
        </p>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Home;
