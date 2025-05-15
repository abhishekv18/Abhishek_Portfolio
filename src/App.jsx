import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
 

  return (
    <div className="App bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
     
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
     </Router>
      
    </div>
  );
}

export default App;
