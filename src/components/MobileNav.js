import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'

const MobileNav = () => {
    const [clicked, setClicked] = useState(false)
     const handleClicked = () => {
        setClicked(!clicked)
     }
  return (
    <div className="md:hidden block">
      {clicked ? <AiOutlineCloseCircle onClick={handleClicked} size={27} />  : <AiOutlineMenu size={27} onClick={handleClicked} /> } 

      <div>
        
      </div>
    </div>
  )
}

export default MobileNav