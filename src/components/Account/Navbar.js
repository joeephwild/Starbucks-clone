import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     
    <div className='flex justify-between border-b-2 border-gray-300 items-center w-full p-7'>
        <div className='flex items-center '>
          <Link to="/">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="logo" className='w-12 h-12 object-contain' />
          </Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar