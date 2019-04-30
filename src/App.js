import React from 'react';
import logo from './logo.svg';
import './App.css';
import KodiriPic from './images/Kodiri profile pic.PNG';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={KodiriPic} alt="kodiri pic"/>
        <p>
        Welcome to Gawah's WIP portfolio!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
