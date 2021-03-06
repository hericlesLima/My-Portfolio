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
import RubberBand from "react-reveal/RubberBand";
import Tada from "react-reveal/Tada";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import Hamburguer from "../Hamburguer/Hamburguer";

//Ressources
import Curriculum from "../../ressources/CurriculumVitae.pdf";

//Images
import FrontPhoto from "../../assets/FrontPhoto.png";
import Divider from "../../assets/divider.svg";
import Scroll from "../../assets/mouseScrool.png";
import ScrollDown from "../ScroolDown/ScrollDown";
import Title from "../Title/Title";

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
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const notifyDownload = () =>
    toast.success("Successful download", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="home">
      <div className="menu">
        <Hamburguer />
      </div>
      <div id="home"></div>
      <div className="home-cntnt">
        <div className="home-txt">
          <div className="typewriter-effect">
            <Zoom top big cascade>
              <h1 className="name">Héricles Lima</h1>
              <h1 className="ocupation">Junior Front-End Developer</h1>
            </Zoom>
          </div>
          <div className="home-btns">
            <a
              href={Curriculum}
              download="CurriculumVitae.pdf"
              className="transition"
              onClick={notifyDownload}
            >
              Curriculum Vitae
            </a>
            <ToastContainer />

            {/* <div className="cv-modal">
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div>File downloaded sucessfull.</div>
                <button onClick={closeModal}>Close</button>
              </Modal>
              
            </div> */}

            <a
              href="https://github.com/hericlesLima"
              target="_blank"
              className="transition"
            >
              Github
            </a>
          </div>
        </div>
        {/* <div className="home-img">
          <div>
            <img src={FrontPhoto} alt="photo" />
          </div>
        </div> */}
      </div>
      <div className="scroll-down">
        <ScrollDown />
      </div>
    </div>
  );
}
