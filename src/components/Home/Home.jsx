import React from "react";

//CSS
import "../Home/Home.scss";

//Libraries
import Typewriter from "typewriter-effect";

//Components
import FrontPhoto from "../../assets/FrontPhoto.png";

//Ressources
import Curriculum from "../../ressources/CurriculumVitae.pdf"

//Images
import Divider from "../../assets/divider.svg"

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
            <a href={Curriculum} download="CurriculumVitae.pdf" className="transition">
              <i class="fas fa-download"></i>
              Curriculum Vitae
            </a>
            <a href="https://github.com/hericlesLima" target="_blank" className="transition">Github</a>
          </div>
        </div>
        <div className="home-img">
          <img src={FrontPhoto} alt="photo" />
        </div>
      </div>
    </div>
  );
}
