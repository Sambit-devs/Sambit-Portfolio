import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ThemeSwitcher.css'

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('cyberpunk')

  const themes = [
    { 
      id: 'cyberpunk', 
      name: 'Cyberpunk Neon', 
      colors: ['#00ff88', '#ff0080', '#00ffff'],
      description: 'Futuristic neon vibes'
    },
    { 
      id: 'ocean', 
      name: 'Ocean Depths', 
      colors: ['#4fc3f7', '#29b6f6', '#81c784'],
      description: 'Deep sea tranquility'
    },
    { 
      id: 'sunset', 
      name: 'Sunset Vibes', 
      colors: ['#ff6b6b', '#ffa726', '#ab47bc'],
      description: 'Warm evening glow'
    },
    { 
      id: 'forest', 
      name: 'Forest Night', 
      colors: ['#66bb6a', '#81c784', '#a5d6a7'],
      description: 'Nature\'s serenity'
    },
    { 
      id: 'cosmic', 
      name: 'Cosmic Purple', 
      colors: ['#9c27b0', '#673ab7', '#3f51b5'],
      description: 'Mystical universe'
    },
    { 
      id: 'arctic', 
      name: 'Arctic Aurora', 
      colors: ['#26c6da', '#00bcd4', '#80deea'],
      description: 'Northern lights magic'
    },
    { 
      id: 'amber', 
      name: 'Warm Amber', 
      colors: ['#ffb74d', '#ffa726', '#ff8a65'],
      description: 'Cozy golden warmth'
    }
  ]

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') || 'cyberpunk'
    setCurrentTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (themeId) => {
    // Remove all theme classes
    document.body.className = document.body.className.replace(/theme-\w+/g, '')
    
    // Add new theme class
    document.body.classList.add(`theme-${themeId}`)
    
    // Add particles effect to some themes
    if (['cosmic', 'arctic', 'cyberpunk'].includes(themeId)) {
      document.body.classList.add('theme-particles')
    }
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', themeId)
    
    // Update CSS custom properties
    const theme = themes.find(t => t.id === themeId)
    if (theme) {
      document.documentElement.style.setProperty('--theme-primary', theme.colors[0])
      document.documentElement.style.setProperty('--theme-secondary', theme.colors[1])
      document.documentElement.style.setProperty('--theme-accent', theme.colors[2])
    }
  }

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId)
    applyTheme(themeId)
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Shapes for enhanced themes */}
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Theme Switcher Button */}
      <motion.div 
        className="theme-switcher"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <motion.button
          className="theme-button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Change theme"
        >
          <motion.div 
            className="theme-icon"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            🎨
          </motion.div>
        </motion.button>

        {/* Theme Options Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="theme-panel"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="theme-panel-header">
                <h3>Choose Theme</h3>
                <span className="current-theme">{themes.find(t => t.id === currentTheme)?.name}</span>
              </div>
              
              <div className="theme-options">
                {themes.map((theme, index) => (
                  <motion.button
                    key={theme.id}
                    className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
                    onClick={() => handleThemeChange(theme.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="theme-preview">
                      {theme.colors.map((color, i) => (
                        <div 
                          key={i}
                          className="color-dot"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    
                    <div className="theme-info">
                      <span className="theme-name">{theme.name}</span>
                      <span className="theme-desc">{theme.description}</span>
                    </div>
                    
                    {currentTheme === theme.id && (
                      <motion.div 
                        className="active-indicator"
                        layoutId="activeTheme"
                      >
                        ✓
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
              
              <div className="theme-panel-footer">
                <small>Themes are automatically saved</small>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Backdrop */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="theme-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default ThemeSwitcher
