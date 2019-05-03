import React from 'react';
import {BrowserRouter} from 'react-router-dom'; 
import Header from './Components/Header/Header';
import About from './Components/About/About';
import './App.css';


function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
    </div>
  );
}

export default App;
