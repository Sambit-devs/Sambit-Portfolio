import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            I am a dedicated <strong className="gradient-text">Java - Cloud Developer</strong> with 
            a strong focus on building efficient, clean, and optimized applications. 
            Currently pursuing my final year in Computer Science Engineering, I bring 
            both academic knowledge and practical experience to every project.
          </p>
          
          <div className="skills-grid">
            <div className="skill-item">
              <h4>💻 Programming</h4>
              <p>Java, C++, SQL,<br></br> DSA, OOP</p>
            </div>
            <div className="skill-item">
              <h4>☁️ Cloud Platforms</h4>
              <p>AWS, Azure</p>
            </div>
            <div className="skill-item">
              <h4>🛠️ Tools</h4>
              <p>VS Code, IntelliJ,<br></br> Git, Github, MongoDB</p>
            </div>
            <div className="skill-item">
              <h4>🌐 Web Tech</h4>
              <p>HTML, CSS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
