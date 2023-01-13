import './App.css';
import Header from './components/sidebar/Header.js';
import About from './components/about/About.js';
import Skills from './components/skills/Skills.js'
import Projects from './components/projects/Projects';
import Interests from './components/interests/Interests.js'
import Contact from './components/contact/Contact';
import React from "react";
import './assets/fonts/Lato-Regular.ttf';

function App() {
  return (
    <div className="App" >
      <Header />
      <About />
      <Skills />
      <Projects/>
      <Interests/>
      <Contact/>
    </div>
  );
}

export default App;
