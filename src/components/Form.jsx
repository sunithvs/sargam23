
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ufcgnfipctcnvcmpjehw.supabase.co';
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmY2duZmlwY3RjbnZjbXBqZWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MDE5MzUsImV4cCI6MjAyNDE3NzkzNX0.XDQoUK3jbozdUryLskOIO7WWYGhG5EVVeedgFdd59V0"
const supabase = createClient(supabaseUrl, supabaseKey)

// main entry file (e.g., index.js)



const Form = () => {

    // 1. Initial state with team names and points (replace with your actual team names)
  const [points, setPoints] = useState({
    zone1: 0,
    zone2: 0,
    zone3: 0,
    zone4: 0,
    zone5: 0,
    zone6: 0,
    zone7: 0,
    zone8: 0,
    // ...other teams
  });

  // 2. Handle input changes: update corresponding team's point value
  const handleChange = (event) => {
    setPoints({
      ...points,
      [event.target.name]: parseInt(event.target.value), // Convert input to integer
    });
  };

  // 3. Form submission handler: insert data into Supabase
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // 4. Construct Supabase query to insert data
      const { data, error } = await supabase
        .from('points') // Replace with your database table name
        .insert([points]); // Insert an array with the points object

      if (error) {
        throw error; // Handle errors appropriately
      }

      console.log('Points submitted successfully:', data);
      // 5. Clear the form after successful submission
      setPoints({
        zone1: 0,
        zone2: 0,
        zone3: 0,
        zone4: 0,
        zone5: 0,
        zone6: 0,
        zone7: 0,
        zone8: 0,
      });
    } catch (error) {
      console.error('Error submitting points:', error);
      // Handle errors gracefully, e.g., show an error message to the user
    }
  };

  





  return (
    <div className='flex justify-center items-center gap-5'>

<section className="bg-white">
  <div className=" flex flex-col justify-center items-center gap-10">
      <h2 className="m-4 text-6xl font-bold text-gray-900">Enter Points</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <h2>Enter Team Points</h2>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(points).map(([teamName, pointValue]) => (
            <div key={teamName}>
              <label htmlFor={teamName}>{teamName}:</label>
              <input
                type="number"
                name={teamName}
                id={teamName}
                value={pointValue}
                onChange={handleChange}
                className="border rounded p-2"
              />
            </div>
          ))}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit Points
          </button>
        </div>
      </form>
  </div>
</section>



    </div>
  )
}

export default Form