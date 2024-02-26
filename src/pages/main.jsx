import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function Main() {
  return (
    <div className="">
        <Hero />
      <About />
      <Events />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Main;
