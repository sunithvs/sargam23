import React from "react";
import { Link } from "react-router-dom";
import lit from "../images/literature.png"
import music from"../images/musical-note.png"
import theater from "../images/theatre.png"
import fine from "../images/fine-arts.png"
import dance from "../images/dancing.png"


function Events() {
  return (
    <div className="pt-20  flex flex-col items-center p-4 bg-gradient-to-r from-slate-900 to-slate-700 itim-regular tracking-widest w-screen">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
      </style>
      
     
     <div className="flex flex-col items-center p-8 gap-8 bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 lg:flex lg:flex-row">
     <Link to="/literature">
      <div className="flex flex-col justify-center  items-center w-72 h-24 rounded-xl border-2 border-red-500 hover:bg-black lg:w-36 lg:h-48 hover:animate-bounce ">
        <img src={lit} alt="" className="h-12 px-2 pt-2"  />
        <h1 className="text-white p-2 mb-3">Literature</h1>
      </div>
      </Link>
<Link to="/music">
      <div className="flex flex-col justify-center  items-center  w-72 h-24 rounded-xl border-2 border-white hover:bg-black  lg:w-36 lg:h-48 hover:animate-bounce ">
        <img src={music} alt="" className="h-12 px-2 pt-2"  />
        <h1 className="text-white p-2 mb-3">Music</h1>
      </div>
      </Link>
<Link to="/finearts">
      <div className="flex flex-col justify-center  items-center w-72 h-24 rounded-xl border-2 border-red-500 hover:bg-black lg:w-36 lg:h-48 hover:animate-bounce ">
        <img src={fine} alt="" className="h-12 px-2 pt-2"  />
        <h1 className="text-white p-2 mb-3">Finearts</h1>
      </div>
      </Link>
<Link to="/dance">
      <div className="flex flex-col justify-center  items-center  w-72 h-24 rounded-xl border-2 border-white hover:bg-black lg:w-36 lg:h-48 hover:animate-bounce ">
        <img src={dance} alt="" className="h-12 px-2 pt-2 "  />
        <h1 className="text-white p-2 mb-3">Dance</h1>
      </div>
      </Link>
      <Link to="/theatre">
      <div className="flex flex-col justify-center  items-center  w-72 h-24 rounded-xl border-2 border-red-500 hover:bg-black lg:w-36 lg:h-48 hover:animate-bounce ">
        <img src={theater} alt="" className="h-12 px-2 pt-2 "  />
        <h1 className="text-white p-2 mb-3">Theater</h1>
      </div>
      </Link>

      </div>

      </div>
  );
}

export default Events;
