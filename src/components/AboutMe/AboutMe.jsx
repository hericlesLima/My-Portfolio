import React from "react";

//CSS
import "../AboutMe/AboutMe.scss";

//Components
import Title from "../Title/Title";

//Images
import FrontPhoto from "../../assets/about.svg";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div id="about-me"></div>
      <div className="about-me-title">
        <Title title="About me" />
      </div>
      <div className="about-me-cntnt">
        <div className="about-me-img">
          <img src={FrontPhoto} alt="photo" />
        </div>
        <div className="about-me-txt">
          <p>
            I'm 22 years old, I left my home, my comfort zone at the age of 18,
            to pursue the dream of becoming a Software Developer, I started at
            university but I couldn't finish it, I left university and entered
            the job market as an electrician, I continued my studies in the area
            of ​​programming, along the way, appeared the opportunity to do a
            bootcamp at the{"  "}
            <a href="https://www.academiadecodigo.org/">
              &lt;Academia_de_Código_&gt;
            </a>
            , and this achieve one of my main goals, become a Junior Frontend
            Developer, I had a boost in my skills and I was able to reach the
            level I think is necessary for the job market.
          </p>
        </div>
      </div>
    </div>
  );
}
