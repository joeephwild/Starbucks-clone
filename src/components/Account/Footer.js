import React from 'react'

const Footer = () => {
  return (
    <div className='flex md:mx-auto items-center justify-around border-t-2 border-gray-300 my-16'>
        <div className="flex flex-col mt-9 space-y-40">
            <button className='text-lg font-bold border-[#000000de] border-2 rounded-full px-4 py-3'>Find a store</button>
            <span className="text-sm text-[#000000de]">© 2022 Starbucks</span>
        </div>
        <div className="flex flex-col items-center space-y-3">
            <span className="text-sm text-[#000000de]">Web Acessibility</span>
            <span className="text-sm text-[#000000de]">Privacy Policy</span>
            <span className="text-sm text-[#000000de]">Terms of use</span>
            <span className="text-sm text-[#000000de]">Cookie Preference</span>
        </div>
    </div>
  )
}

export default Footer