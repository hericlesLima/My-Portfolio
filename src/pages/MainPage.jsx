import React from "react";
import { AboutMe } from "../components/AboutMe/AboutMe";
import Card from "../components/Card/Card";
import Education from "../components/Education/Education";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Text from "../components/Text/Text";

export default function MainPage() {
  return (
    <div>
      {/*<Card
        title="AC-Defender"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium velit nec diam pretium tempor. Vivamus viverra velit sit amet risus finibus cursus. Aenean ipsum diam, ullamcorper et justo in"
        gtbLink="https://github.com/hericlesLima"
        link="https://github.com/hericlesLima"
      />
      <Footer/>*/}
      <Home/>
    </div>
  );
}
