import React from 'react';
import '../Styles/Home.css';

const ModalOverlay = ({ isOpen, onClose, contactEmail }) => {
    console.log("Modal rendered, isOpen =", isOpen);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>&times;</button>
                <h3 className="modal-title">Get in Touch</h3>
                <p className="modal-description">
                    I'm currently open to new opportunities. Send me a detailed message and I'll get back to you!
                </p>

                <form 
                    action={`mailto:${contactEmail}`} 
                    method="POST" 
                    encType="text/plain"
                    className="contact-form"
                >
                    <div className="form-group">
                        <label htmlFor="modal-name">Name</label>
                        <input type="text" id="modal-name" name="name" required placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="modal-email">Email</label>
                        <input type="email" id="modal-email" name="email" required placeholder="your.email@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="modal-message">Message</label>
                        <textarea id="modal-message" name="body" rows="4" required placeholder="I'm interested in..." />
                    </div>
                    
                    <button type="submit" className="cta-button primary-button submit-button">
                        Send Email
                    </button>

                    <p className="email-link-hint">
                        (This will open your default email client:  
                        <a href={`mailto:${contactEmail}`} target="_blank" rel="noopener noreferrer">{contactEmail}</a>)
                    </p>
                </form>

            </div>
        </div>
    );
};

export default ModalOverlay;