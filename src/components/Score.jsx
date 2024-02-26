import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://hsfedrdtdosvfuynfdsj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzZmVkcmR0ZG9zdmZ1eW5mZHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1MDQ5MDAsImV4cCI6MjAyNDA4MDkwMH0.i1n9nlnl9yFTxDVZmQERFFEc4zIc7GcTg4iES4wa4SE"

const supabase = createClient(supabaseUrl, supabaseKey);

const Score = () => {
  const [zones, setZones] = useState({
    zone1: '',
    zone2: '',
    zone3: '',
    zone4: '',
    zone5: '',
    zone6: '',
    zone7: '',
    zone8: '',
  });

  const handleZoneChange = (event, zone) => {
    setZones((prevZones) => ({
      ...prevZones,
      [zone]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create an array of objects, each representing a zone
      const zonesData = [
        { zone1: zones.zone1 },
        { zone2: zones.zone2 },
        { zone3: zones.zone3 },
        { zone4: zones.zone4 },
        { zone5: zones.zone5 },
        { zone6: zones.zone6 },
        { zone7: zones.zone7 },
        { zone8: zones.zone8 },
      ];

      // Insert data into your Supabase table
      const { data, error } = await supabase
        .from('points')
        .upsert(zonesData);

      if (error) {
        console.error('Error inserting data:', error.message);
      } else {
        console.log('Data inserted successfully:', data);

        // Reset the form after successful submission
        setZones({
          zone1: '',
          zone2: '',
          zone3: '',
          zone4: '',
          zone5: '',
          zone6: '',
          zone7: '',
          zone8: '',
        });
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex flex-col justify-center items-center gap-6'>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          {Object.keys(zones).map((zone, index) => (
            <div key={index} className="flex justify-center items-center mt-6">
              <label htmlFor={zone}>{`Zone ${index + 1}: `}</label>
              <input
                type="text"
                id={zone}
                name={zone}
                className='border border-black'
                value={zones[zone]}
                onChange={(event) => handleZoneChange(event, zone)}
              />
            </div>
          ))}
          <div className='w-full flex justify-center items-center p-10'>
            <button type="submit" className='border  border-red-500 bg-red-500 text-black'>
              Submit All
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Score;
