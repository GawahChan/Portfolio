import React from 'react';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import './App.css';


function App() {
  return (
      <div className="App">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
  );
}

export default App;
