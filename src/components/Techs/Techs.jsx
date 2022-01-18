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
import JavaIcon from "../../assets/icons/java.png";
import WordpressIcon from "../../assets/icons/wordpress.png";
import GitIcon from "../../assets/icons/git.png";
import AgileIcon from "../../assets/icons/agile.png";
import HtmlIcon from "../../assets/icons/html.png";
import CssIcon from "../../assets/icons/css.png";
import Title from "../Title/Title";
import Icon from "../Icon/Icon";

//Libraries
import Fade from "react-reveal/Fade";

export default function Techs() {
  return (
    <div className="techs-cntnt">
      <Title classname="title" title="Tools &amp; Technologies" />
      <div className="icons">
        <div className="icons-row-1">
          <Fade>
            <Icon
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              src={HtmlIcon}
              alt="html"
            />
            <Icon
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              src={JavascriptIcon}
              alt="javascript"
            />
            <Icon
              href="https://nodejs.org/en/about/"
              src={NodeIcon}
              alt="node"
            />
            <Icon
              href="https://docs.oracle.com/en/java/"
              src={JavaIcon}
              alt="java"
            />
            <Icon
              href="https://www.figma.com/about/"
              src={FigmaIcon}
              alt="figma"
            />
            <Icon href="https://git-scm.com/" src={GitIcon} alt="git" />
          </Fade>
        </div>
        <div className="icons-row-2">
          <Fade>
            <Icon
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              src={CssIcon}
              alt="css"
            />
            <Icon href="https://reactjs.org/" src={ReactIcon} alt="react" />
            <Icon
              href="https://docs.npmjs.com/about-npm"
              src={NpmIcon}
              alt="npm"
            />
            <Icon
              href="https://wordpress.org/"
              src={WordpressIcon}
              alt="wordpress"
            />
            <Icon
              href="https://mui.com/pt/"
              src={MaterialIcon}
              alt="material-ui"
            />
            <Icon
              href="https://agilemanifesto.org/"
              src={AgileIcon}
              alt="agile"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
