import React from 'react'

function Literature() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: '#333' }}>EVENTS</h1>
      <h2 style={{ color: '#555' }}>Literature</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>Debate English</li>
        <li>Debate Malayalam</li>
        <li>Debate Hindi</li>
        <li>Elocution English</li>
        <li>Elocution Malayalam</li>
        <li>Elocution Hindi</li>
        <li>Elocution Sankrit </li>
        <li>Elocution Arabic </li>

      </ul>

      {/* Add your image URLs below */}
      <img src="image1.jpg" alt="Event Image 1" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} />
      <img src="image2.jpg" alt="Event Image 2" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} />
      <img src="image3.jpg" alt="Event Image 3" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} />
    </div>
  )
}

export default Literature