import React from "react";

const Theatre = () => {
  return (
    <div className=" flex flex-col items-center h-screen  p-4 w-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white lg:h-screen ">
      {/* parent */}

      <h1 className="text-6xl p-4">THEATRE</h1>

      <div className="flex flex-col items-center w-full h-full lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:items-center gap-4">
        <div className="flex flex-col items-center justify-start  bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 w-52 p-4 shadow-2xl lg:h-72  ">
          <ul>
            <li>KATHAPRASANGAM(M/F)</li>
            <li>MONO ACT(M/F)</li>
            <li>MIMICRY(M/F)</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-start  bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 w-52 p-4 shadow-2xl lg:h-72 ">
          <ul>
            <li>MIME</li>
            <li>SKIT</li>
            <li>EKANGA NADAKAM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Theatre;
