import React from 'react'
import banner2 from '../assets/B-img2.jpg';

const Categories = () => {
  return (
    <div className='w-full  h-[100vh] space-y-7 '>
        <div className="md:flex flex-row-reverse  md:py-9 md:pl-4  md:bg-[#f19cbb] mt-6 ">
        <img src={banner2} alt="banner" className='md:w-[460px]'/>
        <div className='bg-[#f19cbb] md:mr-12 flex flex-col items-center'>
            <div className="text-5xl font-medium text-[#0f0d0d] text-center w-[15rem] mb-7">Summer’s brightest new drinks</div>
            <div className='text-3xl w-[25rem] font-medium'>Introducing the Pineapple Passionfruit Starbucks Refreshers® beverage and the Starbucks® Paradise Drink with creamy coconutmilk.</div>
            <button className='text-[#161515]  text-base mt-4 border-2 border-[#161515] capitalize font-bold rounded-full px-3 py-2'>Learn More</button>
        </div>
        
    </div>
    </div>
  )
}

export default Categories