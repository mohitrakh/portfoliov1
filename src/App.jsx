import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'

function App() {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
        <Header mobileNav={mobileNav} setMobileNav={setMobileNav} />
      
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
        
    </>
  )
}

export default App
