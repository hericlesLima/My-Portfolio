import React from "react";

//CSS
import "../Text/Text.scss";

export default function Text(props) {
  return (
    <div className="education-txt-cntnt">
      <p className="education-txt">
        <a href={props.link} className="paragraph" target="_blank">{props.paragraph}</a>, {props.text}
      </p>
    </div>
  );
}
