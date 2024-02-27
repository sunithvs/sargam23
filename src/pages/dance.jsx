import React from "react";

const Dance = () => {
  return (
    <div className=" flex flex-col items-center  p-4 w-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white lg:h-screen ">
      {/* parent */}

      <h1 className="text-6xl p-4">DANCE</h1>

      <div className="flex flex-col items-center w-full h-full lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:items-center gap-4">
        <div className="flex flex-col items-center justify-start  bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 w-52 p-4 shadow-2xl lg:h-72  ">
          <ul>
            <li>MOHINIYATTAM</li>
            <li>BHARATANATYAM(M/F)</li>
            <li>KUCHIPUDI(M/F)</li>
            <li>FOLK DANCE(M/F)</li>
            <li>KATHAKALI(M/F)</li>
            <li>OTTAMTHULLAL(M/F)</li>
            <li>ADAPT TUNE</li>
            <li>KERALA NADANAM(M/F)</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-start  bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 w-52 p-4 shadow-2xl lg:h-72 ">
          
          <ul>
            <li>GROUP DANCE</li>
            <li>KERALA NADANAM GROUP</li>
            <li>VATTAPATTU</li>
            <li>THIRUVATHIRA</li>
            <li>OPPANA(F)</li>
            <li>MARGAMKALI</li>
            <li>DUFFMUTTU</li>
            <li>KOLKALI</li>
            <li>STEP IN SYNCHRO</li>
          </ul>
        </div>

       
      </div>
    </div>
  );
};

export default Dance;
