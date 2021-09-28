import React from "react";

//CSS
import "../Techs/Techs.scss";

//Icons
import JavascriptIcon from "../../assets/icons/javascript.png";
import FigmaIcon from "../../assets/icons/figma.png";
import NodeIcon from "../../assets/icons/node.png";
import MaterialIcon from "../../assets/icons/material_ui.png";
import NpmIcon from "../../assets/icons/npm.png";
import ReactIcon from "../../assets/icons/react.png";
import SqlIcon from "../../assets/icons/mysql.png";
import WordpressIcon from "../../assets/icons/wordpress.png";
import GitIcon from "../../assets/icons/git.png";
import AgileIcon from "../../assets/icons/agile.png";
import Title from "../Title/Title";

export default function Techs() {
  return (
    <div className="techs-cntnt">
      <Title title="Tools, Technologies &amp; Metholodologies" />
      <div className="icons-row-1">
        <img src={JavascriptIcon} className="tech-icon" alt="javascript" />
        <img src={ReactIcon} className="tech-icon" alt="react" />
        <img src={NodeIcon} className="tech-icon" alt="node" />
        <img src={SqlIcon} className="tech-icon" alt="sql" />
        <img src={NpmIcon} className="tech-icon" alt="npm" />
      </div>
      <div className="icons-row-2">
        <img src={FigmaIcon} className="tech-icon" alt="figma" />
        <img src={MaterialIcon} className="tech-icon" alt="react" />
        <img src={WordpressIcon} className="tech-icon" alt="wordpress" />
        <img src={GitIcon} className="tech-icon" alt="git" />
        <img src={AgileIcon} className="tech-icon" alt="agile" />
      </div>
    </div>
  );
}
