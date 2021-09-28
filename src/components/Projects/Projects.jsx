import React from "react";
import Card from "../Card/Card";
import "../Projects/Projects.scss";

export default function Projects() {
  return (
    <div className="projects-cntnt">
      <div className="projects-row-1">
        <Card
          title="AC-Defender"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh, at pellentesque dui. Vestibulum a metus."
        />
        <Card title="Kriol Campus" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh, at pellentesque dui. Vestibulum a metus."/>
        <Card title="KMindz" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh, at pellentesque dui. Vestibulum a metus."/>
      </div>
      <div className="projects-row-2">
        <Card title="Calculator" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh, at pellentesque dui. Vestibulum a metus."/>
        <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh, at pellentesque dui. Vestibulum a metus."/>
        <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec eleifend nibh, at pellentesque dui. Vestibulum a metus."/>
      </div>
    </div>
  );
}
