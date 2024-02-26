import React from 'react'
import Logo from '../images/logo.png';

const navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-3">
      {/* left */}
      <div>
        {/* icon section */}
        <div className='flex flex-col justify-center items-center'>
        <img src={Logo} className='size-16'></img>
        </div>
        <div>
          <h1 className='text-blue-500 font-bold'>SARGAM'24</h1>
        </div>
      </div>

      {/* right */}
      <div className='flex flex-row'>
       
      </div>
    </div>
  )
}

export default navbar