import React from 'react';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <div className="snap-container">
        <section id="hero" className="snap-section">
          <Hero />
        </section>
        <section id="about" className="snap-section">
          <About />
        </section>
        <section id="skills" className="snap-section">
          <Skills />
        </section>
        <section id="projects" className="snap-section">
          <Projects />
        </section>
        <section id="contact" className="snap-section">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
