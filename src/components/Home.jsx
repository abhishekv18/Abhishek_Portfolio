import React from 'react'
import Hero from './Hero';
import About from './About';
//import LocomotiveScrollWrapper from './LocomotiveScroll';
import Projects from './Projects';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './contact';

const Home = () => {
  return (
  
   
<>
  {/* Theme Toggle */}
    

      {/* Hero Section */}
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <Resume/>
      <Contact/>
     

  </>
  )
}

export default Home
