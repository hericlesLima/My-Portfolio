import React from "react";
import "../Text/Text.scss";

export default function Text(props) {
  return (
    <div className="education-txt-cntnt">
      <p className="education-txt">
        <em className="paragraph">{props.paragraph}</em>, {props.text}
      </p>
    </div>
  );
}
