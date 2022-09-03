import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import MobileNav from '../MobileNav'

const style = {
  navWrapper: 'flex justify-between p-6 border-gray-300 border-b-2  items-center w-full',
  menuLinks: 'md:flex hidden ml-6 space-x-4 font-bold cursor-pointer',
  links: 'text-base hover:text-green-700',
  rightMenu: 'md:flex hidden space-x-6 cursor-pointer items-center',
  storeWrapper: 'flex hover:text-green-700 space-x-2 items-center',
  buttonWrapper: 'flex space-x-4',
  outlinebtn: 'text-[#000000de] border-2 border-[#000000de]  rounded-full px-3 py-2',
  button: 'bg-[#000000de] text-[#fafafa] px-3 py-2 rounded-full'
}

const Navbar = () => {
  return (
    <div >
    
    <div className={style.navWrapper}>
        <div className='flex items-center '>
          <Link to="/">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="logo" className='w-12 h-12 object-contain' />
          </Link>
          {/* middle links */}
        <div className={style.menuLinks}>
            <div className={style.links}>MENU</div>
            <div className={style.links}>REWARDS</div>
            <div className={style.links}>GIFT CARDS</div>
        </div>
        </div>
        {/* right menu */}
        <div className={style.rightMenu}>
              <Link to="/findstore">
              <span className={style.storeWrapper}>
              <FaMapMarkerAlt size={20} />
                <span className='font-bold '>Find a store</span>
                </span>
              </Link>
            {/* buttons */}
            <div className={style.buttonWrapper}>
              <Link to="/account/signin">
              <button className={style.outlinebtn}>Sign in</button>
              </Link>
            <Link to="/account/create">
            <button className={style.button}>Join now</button>
            </Link>
            
        </div>
        </div>
    <MobileNav />
    </div>
    </div>
  )
}

export default Navbar