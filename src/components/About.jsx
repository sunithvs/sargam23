import React from "react";
import about from "../images/aboout.png";
import bg from "../images/bg3.png"
function About() {
  return (
    <div id="aboutsec" className="  py-20 bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-around lg:items-center w-screen  ">
      
      <div className=" mb-24  absolute w-screen h-screen bg-cover z-0 lg:mt-72" style={{backgroundImage:`url(${bg})`}}>
      <div className="absolute bg-black opacity-70 z-20 w-full h-full"></div>
      </div>

      
      
      {/* <div className="mt-4 lg:w-96 lg:h-96 lg:rounded-full lg:bg-black hover:bg-red-800 z-10">
        <img src={about} className="w-72 h-72 rounded-full lg:p-1 lg:w-96 lg:h-96"></img>
      </div> */}
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
      </style>
      <div className=" flex flex-col items-center justify-center itim-regular text-center text-red-400 z-10 lg:w-1/2 ">
        <h1 className="text-2xl tracking-widest mt-3 text-white  lg:m-2">
          ABOUT
        </h1>
        <p className="text-gray-300 p-3  lg:text-left">
          The Cochin University Students Union's arts festival is pleased to
          announce the return of SARGAM for another year. The unique arts
          festival is centred around a lively group of more than 9000 students
          from CUSAT campuses (Thrikakkara, Lakeside, Pullincunnu) and other
          associated colleges. The festivities for the five-day festival begin
          on February 29 and last through March 4. Make sure to put February
          29–March 4 on your calendars so you don't miss the fun! Will see you
          there, prepare to be amazed!
        </p>
      </div>
    </div>
  );
}

export default About;
