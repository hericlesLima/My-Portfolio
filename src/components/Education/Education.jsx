import React from "react";

//CSS
import "../Education/Education.scss";

//Components
import Text from "../Text/Text";
import Title from "../Title/Title";

export default function Education() {
  return (
    <div className="education-cntnt">
      <Title classname="title" title="Education" />
      <Text
        paragraph="University of Cape Vert"
        link="https://www.unicv.edu.cv/"
        text="first year of degree in computer engineering that helped me acquire the basics of logic and programming."
      />

      <Text
        paragraph="Code_For_All"
        link="https://www.codeforall.cv/"
        text=" a programming bootcamp taught by &lt;Academia_de_Código_&gt;
            whose objective is, in 14 weeks of intensive work
            to transmit all the necessary knowledge to master
            any programming tool and be ready for insertion
            in the labor market. It was an immersed experience
            that made me closer to new technologies."
      />

      <Text
        paragraph="Youtube, documentation and E-Learning platforms"
        text="Many hours spent watching videos on Youtube and E-Learning platforms, reading the documentations, acquiring and putting into practice as much knowledge as possible"
      />
    </div>
  );
}
