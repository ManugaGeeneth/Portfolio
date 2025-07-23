import React from 'react';
import './Education.css';

const Education = () => {
  const educationList = [
    {
      degree: 'BSc (Hons) in Software Engineering',
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      year: '2023 - Present',
      logo: '/images/SLIITlogo.png'
    },
    {
      degree: 'Diploma in Software Engineering',
      institution: 'ATARI City Campus',
      year: '2019 - 2020',
      logo: '/images/Atari logo.jpeg'
    },
    {
      degree: 'G.C.E. Advanced Level',
      institution: 'Ananda College, Colombo 10',
      year: 'School Years',
      logo: '/images/Anandalogo.jpeg'
    }
  ];

  return (
    <section id="education" className="education-section section">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {educationList.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-logo-container">
                <img 
                  src={edu.logo} 
                  alt={`${edu.institution} logo`} 
                  className="education-logo"
                />
              </div>
              <div className="education-details">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-year">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;