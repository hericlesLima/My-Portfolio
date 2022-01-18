import React from "react";

//CSS
import "../Title/Title.scss"

export default function Title (props) {
    return(
        <div>
            <h1 className={props.classname}>{props.title}</h1>
        </div>
    )
}