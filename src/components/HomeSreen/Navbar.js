import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import MobileNav from '../MobileNav'

const Navbar = () => {
  return (
    <div className='flex justify-between  items-center w-full '>
    <Fade top>
    <div className='flex justify-between border-b-2 p-6 border-gray-300 items-center w-full'>
        <div className='flex items-center '>
          <Link to="/">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="logo" className='w-12 h-12 object-contain' />
          </Link>
        <div className='md:flex hidden ml-6 space-x-4 font-bold cursor-pointer'>
            <div className='text-base hover:text-green-700'>MENU</div>
            <div className='text-base hover:text-green-700'>REWARDS</div>
            <div className='text-base hover:text-green-700'>GIFT CARDS</div>
        </div>
        </div>
        
        <div className='md:flex hidden space-x-6 cursor-pointer items-center'>
            
              <Link to="/findstore">
              <span className='flex hover:text-green-700 space-x-2 items-center'>
              <FaMapMarkerAlt size={20} />
                <span className='font-bold '>Find a store</span>
                </span>
              </Link>
            
            <div className='flex space-x-4'>
              <Link to="/account/signin">
              <button className='text-[#000000de] border-2 border-[#000000de]  rounded-full px-3 py-2'>Sign in</button>
              </Link>
            <Link to="/account/create">
            <button className='bg-[#000000de] text-[#fafafa] px-3 py-2 rounded-full'>Join now</button>
            </Link>
            
        </div>
        </div>
    </div>
    </Fade>
    <MobileNav />
    </div>
  )
}

export default Navbar