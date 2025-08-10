import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import './App.css'
import './themes.css'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import ThemeSwitcher from './components/ThemeSwitcher'

function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <div className="App">
          <Cursor />
          <ThemeSwitcher />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
      </MotionConfig>
    </Router>
  )
}

export default App
