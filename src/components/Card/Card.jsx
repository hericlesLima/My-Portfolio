import React from "react";
import "../Card/Card.scss";

export default function Card(props) {
  return (
    <div className="card">
      <div>
        <h1 className="card-title">{props.title}</h1>
      </div>
      <div>
        <p className="card-txt">
            {props.text}
        </p>
      </div>
      <div className="card-btn">
        <a href={props.gtbLink} target="_blank">Github</a>
        <a href={props.link} target="_blank">Link</a>
      </div>
    </div>
  );
}
