import React from "react";

//CSS
import "../Title/Title.scss"

export default function Title (props) {
    return(
        <div>
            <h1 className="title">&lt; {props.title} / &gt;</h1>
        </div>
    )
}