import React from "react";

//CSS
import "../AboutMe/AboutMe.scss";

//Components
import Title from "../Title/Title";

//Images
import FrontPhoto from "../../assets/FrontPhoto.png";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div id="about-me"></div>
      <div className="about-me-title">
        <Title title="About me"/>
      </div>
      <div className="about-me-cntnt">
        <div className="about-me-img">
          <img src={FrontPhoto} alt="photo" />
        </div>
        <div className="about-me-txt">
          I'm 22 years old, I came to Praia at the age of 19 to study Computer
          Engineering, I couldn't do it, I left school and entered the job
          market as an electrician, now that I have finished my bootcamp at the
          Academia de Código I'm looking for an opportunity to show my skills
          and knowledge in the IT market.
        </div>
      </div>
    </div>
  );
}
