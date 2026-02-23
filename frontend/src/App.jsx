import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Education from './components/Education';
import './App.css';
import SocialLinks from './components/SocialLinks.jsx';

function App() {
  return (
    <div className="global-background">
      <div className="App">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Project />
          <Education />
        </main>
        <footer>
          <div className="app-footer">
            <SocialLinks />
            <p>Designed and Built by Dale Vincent © 2025</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
