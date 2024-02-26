import React from 'react'

function Dance() {
  return (
    <div style={{ textAlign: 'center' }}>
    <h1 style={{ color: '#333' }}>EVENTS</h1>
    <h2 style={{ color: '#555' }}>Dance</h2>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li>Ballet Performance</li>
      <li>Street Dance Battle</li>
      <li>Contemporary Dance Showcase</li>
    </ul>

    {/* Add your image URLs below */}
    <img src="image1.jpg" alt="Event Image 1" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} />
    <img src="image2.jpg" alt="Event Image 2" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} />
    <img src="image3.jpg" alt="Event Image 3" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} />
  </div>
  )
}

export default Dance