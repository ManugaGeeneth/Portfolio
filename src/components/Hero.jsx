import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-gradient"></div>
      <div className="hero-mesh"></div>

      <div className="hero-content">
        {/* Image container added to left side */}
        <div className="hero-image-container">
          <img 
            src="/images/PortProfPic.jpg" 
            alt="Manuga Jayasinghe" 
            className="hero-image" 
          />
        </div>
        
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Hello, I'm</span>
            <span className="title-line">Manuga</span>
            <span className="title-line underline">Jayasinghe</span>
          </h1>
          <p className="hero-tagline">
            A passionate web developer building modern websites and apps.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="cta-button primary">Contact Me</a>
            <a href="#projects" className="cta-button primary">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;