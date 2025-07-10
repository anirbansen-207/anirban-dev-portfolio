import React from "react";
import { Element } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />
      <Element name="home"><Home /></Element>
      <Element name="about"><About /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="education"><Education/></Element>
      <Element name="projects"><Projects /></Element>
      
      <Element name="contact"><Contact /></Element>
      <Footer />
    </>
  );
}

export default App;
