import React from 'react'
import banner2 from '../assets/B-img2.jpg';

const Categories = () => {
  return (
    <div className='w-full  h[100vh] space-y-7 overflow-x-hidden'>
        <div className="md:flex block  md:py-9 md:pl-7 md:space-x-10 md:bg-[#f19cbb] mt-6 ">
        <div className='bg-[#f19cbb] md:ml-12 flex flex-col items-center'>
            <div className="text-4xl font-extrabold text-[#0f0d0d] text-center w-[25rem] mb-7">Summer’s brightest new drinks</div>
            <div className='text-3xl w-[35rem] font-bold'>Introducing the Pineapple Passionfruit Starbucks Refreshers® beverage and the Starbucks® Paradise Drink with creamy coconutmilk.</div>
            <button className='text-[#161515] text-base mt-4 border-2 border-[#0000] capitalize font-bold rounded-full px-3 py-2'>Learn More</button>
        </div>
        <img src={banner2} alt="banner" className='md:w-[360px] h-[360px] object-contain'/>
    </div>
    </div>
  )
}

export default Categories