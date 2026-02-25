import React from 'react';
import socialData from '../assets/utils/SocialLinks.json';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'; 
import '../App.css'; 

const iconMap = {
    Github: <FaGithub />,
    LinkedIn: <FaLinkedinIn />,
    Instagram: <FaInstagram />,
    Facebook: <FaFacebookF />,
};

const SocialLinks = () => {
    return (
        <div className="social-links-container">
            {socialData.map((item, index) => (
                <a 
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="social-icon-link"
                >
                    {iconMap[item.name]}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;