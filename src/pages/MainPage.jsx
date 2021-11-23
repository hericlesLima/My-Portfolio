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

import Gallery from "../pages/Gallery";

//Libraries
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";


export default function MainPage() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
          <AboutMe />
          <Education />
          <Techs />
          <Projects />
          <Footer />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
}

<Route path="/welcome" element={<Home />} />;
