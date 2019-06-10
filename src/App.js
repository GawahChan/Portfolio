import React from 'react';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
// import Footer from './Components/Footer/Footer';
import './App.css';


function App() {
  return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        {/* <Footer /> */}
      </div>
  );
}

export default App;
