import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "C++", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Python", level: 70 }
      ],
      icon: "💻",
      color: "#667eea"
    },
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Azure", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Kubernetes", level: 65 }
      ],
      icon: "☁️",
      color: "#764ba2"
    }
  ]

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 style={{ color: category.color }}>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                    </div>
                    
                    <div className="skill-level">
                      <div className="level-bar">
                        <motion.div
                          className="level-fill"
                          style={{ backgroundColor: category.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="level-text">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
