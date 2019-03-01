import React from "react";
import mascot from "../assets/img/mascot.png";
import me from "../assets/img/me.jpg";

const About = () => (
  <div>
    <div className="home-component">
      <img src={mascot} alt="mascot" className="mascot-image" />
      <p className="domain">Werick.io</p>
    </div>
    <hr />
    <div className="the-content">
      <div className="intro-paragraph">
        <p>
          Werick.io is born out of a love for the web platform and Open Source
          software. The goal is to try and make it easy and quick to understand
          things that are otherwise daunting to untrained eyes.
        </p>
      </div>
      <br />
      <br />
      <div className="your-host">
        <h1 className="the-title">Your host</h1>
        <img src={me} alt="me" className="me-image" />
        <br />
        <p>
          Hey there! 👋 I'm Wachira, and I'm the person behind this website. I
          obviously love web development ❤️, but I'm also passionate about
          design, and photography 📸.
        </p>
      </div>
    </div>
  </div>
);

export default About;
