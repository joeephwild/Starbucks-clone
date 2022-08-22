import React from 'react'
import banner2 from '../assets/image3.webp';
import { BackToSchool } from '../data/MenuData';

const Categories = () => {
  return (
    <>
      <section className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#f8b878]'>
        <img src={banner2} className="w-full md:order-last" alt="banner"/>
        <div className='max-w-[500px] text-center justify-self-center px-[20px] m-auto'>
          <h2 className='md:text-5xl text-3xl max-w-[20rem] mr-[35px] font-[600] mb-[20px] tracking-[6px] uppercase'>{BackToSchool.heading}</h2>
          <p className='text-[24px] mb-[20px]'>{BackToSchool.text}</p>
          <a href='#'>
            <button>{BackToSchool.button}</button>
          </a>
        </div>
      </section>
    </>
  )
}

export default Categories