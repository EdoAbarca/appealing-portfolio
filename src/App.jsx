import './App.css'
import Header from "./components/Header.jsx"
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import { ReactLenis } from 'lenis/react'

const App = () => {

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
        <Contact/>
      </main>
      <Footer/>
    </ReactLenis>
  )
}

export default App
