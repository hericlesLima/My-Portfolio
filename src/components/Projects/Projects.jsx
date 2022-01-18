import React from "react";

//CSS
import "../Projects/Projects.scss";

//Components
import Card from "../Card/Card";
import Title from "../Title/Title";

export default function Projects() {
  return (
    <div className="projects-cntnt">
      <div id="projects"></div>
      <Title classname="title" title="Projects" />
      <div className="projects-row">
        <Card
          title="AC-Defender"
          text="My first game development experience, this game was developed in two weeks at <Academia de Codigo_> using the SimpleGraffics library, that's an internal library."
          gtbLink=" "
          link=" "
          linkMsg="This project, hasn't been deployed yet."
        />
        <Card
          title="Kriol Campus"
          text="Platform for registering in programming classes and other technologies."
          gtbLink=" "
          gtbMsg="This is a private repository, you cannot access it"
          link="https://www.krioltechcampus.com/"
        />
        <Card
          title="K-Mindz"
          text="Small information and contact site."
          gtbLink=" "
          gtbMsg="This is a private repository, you cannot access it"
          link="http://kmindzdigitalagency.com/"
        />
      </div>
      <div className="projects-row">
        <Card
          title="Calculator"
          text="This project was developed through a COD3R CURSOS course with 6 modules where we developed the interface and then applied the logic behind the calculator program."
          gtbLink="https://github.com/hericlesLima/React-Calculator"
          link="https://hericles-calculator.netlify.app/"
        />
        <Card
          title="To-Do List"
          text="This project was developed through a COD3R CURSOS course where we developed the interface and then applied the logic behind the To-Do-List program."
          gtbLink="https://github.com/hericlesLima/React-To-Do-List"
          link=" "
          linkMsg="This project, hasn't been deployed yet."
        />
        <Card
          title="Notes"
          text="This project was developed through a NETNINJA course where we developed the interface and then applied the logic behind the notes program."
          gtbLink="https://github.com/hericlesLima/Notes"
          link=" "
          linkMsg="This project, hasn't been deployed yet."
        />
      </div>
      <div className="projects-row">
        <Card
          title="Design and Logos"
          text="My design projects, developed using Figma and Adobe Illustrator."
          gtbLink="https://github.com/hericlesLima/Designs-and-Logos"
          link="/gallery"
          linkMsg="No deploy to this project."
        />
      </div>
    </div>
  );
}
