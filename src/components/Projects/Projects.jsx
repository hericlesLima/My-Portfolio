import React from "react";
import Card from "../Card/Card";
import "../Projects/Projects.scss";
import Title from "../Title/Title";

export default function Projects() {
  return (
    <div className="projects-cntnt">
      <Title title="Projects"/>
      <div className="projects-row-1">
        <Card
          title="AC-Defender"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh."
        />
        <Card title="Kriol Campus" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh."/>
        <Card title="K-Mindz" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh."/>
      </div>
      <div className="projects-row-2">
        <Card title="Calculator" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh."/>
        <Card title="To-Do List" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh."/>
        <Card title="Notes" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh."/>
      </div>
    </div>
  );
}
