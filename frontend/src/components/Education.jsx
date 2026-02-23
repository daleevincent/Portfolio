import React, { useState } from 'react';
import educationEntries from '../assets/utils/Education.json';
import '../Styles/Education.css';
import nuLogo from '../assets/images/NU.png'; 


const Education = () => {
  const [activeImage, setActiveImage] = useState(nuLogo);


  return (
    <section id="education" className="education-section">
      <h2>Education</h2>

      <div className="education-main-layout">
        
        
       <div className="education-list">
  {educationEntries.map((entry) => (
    <div
      className="education-entry"
      key={entry.id}
      onMouseEnter={() => setActiveImage(entry.image)}
    >
      <h3>{entry.school}</h3>

      <p className="school" style={{ color: 'var(--accent-color)' }}>
        {entry.degree} ({entry.years})
      </p>

      <p className="details">
        {entry.location}
      </p>
    </div>
  ))}
</div>



        
        <div className="education-preview">
          {activeImage ? (
            <img
              src={activeImage}
              alt="Education Logo"
              className="education-preview-image"
            />
          ) : (<p></p>
          )}
            
          
        </div>

      </div>
    </section>
  );
};

export default Education;
