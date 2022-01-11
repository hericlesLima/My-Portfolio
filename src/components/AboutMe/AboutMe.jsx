import React from "react";

//CSS
import "../AboutMe/AboutMe.scss";

//Components
import Title from "../Title/Title";

//Images
import FrontPhoto from "../../assets/about.svg";

export default function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <div className="about-me-title">
        <Title title="About me" />
      </div>
      <div className="about-me-cntnt">
        <div className="about-me-img">
          <img src={FrontPhoto} alt="photo" />
        </div>
        <div className="about-me-txt">
          <p>
            I'm 22 years old, I'm a dedicated developer, who enjoys what he
            does, I like to be creating and developing not only websites,
            designs etc, but also new ideas, innovative and practical solutions
            that can solve a given problem effectively ...
          </p>
        </div>
      </div>
    </div>
  );
}
