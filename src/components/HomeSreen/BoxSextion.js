import React from 'react'
import { Summer } from '../../data/MenuData'

const style = {
  wrapper: 'mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#006241]',
  image: "w-full md:my-5",
  textWrapper: 'max-w-[500px] flex font-Helvetica flex-col text-center items-center justify-center px-[9px] md:px-[20px]',
  heading: 'md:text-5xl max-w-[20rem] leading-8 tracking-wider text-[#fff]  font-bold mb-[20px]  uppercase',
  text: 'text-[22px] max-w-[25rem] text-[#fff] md:max-w-[23rem]  mb-[20px]',
  button: 'border-[#fff] border-2 text-[#fff] mb-5 px-4 py-2 rounded-full'
}

const BoxSextion = () => {
  return (
    <>
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
      </>
  )
}

export default BoxSextion