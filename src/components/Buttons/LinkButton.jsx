import React from "react";

export default function LinkButton(props) {
  return (
    <div>
      <a
        href={props.href}
        target={props.target}
        className="transition"
      >
        {props.content}
      </a>
    </div>
  );
}
