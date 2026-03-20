import React, { useState } from "react"; 
import homeData from "../assets/utils/Home.json";
import "../Styles/Home.css";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const Home = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(homeData.contactEmail);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000); // reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
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
              onClick={() =>
                window.open("/Portfolio/files/CV-DaleVincent.pdf", "_blank")
              }
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </button>

            <button
              onClick={handleCopyEmail}
              className="cta-button secondary-button"
            >
              <span>{copied ? "Email Copied!" : "Contact me"}</span>
              <RiContactsFill size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;