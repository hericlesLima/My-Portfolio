import React from "react";
import "../Hamburguer/Hamburguer.scss";
export default function Hamburguer() {
  return (
    <div>
      <ul className="menu1">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-me">About me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#footer">Contacts</a>
        </li>
      </ul>

      <nav className="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about-me">
              <li>About me</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#footer">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}
