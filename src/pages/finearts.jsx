import React from "react";

const Finearts= () => {
  return (
    <div className=" flex flex-col items-center h-screen p-4 w-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white lg:h-screen  ">
      {/* parent */}

      <h1 className="text-6xl p-4">FINE ARTS</h1>

      <div className="flex flex-col items-center w-full h-full lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:items-center gap-4">

      <div className="flex flex-col items-center justify-start  bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 w-52 p-4 shadow-2xl lg:h-64  ">
        
        <ul>
          <li>RANGOLI</li>
          <li>SPOT PHOTOGRAPHY</li>
          <li>MEHANDI</li>
          <li>FACE PAINTING</li>
          <li>PAINTING</li>
          


        </ul>
      </div>

      <div className="flex flex-col items-center justify-start  bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 w-52 p-4 shadow-2xl lg:h-64 ">
        
        <ul>
        <li>POSTER MAKING</li>
          <li>CLAY MODELLING</li>
          <li>COLLAGE</li>
          <li>CARTOONING</li>
         
        </ul>
      </div>

      
      </div>
      
        
    </div>
  );
};

export default Finearts;
