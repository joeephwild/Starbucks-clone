import React from 'react'
import { Fade } from 'react-reveal';
import banner from '../../assets/b-img.jpg';
import BoxSection3 from './BoxSection3';
import BoxSextion from './BoxSextion';
import Categories from './Categories';

const style = {
  wrapper: 'mt-5 grid transition-all ease-in-out bg-[#d4e9e2] delay-300 grid-cols-1 md:grid-cols-2 gap-3 ',
  image: "w-full h-[300px] ",
  textWrapper: 'max-w-full text-center justify-self-center p-[20px] m-auto',
  textHeading: 'md:text-5xl font-extrabold text-[#2f4c39] text-[13px] md:max-w-[28rem] md:ml-[10%] mb-[20px] tracking-[6px] text-white uppercase',
  button: 'border-[#2f4c39] my-8 border-2 text-[#2f4c39] mb-5 px-4 py-2 rounded-full'
}

const Banner = () => {
  return (
    <Fade>
       <section className={style.wrapper}>
        <img src={banner} className={style.image} alt="banner"/>
        <div className={style.textWrapper}>
          <h2 className={style.textHeading}>Fall at your fingertips</h2>
          <p>Ordering your fall favorites is a snap with the app. Join Starbucks® Rewards and tap into fall.</p>
          <div>
            <button className={style.button}>Join starbucks rewards</button>
          </div>
        </div>
      </section>
    <Categories />
    <BoxSextion  />
    <section className="">
    <BoxSection3  />
    </section>
   </Fade>
  )
}

export default Banner