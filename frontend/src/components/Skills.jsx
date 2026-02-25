import React from 'react';
import '../Styles/Skills.css'; 

// ------------------ SETUP FOR SKILLS CAROUSEL ------------------
import HtmlIcon from '../assets/images/Skills/html.svg';
import JavascriptIcon from '../assets/images/Skills/javascript.svg';
import ReactIcon from '../assets/images/Skills/react.svg';
import CssIcon from '../assets/images/Skills/css.svg';
import TailwindCssIcon from '../assets/images/Skills/tailwind.svg';  
import FigmaIcon from '../assets/images/Skills/figma.svg';
import PythonIcon from '../assets/images/Skills/python.svg';
import PhpIcon from '../assets/images/Skills/php.svg';
import MySqlIcon from '../assets/images/Skills/mysql.svg';
import CPlusPlusIcon from '../assets/images/Skills/cplusplus.svg'; 
import CSharpIcon from '../assets/images/Skills/csharp.svg'; 

const SkillIconMap = {
    "HTML": HtmlIcon,
    "JavaScript": JavascriptIcon,
    "React": ReactIcon,
    "CSS": CssIcon,
    "Tailwind CSS": TailwindCssIcon,
    "Figma": FigmaIcon,
    "Python": PythonIcon,
    "PHP": PhpIcon,
    "MySql": MySqlIcon,
    "C++": CPlusPlusIcon,
    "C#": CSharpIcon,
};

const finalSkillsList = Object.keys(SkillIconMap);

const skillsForCarousel = [...finalSkillsList, ...finalSkillsList];

const Skills = () => {
    
    if (!finalSkillsList || finalSkillsList.length === 0) {
        return (
            <section id="skills" className="skills-section">
                <h2 className="section-title">My Skills</h2>
                <p>Loading skills...</p>
            </section>
        );
    }
    
    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">My Skills</h2>
                        
            <div className="skills-carousel-wrapper">
                                
                <div className="skills-carousel-track">
                    
                    {skillsForCarousel.map((skillName, index) => {
                        
                        const IconAsset = SkillIconMap[skillName];
                        
                        return (
                            <div className="skill-card" key={index}>                                
                                {IconAsset && (
                                    <img 
                                        src={IconAsset} 
                                        alt={`${skillName} Logo`} 
                                       
                                        className="skill-icon" 
                                    />
                                )}
                                <span className="skill-name">{skillName}</span>
                            </div>
                        );
                    })}
                    
                </div>
            </div>
            
            <div className="fade-overlay left-fade"></div>
            <div className="fade-overlay right-fade"></div>

        </section>
    );
};

export default Skills;