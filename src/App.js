import './App.css';
import Header from './components/sidebar/Header.js';
import About from './components/about/About.js';
import Skills from './components/skills/Skills.js'
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
