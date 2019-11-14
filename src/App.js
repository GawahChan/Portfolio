import React from "react";
import { GlobalStyle } from "./styled";
import NavigationBar from "./Components/Navigation/NavigationBar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavigationBar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
