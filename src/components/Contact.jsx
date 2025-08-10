import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: '/assets/Email-Light.png',
      url: 'mailto:devs.sambit@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: '/assets/LinkedIn-Light.png',
      url: 'https://www.linkedin.com/in/sambit-kumar-panda-033260258/'
    },
    {
      name: 'GitHub',
      icon: '/assets/GitHub-Light.png',
      url: 'https://github.com/Sambit-devs'
    }
  ]

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.p 
          className="contact-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to bring your next project to life? Let's collaborate and create something amazing together!
        </motion.p>

        <div className="contact-content">
          <motion.form 
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="form-input"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </motion.form>

          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="contact-details">
              <div className="contact-item">
                <h4>📍 Location</h4>
                <p>Jaipur, Rajasthan, India</p>
              </div>
              <div className="contact-item">
                <h4>💼 Work</h4>
                <p>Available for internships and full-time positions</p>
              </div>
              <div className="contact-item">
                <h4>⚡ Response</h4>
                <p>Usually within 24 hours</p>
              </div>
            </div>

            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src={link.icon} alt={link.name} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
