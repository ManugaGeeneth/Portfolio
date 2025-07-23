import React, { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaJava, FaPython, FaPhp, FaAws, FaFigma, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiExpress, SiSpringboot, SiMongodb, SiMysql, SiPostgresql, SiWebpack, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);
  const [animatedBars, setAnimatedBars] = useState(false);

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 85, color: "#61dafb", icon: <FaReact /> },
        { name: "Tailwind CSS", level: 80, color: "#38bdf8", icon: <SiTailwindcss /> },
        { name: "JavaScript", level: 90, color: "#f7df1e", icon: <SiJavascript /> },
        { name: "Next.js", level: 75, color: "#000000", icon: <SiNextdotjs /> },
        { name: "TypeScript", level: 80, color: "#3178c6", icon: <SiTypescript /> },
        { name: "HTML/CSS", level: 95, color: "#e34f26", icon: <><SiHtml5 /><SiCss3 /></> }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Express.js", level: 85, color: "#000000", icon: <SiExpress /> },
        { name: "Node.js", level: 88, color: "#68a063", icon: <FaNodeJs /> },
        { name: "Spring Boot", level: 75, color: "#6db33f", icon: <SiSpringboot /> },
        { name: "PHP", level: 70, color: "#777bb4", icon: <FaPhp /> },
        { name: "Python", level: 82, color: "#3776ab", icon: <FaPython /> },
        { name: "Java", level: 72, color: "#ed8b00", icon: <FaJava /> }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 80, color: "#47a248", icon: <SiMongodb /> },
        { name: "MySQL", level: 75, color: "#4479a1", icon: <SiMysql /> },
        { name: "PostgreSQL", level: 78, color: "#336791", icon: <SiPostgresql /> },
        { name: "AWS", level: 68, color: "#ff9900", icon: <FaAws /> }
      ]
    },
    {
      title: "Design & Creative",
      skills: [
        { name: "Figma", level: 85, color: "#f24e1e", icon: <FaFigma /> },
        { name: "Photoshop", level: 75, color: "#31a8ff", icon: <SiAdobephotoshop /> },
        { name: "Illustrator", level: 70, color: "#ff9a00", icon: <SiAdobeillustrator /> },
        { name: "InDesign", level: 65, color: "#fd3f92", icon: <SiAdobeindesign /> },
        { name: "Git/GitHub", level: 90, color: "#f05032", icon: <FaGithub /> },
        { name: "Webpack", level: 70, color: "#8dd6f9", icon: <SiWebpack /> }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (!animatedBars) {
              setAnimatedBars(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [animatedBars]);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{
                        '--skill-width': animatedBars ? `${skill.level}%` : '0%',
                        '--skill-color': skill.color,
                        '--delay': `${(categoryIndex * 6 + skillIndex) * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            {categoryIndex < skillCategories.length - 1 && <hr className="category-divider" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;