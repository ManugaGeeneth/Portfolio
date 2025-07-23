import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const qualities = [
    {
      title: "Creative Problem Solver",
      description: "Finding innovative solutions to complex challenges"
    },
    {
      title: "Team Collaborator",
      description: "Working effectively in agile development environments"
    },
    {
      title: "Continuous Learner",
      description: "Always staying updated with latest technologies"
    },
    {
      title: "Detail Oriented",
      description: "Ensuring pixel-perfect implementations and clean code"
    }
  ];

  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = '/docs/Manuga_Jayasinghe_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Manuga_Jayasinghe_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-section section">
      <h2 className="section-title fade-in">About Me</h2>
      <div className="about-content">
        <div className="about-image-container slide-in-left">
          <img 
            src="/images/ChairSitPic.jpg" 
            alt="Profile Picture" 
            className="profile-image"
          />
          <div className="profile-decoration"></div>
        </div>
        
        <div className="about-text-container slide-in-right">
          <p className="about-text">
            I'm Manuga Jayasinghe, a passionate Full Stack Developer and Software Engineering undergraduate at SLIIT. I specialize in crafting responsive, high-performance web applications using both front-end and back-end technologies.
          </p>
          <p className="about-text">
            My main stack includes MERN, Java, Spring Boot, and modern JavaScript frameworks, with a strong interest in UI/UX design and user-focused development. I'm also enthusiastic about AI, automation, and building seamless digital experiences. Driven by continuous learning, creativity, and teamwork, I'm on a journey to grow as a skilled and innovative IT professional.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <button 
                onClick={handleDownloadCV}
                className="download-cv-button"
              >
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="qualities-section">
        <h3 className="qualities-title fade-in">What I Bring</h3>
        <div className="qualities-grid">
          {qualities.map((quality, index) => (
            <div key={index} className="quality-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h4 className="quality-title">{quality.title}</h4>
              <p className="quality-description">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;