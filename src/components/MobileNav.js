import React, { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MobileNav = ({clicked}) => {
   
  return (
    <div >
    <div className={clicked 
      ? 'fixed right-0 bg-slate-100 w-[80%] h-screen  transition-all ease-in-out duration-500 ' 
    : 'fixed right-0  top-[-100] hidden transition-all ease-in-out duration-500 '}>
      <div className="px-3 py-4 flex flex-col ">
      <div className='flex flex-col mt-3 px-7 space-y-9 border-b-2 border-gray-200 py-7 cursor-pointer'>
            <div className='text-base hover:text-green-700'>MENU</div>
            <div className='text-base hover:text-green-700'>REWARDS</div>
            <div className='text-base hover:text-green-700'>GIFT CARDS</div>
        </div>
      </div>
      <div className='flex flex-col pl-4 mt-4'>
         {/* buttons */}
            <div className='flex space-x-5'>
              <Link to="/account/signin">
              <button className='text-[#000000de] border-2 border-[#000000de] text-sm rounded-full px-3.5 py-2'>Sign in</button>
              </Link>
            <Link to="/account/create">
            <button className='bg-[#000000de] text-[#fafafa] px-3.5 py-2 text-sm rounded-full'>Join now</button>
            </Link>
        </div>
        <Link to="/findstore">
              <span className='flex hover:text-green-700 mt-3 space-x-2 items-center'>
              <FaMapMarkerAlt size={20} />
                <span className='font-bold text-sm'>Find a store</span>
                </span>
              </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileNav