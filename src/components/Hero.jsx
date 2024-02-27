import React, { useState, useEffect } from "react";
// ... other imports
import heroim from "../images/Sargamwhiteplain.png";
import bgvd from "../images/bgvd2.mp4";
import SargamText from "./SargamText";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col w-screen h-screen lg:flex lg:flex-col lg:justify-center lg:items-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-screen h-screen object-cover z-0">
        <video autoPlay loop muted className="w-screen h-screen object-cover">
          <source src={bgvd} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      <div className="flex flex-row justify-center items-center lg:">
        {/* left of pc */}
        <div className=" flex flex-col  z-10   ">
          <div className="flex flex-col ">
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Anta&display=swap')
            </style>
            <h1 className="text-[#FF1818] text-6xl  animate-pulse-fade font-semibold lg:text-9xl anta-regular">
              SARGAM
            </h1>
            <h1 className=" text-white text-6xl animate-bounce pt-2 lg:text-9xl anta-regular">
              24
            </h1>
            <h2 className="text-gray-500 text-lg lg:text-2xl ">
              Cochin University Arts Fest
            </h2>
          </div>

          <div className="flex items-center justify-center lg:hidden">
            <img src={heroim} alt="" className="h-72" />
          </div>

          {/* buttons section */}
          <div className=" flex flex-col items-center lg:flex lg:flex-col lg:items-start lg:px-6">
            <div className=" flex flex-col justify-center items-center tracking-widest border-2 border-red-400 rounded-2xl h-16 w-48 lg:w-56 lg:h-20">
              <h1 className="text-white">February 29</h1>
              <h1 className="text-white">March 1,2,3,4</h1>
            </div>

            <div className=" lg:hidden">
              <SargamText />
            </div>

            <div className="mt-1">
              <Link to="/livescore">
                <button className="bg-white w-56 h-20 rounded-2xl text-black border-2  hover:bg-red-500 hover:border-red-400 flex justify-around items-center ">
                  <div className="bg-red-400 w-5 h-5 rounded-md animate-spin"></div>
                  <div className="tracking-widest text-2xl text-gray-700 ">
                    LIVE SCORE
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className=" hidden lg:flex lg:pl-6">
            <SargamText />
          </div>
        </div>

        {/* right of pc */}
        <div className=" hidden lg:z-10 lg:flex lg:justify-center lg:items-center">
          <img src={heroim} alt="" className="h-[45rem] w-[45rem]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
