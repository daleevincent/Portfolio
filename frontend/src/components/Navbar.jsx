import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";

const sections = ["home", "about", "skills", "projects", "education"];

const Navbar = () => {
  // ✅ Initialize state from localStorage (NO effect needed)
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Effect ONLY syncs external system (DOM)
  useEffect(() => {
    document.body.classList.toggle("light-mode", isLightMode);
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 120;
          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLightMode((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">
          D<span>V</span>
        </a>
      </div>

      <div className="navbar-right">
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={activeSection === sec ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button className="theme-toggle" onClick={toggleTheme}>
          {isLightMode ? "☾" : "☼"}
        </button>

        <div
          className={`navbar-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;