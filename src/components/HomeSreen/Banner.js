import React from 'react'
import { Fade } from 'react-reveal';
import banner from '../../assets/b-img.jpg';
import BoxSection3 from './BoxSection3';
import BoxSextion from './BoxSextion';
import Categories from './Categories';

const Banner = () => {
  return (
    <Fade>
       <section className='mt-5 grid transition-all ease-in-out bg-[#2f4c39] delay-300 grid-cols-1 md:grid-cols-2 gap-3 '>
        <img src={banner} className="w-full md:order-last z-0 md:my-5" alt="banner"/>
        <div className='max-w-[500px] text-center justify-self-center p-[20px] m-auto'>
          <h2 className='md:text-5xl font-extrabold text-[#000000de] text-[13px] md:max-w-[28rem] md:ml-[10%] mb-[20px] tracking-[6px] text-white uppercase'>Summer is brighter with free treats.</h2>
          <div>
            <button className='border-[#fafafa] my-8 border-2 text-[#fafafa] mb-5 px-4 py-2 rounded-full'>Join starbucks rewards</button>
          </div>
        </div>
      </section>
    <Categories />
    <BoxSextion  />
    <section className="">
    <BoxSection3  />
    </section>
   </Fade>
  )
}

export default Banner