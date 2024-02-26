import React from 'react'
import { useState } from 'react';

const TeamInput = ({ teamName, onPointsChange }) => {
  const [points, setPoints] = useState(0);

  const handleChange = (e) => {
    const newPoints = parseInt(e.target.value, 10);
    setPoints(newPoints);
    onPointsChange(teamName, newPoints);
  };

const TeamInput = () => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-600">
        {teamName} Points
      </label>
      <input
        type="number"
        value={points}
        onChange={handleChange}
        className="mt-1 p-2 border rounded-md w-full"
      />
    </div>
  )
}
}

export default TeamInput;