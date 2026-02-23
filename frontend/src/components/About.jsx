import React from 'react';
import aboutData from '../assets/utils/About.json';
import profileImage from '../assets/images/Me.png';
import '../Styles/About.css'; 

const About = () => {
    return (
        <section id="about">
            <div className="about-container">

                <div className="about-left">
                    <img src={profileImage} alt="Profile" className="about-image" />
                </div>

                <div className="about-right">
                    <h2>{aboutData.title}</h2>
                    {aboutData.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;