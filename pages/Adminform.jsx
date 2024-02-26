
import React, { useState } from 'react';
import TeamInput from '../components/TeamInput';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9woalsepYghwH0p78xYRCSl-Ts3rPjJo",
  authDomain: "sargam24-e079b.firebaseapp.com",
  projectId: "sargam24-e079b",
  storageBucket: "sargam24-e079b.appspot.com",
  messagingSenderId: "311249975125",
  appId: "1:311249975125:web:958115fd5428dea5c621dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Adminform = () => {

    const [teamPoints, setTeamPoints] = useState({});

  const handlePointsChange = (teamName, points) => {
    setTeamPoints((prevTeamPoints) => ({
      ...prevTeamPoints,
      [teamName]: points,
    }));
}

const handleSubmit = () => {
    // Store each team's points in Firebase database
    Object.entries(teamPoints).forEach(([teamName, points]) => {
      database.ref(`teamPoints/${teamName}`).set(points);
    });
  };
  



  return (
    <div className="container mx-auto mt-8 p-4">
    <h1 className="text-3xl font-bold mb-4">Enter Team Points</h1>
    <form>
      <TeamInput teamName="Team 1" onPointsChange={handlePointsChange} />
      {/* Repeat the above line for Teams 2 to 8 */}
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-otext-black p-2 rounded-md bordeer border-red-500 border-2"
      >
        Submit
      </button>
    </form>
    </div>
  )
}

export default Adminform