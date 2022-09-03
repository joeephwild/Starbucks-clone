import React from 'react'
import { Fade } from 'react-reveal';
import banner from '../../assets/b-img.jpg';
import BoxSection3 from './BoxSection3';
import BoxSextion from './BoxSextion';
import Categories from './Categories';
import BoxSection4 from './BoxSection4'

const style = {
  wrapper: 'mt-5 grid bg-[#d4e9e2] grid-cols-1 md:grid-cols-2 gap-3 ',
  image: "w-full ",
  text: ' tracking-normal leading-9 text-xl  w-[22rem]',
  textWrapper: 'max-w-full font-sodosans text-center text-[#2f4c39] justify-self-center p-[20px] m-auto',
  textHeading: 'md:text-xl font-bold text-[#2f4c39]  md:ml-[10%] mb-[20px] tracking-tight  uppercase',
  button: 'border-[#2f4c39] my-8 border-2 text-[#2f4c39] mb-5 px-4 py-2 rounded-full'
}

const Banner = () => {
  return (
    <Fade>
       <section className={style.wrapper}>
        <img src={banner} className={style.image} alt="banner"/>
        <div className={style.textWrapper}>
          <h2 className={style.textHeading}>Fall at your fingertips</h2>
          <p className={style.text}>Ordering your fall favorites is a snap with the app. Join Starbucks® Rewards and tap into fall.</p>
          <div>
            <button className={style.button}>Join now</button>
          </div>
        </div>
      </section>
    <Categories />
    <BoxSextion  />
    <section className="">
    <BoxSection3  />
    <BoxSection4  />
    </section>
   </Fade>
  )
}

export default Banner