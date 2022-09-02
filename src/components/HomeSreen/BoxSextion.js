import React from 'react'
import { Fade } from 'react-reveal'
import { Summer } from '../../data/MenuData'

const style = {
  wrapper: 'mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#2f4c39]',
  image: "w-full md:my-5",
  textWrapper: 'max-w-[500px] text-center justify-self-center px-[9px] md:px-[20px]',
  heading: 'md:text-5xl text-lg md:max-w-[28rem] md:ml-[10%] text-[#fff] font-semibold mb-[20px] tracking-[6px] uppercase',
  text: 'text-[24px] md:max-w-[28rem] md:ml-[10% mb-[20px]',
  button: 'border-[#fff] border-2 text-[#fff] mb-5 px-4 py-2 rounded-full'
}

const BoxSextion = () => {
  return (
    <Fade>
        <section className={style.wrapper}>
        <img src={Summer.image} className={style.image} alt="banner"/>
        <div className={style.textWrapper}>
          <h2 className={style.heading}>{Summer.heading}</h2>
          <p className={style.text}>{Summer.text}</p>
          <div>
            <button className={style.button}>{Summer.button}</button>
          </div>
        </div>
      </section>
    </Fade>
  )
}

export default BoxSextion