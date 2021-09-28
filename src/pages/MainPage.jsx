import React from "react";

//CSS
import "../pages/MainPage.scss"

//Components
import AboutMe from "../components/AboutMe/AboutMe";
import Education from "../components/Education/Education";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Techs from "../components/Techs/Techs";

export default function MainPage() {
  return (
    <div>
      <Home/>
      <AboutMe/>
      <Education/>
      <Techs/>
      <Projects/>
      <Footer/>
    </div>
  );
}
