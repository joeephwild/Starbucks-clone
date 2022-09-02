import React from 'react'
import { Fade } from 'react-reveal'
import { Brew } from '../../data/MenuData'

const style = {
  wrapper: 'mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#2f4c39]',
  image: "w-full md:order-last md:my-5",
  textWrapper: 'max-w-[500px] text-center justify-self-center px-[9px] md:px-[20px]',
  heading: 'md:text-5xl text-[#fafafa] font-semibold text-lg md:max-w-[28rem] md:ml-[10%] md:font-semibold mb-[20px] tracking-[6px] uppercase',
  text: 'text-[24px] text-[#fafafa] font-semibold md:max-w-[28rem] md:ml-[10% mb-[20px]',
  button: 'border-[#fafafa] border-2 text-[#fafafa] mb-5 px-4 py-2 rounded-full'
}

const BoxSection3 = () => {
  return (
    <Fade>
        <section className={style.wrapper}>
        <img src={Brew.image} className={style.image} alt="banner"/>
        <div className={style.textWrapper}>
          <h2 className={style.heading}>{Brew.heading}</h2>
          <p className={style.text}>{Brew.text}</p>
            <button className={style.button}>{Brew.button}</button>
        </div>
      </section>
    </Fade>
  )
}

export default BoxSection3