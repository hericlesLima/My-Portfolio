import React from "react";

//CSS
import "../Card/Card.scss";


export default function Card(props) {
  return (
    <div className="card">
      <div>
        <h1 className="card-title">{props.title}</h1>
        <p className="card-txt">
            {props.text}
        </p>
      </div>
      <div className="card-btn">
        <a href={props.gtbLink} title={props.gtbMsg} target="_blank" className="transition">Github <i className="fab fa-github"> </i></a>
        <a href={props.link} title={props.linkMsg} target="_blank" className="transition">Link <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  );
}
