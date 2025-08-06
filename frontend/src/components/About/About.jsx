import "./About.css";

function About() {
    return (
        <section className="about" id="about">
            <div className="heading block">
                <h2>About Me</h2>
                <span>Introduction</span>
            </div>
            <div className="about-container block">
                <div className="about-img">
                    <img src="/img/121.jpg" alt="About" />
                </div>
                <div className="about-text">
                    <p>
                        Hi there, <br />
                        I'm Abdul Gaffar, a passionate technophile with a B.Tech in Information Technology and Mathematics. <br />
                        I'm a fast learner driven by curiosity and focused on continuous growth. I love exploring new technologies and sharpening my skills to stay ahead in the ever-evolving tech world.

                    </p>
                    <div className="information">
                        <div className="info-box">
                            <i className="bx bxs-user"></i>
                            <span>Abdul Gaffar</span>
                        </div>
                        <div className="info-box">
                            <i className="bx bxs-phone"></i>
                            <span>+91 9718220173</span>
                        </div>
                        <div className="info-box">
                            <i className="bx bxs-envelope"></i>
                            <span>csabdulgaffar@gmail.com</span>
                        </div>
                    </div>
                    <a href="https://drive.google.com/file/d/1ynOyhCmfZisCEx26XTiV1yz1G0kzMxKA/view?usp=sharing" target="_blank" className="btn cv-btn">Download CV</a>
                </div>
            </div>
        </section>
    );
}

export default About;
