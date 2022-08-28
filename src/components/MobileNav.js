import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

const MobileNav = () => {
    const [clicked, setClicked] = useState(false)
     const handleClicked = () => {
        setClicked(!clicked)
     }
  return (
    <div className="md:hidden block">
      {clicked ? <AiOutlineCloseCircle onClick={handleClicked} size={27} />  : <AiOutlineMenu size={27} onClick={handleClicked} /> } 

      <div className=''>
        {clicked ? 
        <Fade right >
         <div className='fixed z-50 top-[90px] right-0 bg-[#fafafa] text-[#000000de] overflow-hidden w-[90%] max-h-[100vh] p-[50px] shadow-lg shadow-gray-300 transition-all ease-in-out delay-300 duration-500'>
          <ul className='border-b-2 space-y-5 border-gray-300 mb-[30px]'>
            <li className="text-[20px]">Menu</li>
             <li className="text-[20px]">Rewards</li>
             <li className="text-[20px] mb-8">Gift Cards</li>
          </ul>

          <div>
          <div className='flex mb-8 space-x-4'>
              <Link to="/account/signin">
              <button className='text-[#000000de] border-2 border-[#000000de]  rounded-full px-3 py-2'>Sign in</button>
              </Link>
            <Link to="/account/create">
            <button className='bg-[#000000de] text-[#fafafa] px-3 py-2 rounded-full'>Join now</button>
            </Link>
            
        </div>
            <div>
            <Link to="/findstore">
              <span className='flex hover:text-green-700 space-x-2 items-center'>
              <FaMapMarkerAlt size={20} />
                <span className='font-bold '>Find a store</span>
                </span>
              </Link>
            </div>
          </div>
         </div>
         </Fade>
         :
         <Fade left>
         <div className='fixed hidden top-[85px] right-0 bg-[#fafafa] textee-[#000000de] w-[90%] h-[100%] p-[30px] shadow-lg shadow-gray-300 transition-all'>
          <ul className='border-b-2 border-[#777] mb-[30px]'>
            <li className="text-[20px]">Menu</li>
             <li className="text-[20px]">Menu</li>
             <li className="text-[20px]">Menu</li>
             <li className="text-[20px]">Menu</li>
          </ul>

          <div>
          <div className='flex space-x-4'>
              <Link to="/account/signin">
              <button className='text-[#000000de] border-2 border-[#000000de]  rounded-full px-3 py-2'>Sign in</button>
              </Link>
            <Link to="/account/create">
            <button className='bg-[#000000de] text-[#fafafa] px-3 py-2 rounded-full'>Join now</button>
            </Link>
            
        </div>
            <div>
            <Link to="/findstore">
              <span className='flex hover:text-green-700 space-x-2 items-center'>
              <FaMapMarkerAlt size={20} />
                <span className='font-bold '>Find a store</span>
                </span>
              </Link>
            </div>
          </div>
         </div>
         </Fade>
        }
      </div>
    </div>
  )
}

export default MobileNav