import React from "react";
import { GlobalStyle } from "./styles/base/globalStyles";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavigationBar />
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
