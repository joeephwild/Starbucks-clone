import React from 'react'
import { Brew } from '../../data/MenuData'

const BoxSection3 = () => {
  return (
    <div>
        <section className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#f06464]'>
        <img src={Brew.image} className="w-full md:order-last md:my-5" alt="banner"/>
        <div className='max-w-[500px] text-center justify-self-center px-[20px] m-auto'>
          <h2 className='md:text-5xl text-[#fafafa] text-3xl md:max-w-[28rem] md:ml-[10%] font-semibold mb-[20px] tracking-[6px] uppercase'>{Brew.heading}</h2>
          <p className='text-[24px] text-[#fafafa] font-semibold md:max-w-[28rem] md:ml-[10% mb-[20px]'>{Brew.text}</p>
          <div>
            <button className='border-[#000000de] border-2 text-[#000000de] mb-5 px-4 py-2 rounded-full'>{Brew.button}</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BoxSection3