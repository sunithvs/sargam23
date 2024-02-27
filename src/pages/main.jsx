import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Events from "../components/Events";



function Main() {
  return (
    <div className=" flex flex-col">
      <Hero />
      <About />
      <Events />
    </div>
  );
}

export default Main;
