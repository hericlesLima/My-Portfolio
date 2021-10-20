import React from "react";

//CSS
import "../pages/MainPage.scss";

//Components
import AboutMe from "../components/AboutMe/AboutMe";
import Education from "../components/Education/Education";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Techs from "../components/Techs/Techs";
import Hamburguer from "../components/Hamburguer/Hamburguer";

//Libraries


export default function MainPage() {
  return (
    <div>
      <Hamburguer />
      <Home />
      <AboutMe />
      <Education />
      <Techs />
      <Projects />
      <Footer />
    </div>
  );
}
