import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Portfolio",
      description: "A modern and responsive portfolio website built with React, Three.js for interactive animations, immersive UI.",
      image: "/assets/Screenshot from 2025-08-23 14-17-38.png",
      tech: ["AI", "React", "Netlify", "Vite", "Three.js", "Framer Motion", "GSAP", "Lenis", "React Router DOM", "EmailJS", "ESLint", "Parallax Tilt, Intersection Observer"],
      github: "https://github.com/Sambit-devs/Projects",
      demo: "https://sambit-kumar-panda-portfolio.netlify.app/"
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description: "A simple portfolio website built with HTML & CSS for faster loading speeds.",
      image: "/assets/Screenshot from 2025-01-13 12-34-30.png",
      tech: ["HTML", "CSS", "GIT", "GITHUB", "Netlify"],
      github: "https://github.com/Sambit-devs/Projects",
      demo: "https://sambit-kumar-panda-portfolio.netlify.app/"
    },
    {
      id: 3,
      title: "Flappy Bird Game",
      description: "A desktop recreation of the classic Flappy Bird game built in Java with Swing.",
      image: "/assets/img.png",
      tech: ["Java", "GIT", "GITHUB", "JLayer", "Launch4J", "MongoDB", "Maven", "Swing", "OOP"],
      github: "https://github.com/Sambit-devs/Flappy-Bird",
      demo: "https://github.com/Sambit-devs/Flappy-Bird/releases/download/v1.0/FlappyBird-Windows.zip"
    }
  ]

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                    >
                      GitHub
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
