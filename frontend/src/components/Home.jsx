import React, { useState } from "react";
import homeData from "../assets/utils/Home.json";
import "../Styles/Home.css";
import ModalOverlay from "./ModalOverlay.jsx";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import resumePDF from "../assets/files/CV_Montaño.pdf";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <p className="greeting">{homeData.greeting}</p>
          <h1>{homeData.name}</h1>
          <h2>{homeData.title}</h2>
          <p className="tagline">{homeData.tagline}</p>

          <div className="home-actions">
            <button
              className="cta-button primary-button"
              onClick={() => window.open(resumePDF, "_blank")}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </button>

            <button onClick={openModal} className="cta-button secondary-button">
              <span>Contact me</span>
              <RiContactsFill size={16} />
            </button>
          </div>
        </div>
      </div>
      <ModalOverlay
        isOpen={isModalOpen}
        onClose={closeModal}
        contactEmail={homeData.contactEmail}
      />
    </section>
  );
};

export default Home;
