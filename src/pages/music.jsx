import React from "react";

const Music = () => {
  return (
    <div className=" flex flex-col items-center  p-4 w-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white lg:h-screen=] ">
      {/* parent */}

      <h1 className="text-6xl p-4">MUSIC</h1>

      <div className="flex flex-col items-center w-full h-full lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:items-center gap-4">

      <div className="flex flex-col items-center justify-start  bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 w-52 p-4 shadow-2xl lg:h-72  ">
        
        <ul>
          <li>LIGHT MUSIC (M/F)</li>
          <li>MAPPILAPPATTU (M/F)</li>
          <li>HINDUSTANI VOCAL (M/F)</li>
          <li>GAZAL (M/F)</li>
          <li>WESTERN VOCAL SOLO</li>
          <li>CLASSICAL MUSIC (M/F)</li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-start  bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 w-52 p-4 shadow-2xl lg:h-72 ">
        <h1 className="font-semibold text-sm">STRINGED INSTRUMENTS</h1>
        <ul>
          <li>VEENA</li>
          
          <li>EASTERN STYLE</li>
          
          <li>WESTERN STYLE</li>
          <li>GUITAR</li>
         
        </ul>
      </div>

      <div className="flex flex-col items-center justify-start  bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 w-52 p-4 shadow-2xl lg:h-72 ">
        <h1 className="font-semibold">WIND INSTRUMENTS</h1>
        <ul>
          <li>EASTERN STYLE</li>
          <li>WESTERN STYLE</li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-start  bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 w-52 p-4 shadow-2xl lg:h-72 ">
        <h1 className="font-semibold">PERCUSSION INSTRUMENTS</h1>
        <ul>
          <li>TABLA</li>
          <li>EASTERN STYLE</li>
          <li>WESTERN STYLE</li>
          <li>CHENDA</li>
          
        </ul>
      </div>

      <div className="flex flex-col items-center justify-start  bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 w-52 p-4 shadow-2xl lg:h-72 ">
        
        <ul>
          <li>GANAMELA</li>
          <li>WESTERN VOCAL GROUP</li>
          <li>VANCHIPAATU</li>
          <li>GROUPSONG</li>
          <li>FOLKSONG</li>
          <li>VRINDHAVADHYA</li>
        </ul>
      </div>

      
      
      </div>
      
        
    </div>
  );
};

export default Music;
