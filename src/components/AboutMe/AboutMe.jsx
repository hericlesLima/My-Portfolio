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
        <Title title="About me" />
      </div>
      <div className="about-me-cntnt">
        <div className="about-me-img">
          <img src={FrontPhoto} alt="photo" />
        </div>
        <div className="about-me-txt">
          <p>
            I'm 22 years old, I came to Praia at the age of 19 to study Computer
            Engineering, I couldn't do it, I left school and entered the job
            market as an electrician, I continued my studies in the area of
            ​​programming, I entered a bootcamp at the{" "}
            <a href="https://www.academiadecodigo.org/">
              &lt;Academia_de_Código_&gt;
            </a>
            , I had a boost in my skills and I was able to reach the level I
            think is necessary for the job market..
          </p>
        </div>
      </div>
    </div>
  );
}
