import React from 'react'
import { Fade } from 'react-reveal';

import { BackToSchool } from '../../data/MenuData';

const style = {
  wrapper: 'mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#2f4c39]',
  image: "w-full md:order-last",
  textWrapper: 'max-w-[500px] py-12 text-center justify-self-center px-[8px] md:px-[20px]',
  heading: 'md:text-5xl text[#fff] text-xl md:max-w-[28rem] md:ml-[10%] font-semibold mb-[20px] leading-5 tracking-[6px] uppercase',
  text: 'text-[24px] max-w-[33rem] md:max-w-[28rem] md:ml-[10%] mb-[20px]',
  button: 'border-[#fff] border-2 text-[#fff] px-4 py-2 rounded-full'
}

const Categories = () => {
  return (
    <Fade>
      <section className={style.wrapper}>
        <img src={BackToSchool.image} className={style.image} alt="banner"/>
        <div className={style.textWrapper}>
          <h2 className={style.heading}>{BackToSchool.heading}</h2>
          <p className={style.text}>{BackToSchool.text}</p>
          <div>
            <button className={style.button}>{BackToSchool.button}</button>
          </div>
        </div>
      </section>
    </Fade>
  )
}

export default Categories