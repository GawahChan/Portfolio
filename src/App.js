import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
// import Footer from './Components/Footer/Footer';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <About />
        <Projects />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
