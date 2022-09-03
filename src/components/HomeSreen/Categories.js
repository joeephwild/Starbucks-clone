import React from 'react'
import { Fade } from 'react-reveal';

import { BackToSchool } from '../../data/MenuData';

const style = {
  wrapper: 'mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#006241]',
  image: "w-full pt-[14px] md:order-last",
  textWrapper: 'max-w-[500px] text-center flex flex-col font-sodosans py-12 items-center justify-center py-[3.2rem]',
  heading: 'md:text-5xl max-w-[20rem] leading-[6px] text-[#fff]  font-bold mb-[20px]  uppercase',
  text: 'text-[22px] max-w-[25rem] text-[#fff] md:max-w-[23rem]  mb-[20px]',
  button: 'border-[#fff] border-2 text-[#fff] px-4 py-2 rounded-full'
}

const Categories = () => {
  return (
    <Fade>
      <section className={style.wrapper}>
        <img src={BackToSchool.image} className={style.image} alt="banner"/>
        <div className={style.textWrapper}>
          <h2 className={style.heading} >{BackToSchool.heading}</h2>
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