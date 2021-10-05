import React from "react";

export default function Icon(props) {
  return (
    <a href={props.href} target="_blank">
      <img src={props.src} className="tech-icon" alt={props.alt} />
    </a>
  );
}
