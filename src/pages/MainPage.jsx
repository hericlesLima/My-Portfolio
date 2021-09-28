import React from "react";
import { AboutMe } from "../components/AboutMe/AboutMe";
import Card from "../components/Card/Card";
import Education from "../components/Education/Education";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import "../pages/MainPage.scss"

export default function MainPage() {
  return (
    <div>
      <Home/>
      <AboutMe/>
      <Education/>
      <Projects/>
      <Footer/>
    </div>
  );
}
