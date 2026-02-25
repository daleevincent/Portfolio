import React from 'react';
import educationEntries from '../assets/utils/Education.json';
import '../Styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>

      <div className="education-main-layout">
        {educationEntries.map((entry) => (
          <div className="education-card" key={entry.id}>
            <img src={entry.image} alt={entry.school} className="education-card-image" />

            <div className="education-card-overlay">
              <h3>{entry.school}</h3>
              <p className="school">{entry.degree} ({entry.years})</p>
              <p className="details">{entry.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;