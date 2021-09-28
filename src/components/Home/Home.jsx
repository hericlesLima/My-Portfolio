import React from "react";
import "../Home/Home.scss";
import Typewriter from "typewriter-effect";
import FrontPhoto from "../../assets/FrontPhoto.png";
import Curriculum from "../../ressources/CurriculumVitae.pdf"

export default function Home() {
  return (
    <div className="home">
      <div id="home"></div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-me">About me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#footer">Contacts</a>
        </li>
      </ul>
      <div className="home-cntnt">
        <div className="home-txt">
          <div className="typewriter-effect">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Junior Front-End <p/>")
                  .pauseFor(100)
                  .typeString("Developer")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </div>
          <div>
            <a href={Curriculum} download="CurriculumVitae.pdf">
              <i class="fas fa-download"></i>
              Curriculum Vitae
            </a>
            <a href="https://github.com/hericlesLima" target="_blank">Github</a>
          </div>
        </div>
        <div className="home-img">
          <img src={FrontPhoto} alt="photo" />
        </div>
      </div>
    </div>
  );
}
