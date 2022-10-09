import React from 'react'
<<<<<<< HEAD
import { Fade } from 'react-reveal'
=======
>>>>>>> 49ab28f (login commit)
import { Section4 } from '../../data/MenuData'

const style = {
  wrapper: 'mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#006241]',
  image: "w-full md:my-5",
  textWrapper: 'max-w-[500px] flex font-Helvetica flex-col text-center items-center justify-center px-[9px] md:px-[20px]',
  heading: 'md:text-5xl max-w-[20rem] leading-8 tracking-wider text-[#fff]  font-bold mb-[20px]  uppercase',
  text: 'text-[22px] max-w-[25rem] text-[#fff] md:max-w-[23rem]  mb-[20px]',
  button: 'border-[#fff] border-2 text-[#fff] mb-5 px-4 py-2 rounded-full'
}

const BoxSection4 = () => {
  return (
<<<<<<< HEAD
    <Fade>
=======
    <>
>>>>>>> 49ab28f (login commit)
        <section className={style.wrapper}>
        <img src={Section4.image} className={style.image} alt="banner"/>
        <div className={style.textWrapper}>
          <h2 className={style.heading}>{Section4.heading}</h2>
          <p className={style.text}>{Section4.text}</p>
          <div>
            <button className={style.button}>{Section4.button}</button>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </Fade>
=======
    </>
>>>>>>> 49ab28f (login commit)
  )
}

export default BoxSection4