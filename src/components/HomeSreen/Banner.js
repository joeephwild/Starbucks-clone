import React from 'react'
import banner from '../../assets/b-img.jpg';
import BoxSection3 from './BoxSection3';
import BoxSextion from './BoxSextion';
import Categories from './Categories';

const Banner = () => {
  return (
    <div className="w-full justify-items-center">
    <div className="grid grid-cols-2 md:py-9 md:pr-7 md:space-x-10 md:bg-[#153f30]">
        <img src={banner} alt="banner" className='w-full mt-5'/>
        <div className='md:ml-12 my-6 md:my-3 flex flex-col items-center'>
            <div className="text-2xl font-bold text-[#fafafa] text-center w-[25rem] mb-7">Summer is brighter with free treats.*</div>
            <button className='text-[#fafafa] text-base mt-4 border-2 border-[#faafafa] capitalize font-bold rounded-full px-3 py-2'>Join starbucks rewards</button>
        </div>
    </div>
    <Categories />
    <BoxSextion  />
    <section className="">
    <BoxSection3  />
    </section>
    
    </div>

  )
}

export default Banner