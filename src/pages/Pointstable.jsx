import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ufcgnfipctcnvcmpjehw.supabase.co';
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmY2duZmlwY3RjbnZjbXBqZWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MDE5MzUsImV4cCI6MjAyNDE3NzkzNX0.XDQoUK3jbozdUryLskOIO7WWYGhG5EVVeedgFdd59V0"
const supabase = createClient(supabaseUrl, supabaseKey)


const Pointstable = () => {
  const [zoneData, setZoneData] = useState({});
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from('points').select('*');

      if (error) {
        throw error;
      }

      const processedData = {
        zone1: data.reduce((acc, row) => acc + row.zone1, 0),
        zone2: data.reduce((acc, row) => acc + row.zone2, 0),
        zone3: data.reduce((acc, row) => acc + row.zone3, 0),
        zone4: data.reduce((acc, row) => acc + row.zone4, 0),
        zone5: data.reduce((acc, row) => acc + row.zone5, 0),
        zone6: data.reduce((acc, row) => acc + row.zone6, 0),
        zone7: data.reduce((acc, row) => acc + row.zone7, 0),
        zone8: data.reduce((acc, row) => acc + row.zone8, 0),
      };

      setZoneData(processedData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchData();

    // Fetch data every 10 minutes
    const intervalId = setInterval(() => {
      fetchData();
    }, 10 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  

  



  return (
    <div className='flex flex-col pt-5 items-center bg-gradient-to-r from-slate-900 to-slate-700 p-4 w-screen h-screen '>

      <h1 className='text-3xl text-red-400 tracking-widest'>POINTS TABLE</h1>
      <div className=' text-white flex flex-col items-center m-4 bg-blue-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 w-72 h-screen  gap-5 py-4 justify-around lg:w-96 lg:flex lg:flex-col'>
       
        <div className='flex flex-row justify-between bg-black  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2  border-white w-64 h-8 p-1 px-4  rounded-lg'>
          <h1>Zone 1</h1>
          <h1>{zoneData.zone1}</h1>
        </div>

        <div className='flex flex-row justify-between  items-center bg-black  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2  border-white w-64 h-8   p-1 px-4 rounded-lg '>
          <h1>Zone 2</h1>
          <h1>{zoneData.zone2}</h1>
        </div>


        <div className='flex flex-row justify-between  items-center bg-black  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2  border-white w-64 h-8  p-1 px-4 rounded-lg '>
          <h1>Zone 3</h1>
          <h1>{zoneData.zone3}</h1>
        </div>

        <div className='flex flex-row justify-between  items-center bg-black  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2  border-white w-64 h-8  p-1 px-4 rounded-lg '>
          <h1>Zone 4</h1>
          <h1>{zoneData.zone4}</h1>
        </div>

        <div className='flex flex-row justify-between  items-center bg-black  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2  border-white w-64 h-8  p-1 px-4 rounded-lg '>
          <h1>Zone 5</h1>
          <h1>{zoneData.zone5}</h1>
        </div>

        <div className='flex flex-row justify-between  items-center bg-black  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2  border-white w-64 h-8  p-1 px-4 rounded-lg '>
          <h1>Zone 6</h1>
          <h1>{zoneData.zone6}</h1>
        </div>

        <div className='flex flex-row justify-between  items-center bg-black  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2  border-white w-64 h-8  p-1 px-4 rounded-lg '>
          <h1>Zone 7</h1>
          <h1>{zoneData.zone7}</h1>
        </div>

        <div className='flex flex-row justify-between  items-center bg-black  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2  border-white w-64 h-8  p-1 px-4 rounded-lg '>
          <h1>Zone 8</h1>
          <h1>{zoneData.zone8}</h1>
        </div>



      </div>



    </div>
  )
}

export default Pointstable