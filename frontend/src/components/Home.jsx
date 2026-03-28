import React, { useState, useEffect } from "react";
import homeData from "../assets/utils/Home.json";
import profileImg from "../assets/images/Profile.jpeg"; // ← add this
import "../Styles/Home.css";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const titles = [
  "I build things for the web.",
  "I craft user experiences.",
  "I turn ideas into reality."
];

const Home = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(homeData.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };


  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const current = titles[titleIndex];

    if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setTitleIndex((i) => (i + 1) % titles.length);
      }, 300);
    } else {
      timeout = setTimeout(() => {
        setCharIndex((i) => {
          const delta = deleting ? -1 : 1;
          const next = i + delta;
          const max = titles[titleIndex].length;
          if (next < 0) return 0;
          if (next > max) return max;
          return next;
        });
      }, deleting ? 50 : 90);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  // derive displayed text from current title and charIndex to avoid
  // calling setState synchronously inside an effect
  const displayedText = titles[titleIndex].substring(0, charIndex);
  return (
    <section id="home" className="home-section">
      <div className="home-container">

        {/* LEFT CARD — Text Content */}
        <div className="home-card text-card">
          <p className="greeting">{homeData.greeting}</p>
          <h1>{homeData.name}</h1>
          <h2 className="typing">
            <span className="typing-text">{displayedText}</span>
            <span className="typing-cursor">|</span>
          </h2>
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

        {/* RIGHT CARD — Profile Image */}
        <div className="home-card image-card">
          <div className="image-frame">
            <img
              src={profileImg}
              alt="Dale Vincent"
              className="profile-image"
            />
            <span className="corner corner--tl" />
            <span className="corner corner--br" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;