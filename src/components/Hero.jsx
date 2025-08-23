import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Content */}
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 100 }}
            >
              <motion.span
                className="name-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Sambit Kumar
              </motion.span>
              <br />
              <motion.span 
                className="gradient-text surname"
                animate={{
                  scale: [1, 1.02, 1],
                  textShadow: [
                    "0 0 0px rgba(102, 126, 234, 0)",
                    "0 0 20px rgba(102, 126, 234, 0.8)",
                    "0 0 0px rgba(102, 126, 234, 0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Panda
              </motion.span>
            </motion.h1>
            
            <motion.h2
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.span
                className="title-part"
                animate={{
                  color: ["#ffffff", "#667eea", "#764ba2", "#ffffff"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Java
              </motion.span>
              <motion.span
                className="title-separator"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {" - "}
              </motion.span>
              <motion.span
                className="title-part"
                animate={{
                  color: ["#ffffff", "#764ba2", "#667eea", "#ffffff"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.5
                }}
              >
                Cloud Developer
              </motion.span>
            </motion.h2>
            
            <motion.div
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <motion.p
                className="description-line"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
              >
                Crafting innovative solutions with modern technologies
              </motion.p>
              <motion.p
                className="description-line"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 3.5, duration: 2, ease: "easeInOut" }}
              >
                and a passion for clean, efficient code.
              </motion.p>
            </motion.div>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <motion.a
                href="/assets/Sambit Kumar Panda.pdf"
                download
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
              
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background effects */}
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  )
}

export default Hero
