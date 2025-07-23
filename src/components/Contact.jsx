import React, { useEffect, useRef } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section section" ref={contactRef}>
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">I'm always open to discussing new projects or opportunities.</p>

        <div className="contact-grid">
          <div className="contact-item animate-delay-1">
            <div className="contact-icon">
              <FiMail />
            </div>
            <h3>Email</h3>
            <a href="mailto:geenethmanuga@gmail.com" className="contact-link">
              geenethmanuga@gmail.com
            </a>
          </div>

          <div className="contact-item animate-delay-2">
            <div className="contact-icon">
              <FiPhone />
            </div>
            <h3>Phone</h3>
            <a href="tel:+94757179209" className="contact-link">
              +94 75 717 9209
            </a>
          </div>

          <div className="contact-item animate-delay-3">
            <div className="contact-icon">
              <FiLinkedin />
            </div>
            <h3>LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/manuga-geeneth-4316a6228/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              linkedin.com/in/manuga-geeneth
            </a>
          </div>

          <div className="contact-item animate-delay-4">
            <div className="contact-icon">
              <FiGithub />
            </div>
            <h3>GitHub</h3>
            <a 
              href="https://github.com/ManugaGeeneth" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              github.com/ManugaGeeneth
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;