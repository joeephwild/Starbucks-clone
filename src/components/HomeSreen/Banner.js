import React from 'react'
import banner from '../../assets/pexels.webp';
import { Brew } from '../../data/MenuData';
import BoxSection3 from './BoxSection3';
import BoxSextion from './BoxSextion';
import Categories from './Categories';

const Banner = () => {
  return (
    <div >
       <section className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#fafafa]'>
        <img src={banner} className="w-full md:order-last md:my-5" alt="banner"/>
        <div className='max-w-[500px] text-center justify-self-center px-[20px] m-auto'>
          <h2 className='md:text-5xl text-[#000000de] text-3xl md:max-w-[28rem] md:ml-[10%] font-semibold mb-[20px] tracking-[6px] uppercase'>GOOD MORNING!</h2>
          <p className='text-[24px] text-[#000000de] font-semibold md:max-w-[28rem] md:ml-[10% mb-[20px]'>{Brew.text}</p>
          <div>
            <button className='border-[#000000de] border-2 text-[#000000de] mb-5 px-4 py-2 rounded-full'>Get to fun</button>
          </div>
        </div>
      </section>
    
    <Categories />
    <BoxSextion  />
    <section className="">
    <BoxSection3  />
    </section>

   </div>
  )
}

export default Banner