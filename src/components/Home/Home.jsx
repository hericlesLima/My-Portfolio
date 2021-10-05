import React from "react";

//CSS
import "../Home/Home.scss";

//Libraries
import Typewriter from "typewriter-effect";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Wobble from "react-reveal/Wobble";
import RubberBand from 'react-reveal/RubberBand';
import Tada from 'react-reveal/Tada';

//Components
import FrontPhoto from "../../assets/FrontPhoto.png";

//Ressources
import Curriculum from "../../ressources/CurriculumVitae.pdf";

//Images
import Divider from "../../assets/divider.svg";
import Scroll from "../../assets/mouseScrool.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function Home() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="home">
      <div id="home"></div>
      {/*<ul>
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
      </ul>*/}
      <div className="home-cntnt">
        <div className="home-txt">
          <div className="typewriter-effect">
            <Bounce top big cascade>
              <h1 className="name">Héricles Lima</h1>
              <h1 className="ocupation">Junior Front-End Developer</h1>
            </Bounce>
          </div>
          <div>
            <a
              href={Curriculum}
              download="CurriculumVitae.pdf"
              className="transition"
              onClick={openModal}
            >
              Curriculum Vitae
            </a>

            <div className="cv-modal">
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div>File downloaded sucessfull.</div>
                <button onClick={closeModal}>Close</button>
              </Modal>
            </div>

            <a
              href="https://github.com/hericlesLima"
              target="_blank"
              className="transition"
            >
              Github
            </a>
          </div>
        </div>
        <div className="home-img">
          <img src={FrontPhoto} alt="photo" />
        </div>
      </div>
      <a href="#about-me" class="container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </a>
    </div>
  );
}
