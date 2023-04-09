import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Tours/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
