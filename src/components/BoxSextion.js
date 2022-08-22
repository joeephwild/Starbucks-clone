import React from 'react'
import { Summer } from '../data/MenuData'

const BoxSextion = ({ heading, text, button, image}) => {
  return (
    <div>
        <section className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#fa91aa]'>
        <img src={Summer.image} className="w-full md:my-5" alt="banner"/>
        <div className='max-w-[500px] text-center justify-self-center px-[20px] m-auto'>
          <h2 className='md:text-5xl text-3xl md:max-w-[28rem] md:ml-[10%] font-semibold mb-[20px] tracking-[6px] uppercase'>{Summer.heading}</h2>
          <p className='text-[24px] md:max-w-[28rem] md:ml-[10% mb-[20px]'>{Summer.text}</p>
          <div>
            <button className='border-[#000000de] border-2 text-[#000000de] mb-5 px-4 py-2 rounded-full'>{Summer.button}</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BoxSextion