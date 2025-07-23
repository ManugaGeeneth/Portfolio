import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Landscaping & Garden Services Management System",
      description: "A comprehensive platform for managing landscaping services with client bookings, service scheduling, and payment processing. Features admin dashboard for business owners.",
      image: "/images/greenscapepic.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "https://github.com/ManugaGeeneth/GREENSCAPE",
      live: null
    },
    {
      id: 2,
      title: "Computer Spare Parts Management System",
      description: "Inventory management solution for computer hardware stores with stock tracking, supplier management, and sales reporting capabilities.",
      image: "/images/cybermartpic.jpg",
      technologies: ["Java", "JSP", "MySQL", "Bootstrap"],
      category: "backend",
      github: "https://github.com/ManugaGeeneth/Online_Computer_Spare_Parts_Management_System",
      live: null
    },
    {
      id: 3,
      title: "Online Fashion Store",
      description: "E-commerce platform for fashion products with shopping cart, user accounts, and product categorization features.",
      image: "/images/onlinefashionpic.jpg",
      technologies: ["HTML", "JavaScript", "Bootstrap", "PHP"],
      category: "frontend",
      github: "https://github.com/ManugaGeeneth/Online_Fashion_Store-",
      live: null
    },
    {
      id: 4,
      title: "Music Player App",
      description: "Android music player application with playlist management, audio visualization, and background playback functionality.",
      image: "/images/musicplayerpic.png",
      technologies: ["Kotlin", "Android Studio"],
      category: "mobile",
      github: "https://github.com/ManugaGeeneth/Music-Player-App",
      live: null
    },
    {
      id: 5,
      title: "Personal Finance Tracker App",
      description: "Mobile application for tracking personal expenses and income with visual reports, budget goals, and transaction history.",
      image: "/images/financeapppic.png",
      technologies: ["Kotlin", "Android Studio", "SQLite"],
      category: "mobile",
      github: "https://github.com/ManugaGeeneth/Personal_Finanace_Track_App",
      live: null
    },
    {
      id: 6,
      title: "EcoHUB Green Urban Living App",
      description: "Android app promoting sustainable living with features like recycling locator, eco-tips, and carbon footprint calculator.",
      image: "/images/Urban Living APP.png",
      technologies: ["Kotlin", "Android Studio", "Google Maps API"],
      category: "mobile",
      github: "https://github.com/ManugaGeeneth/EcoHUB-App",
      live: null
    }
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
          <button 
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;