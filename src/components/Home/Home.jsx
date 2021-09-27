import React from "react";
import "../Home/Home.scss";
import FrontPhoto from "../../assets/FrontPhoto.png";

export default function Home() {
  return (
    <div className="home">
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About me</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contacts</a>
        </li>
      </ul>
      <div className="home-cntnt">
        <div className="home-txt">
          <h3>Junior front-end</h3>
          <h1>Developer</h1>
          <a href="ressources/cvitae.pdf" download="CurriculumVitae.pdf">
            <i class="fas fa-download"></i>
            Curriculum Vitae
          </a>
          <a href="">Github</a>
        </div>
        <div className="home-img">
            <img src={FrontPhoto} alt="photo" />
        </div>
      </div>
    </div>
  );
}
