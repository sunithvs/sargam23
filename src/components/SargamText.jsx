import React, { useState, useEffect } from 'react';

const SargamText = () => {
  const [languages, setLanguages] = useState([
    { text: 'SARGAM', className: 'text-english' },
    { text: 'സർഗ്ഗം ', className: 'text-malayalam' },
    { text: 'சரகம்', className: 'text-tamil' },
    { text: 'सरगम', className: 'text-hindi' },
    { text: 'سرگم', className: 'text-urdu' },
    { text: 'सर्गम', className: 'text-sanskrit' },
    { text: 'صَرْغَمْ', className: 'text-arabic right-to-left' }, // Added right-to-left class for Arabic
  ]);
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) =>
        (prevIndex + 1) % languages.length
      );
    }, 2000); // Adjust animation interval as needed

    return () => clearInterval(intervalId);
  }, [languages]);

  return (
    <div className="flex justify-center  items-center  text-gray-300  ">
      {languages.map((language, index) => (
        <span
          key={index}
          className={`mt-2 text-sm transition-opacity duration-1000 ease-in-out lg:text-3xl lg:mt-2 ${
            index === currentLanguageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {language.text}
        </span>
      ))}
    </div>
  );
};

export default SargamText;
