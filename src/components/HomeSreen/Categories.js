import React from 'react'
import { Fade } from 'react-reveal';

import { BackToSchool } from '../../data/MenuData';

const Categories = () => {
  return (
    <Fade>
      <section className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#f8b878]'>
        <img src={BackToSchool.image} className="w-full md:order-last" alt="banner"/>
        <div className='max-w-[500px] text-center justify-self-center px-[20px] m-auto'>
          <h2 className='md:text-5xl text-3xl md:max-w-[28rem] md:ml-[10%] font-semibold mb-[20px] tracking-[6px] uppercase'>{BackToSchool.heading}</h2>
          <p className='text-[24px] md:max-w-[28rem] md:ml-[10% mb-[20px]'>{BackToSchool.text}</p>
          <div>
            <button className='border-[#000000de] border-2 text-[#000000de] px-4 py-2 rounded-full'>{BackToSchool.button}</button>
          </div>
        </div>
      </section>
    </Fade>
  )
}

export default Categories