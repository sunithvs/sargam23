import React from 'react'
import Logo from '../images/Sargamwhiteplain.png';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-10 lg:pt-4 lg:z-10 lg:absolute lg:w-screen">
      {/* left */}
      <div>
        {/* icon section */}
        <div className='flex flex-col justify-center items-center'>
        <img src={Logo} className='size-12'></img>
        </div>
        
      </div>

      {/* right */}
      <div className='flex flex-row text-white justify-between gap-4'>

        <Link to="/"><h1 className='hover:text-red-500'>Home</h1></Link>
        {/* <Link to="/#aboutsec"> <h1>About</h1></Link>
        <h1>Events</h1> */}
        {/* <h1>Gallery</h1> */}
       
      </div>
    </div>
  )
}

export default navbar