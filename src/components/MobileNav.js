import React, { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MobileNav = ({clicked}) => {
   
  return (
    <div >
    <div className={clicked 
      ? 'fixed right-0 bg-slate-300 p-10 justify-center items-center transition-all ease-in-out duration-500 flex flex-col' 
    : 'fixed right-0  top-[-100] p-10 justify-center items-center transition-all ease-in-out duration-500 flex flex-col'}>
      

      
     

      </div>
    </div>
  )
}

export default MobileNav