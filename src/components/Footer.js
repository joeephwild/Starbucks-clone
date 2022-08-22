import React from 'react'
import { FaSpotify, FaFacebook, FaPinterest, FaInstagramSquare, FaYoutube, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
    <div className="justify-items-end border-gray-300 mt-[30px] border-y-2 w-[100%] px-[30px]">
    
    <div className='grid  mb-[20px] mt-[20px] grid-cols-1 md:grid-cols-5 gap-8'>
        <div className="flex flex-col items-center space-y-6">
           <span className='text-xl font-bold'>About Us</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our coffee</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Stories and News</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Starbucks Archive</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Investor Relation</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Customer Service</span>
        </div>
        <div className="flex flex-col items-center space-y-6">
           <span className='text-xl font-bold'>About Us</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
        </div>
        <div className="flex flex-col items-center space-y-6">
           <span className='text-xl font-bold'>About Us</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           
        </div>
        <div className="flex flex-col items-center space-y-6">
           <span className='text-xl font-bold'>About Us</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           
        </div>
        <div className="flex flex-col items-center space-y-6">
           <span className='text-xl font-bold'>About Us</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
           <span className="text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm">Our Company</span>
        </div>
    </div>
    </div>

    <div className='flex ml-[20px] mt-5 flex-col space-y-5 '>
        <div className='flex space-x-4'>
            <FaSpotify size={35} />
             <FaFacebook size={35} />
            <FaPinterest size={35} />
            <FaInstagramSquare size={35} />
            <FaYoutube size={35} />
            <FaTwitter size={35} />
        </div>
        <div className='flex mt-5 mb-6 space-x-4'>
            <span className='text-base hover:border-b-2 hover:border-b-black border-r-2 border-gray-300 border-spacing-4'>Privacy Policy</span>
            <span className='text-base hover:border-b-2 hover:border-b-black border-r-2 border-gray-300 border-spacing-4'>Terms of use</span>
            <span className='text-base hover:border-b-2 hover:border-b-black border-r-2 border-gray-300 border-spacing-4'>CA supply Chain Acty</span>
            <span className='text-base hover:border-b-2 hover:border-b-black border-r-2 border-gray-300 border-spacing-4'>Cookie Preference</span>
        </div>
        <span>Cloned by JOSEPH OMOTADE 2022</span>
    </div>
    </div>
  )
}

export default Footer