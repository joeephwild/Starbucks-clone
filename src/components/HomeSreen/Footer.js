import React from 'react'
import { FaSpotify, FaFacebook, FaPinterest, FaInstagramSquare, FaYoutube, FaTwitter} from 'react-icons/fa'

const style = {
   wrapper: "justify-items-end hidden md:block border-gray-300 mt-[30px] border-y-2 w-[100%] px-[30px]",
   footernavWrap: 'grid  mb-[20px] mt-[20px] grid-cols-1 md:grid-cols-5 gap-8',
   nav: "flex flex-col items-center space-y-6",
   navHeading: 'text-xl font-bold',
   links: "text-gray-500 hover:text-gray-700 font-bold cursor-pointer text-sm",
   socialLinksWrap: 'flex ml-[20px] mt-5 flex-col space-y-5 ',
   bottomFooter: 'text-base hover:underline md:border-r-2 md:border-gray-300 md:border-spacing-4'
}

const Footer = () => {
  return (
    <div>
    <div className={style.wrapper}>
    
    <div className={style.footernavWrap}>
    
        <div className={style.nav}>
           <span className={style.navHeading}>About Us</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
        </div>
        <div className={style.nav}>
           <span className={style.navHeading}>About Us</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           
        </div>
        <div className={style.nav}>
        <span className={style.navHeading}>About Us</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           
        </div>
        <div className={style.nav}>
           <span className={style.navHeading}>About Us</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
        </div>

        <div className={style.nav}>
           <span className={style.navHeading}>About Us</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
           <span className={style.links}>Our Company</span>
        </div>
    </div>
    </div>
 {/* social links */}
    <div className={style.socialLinksWrap}>
        <div className='flex space-x-4'>
            <FaSpotify size={35} />
             <FaFacebook size={35} />
            <FaPinterest size={35} />
            <FaInstagramSquare size={35} />
            <FaYoutube size={35} />
            <FaTwitter size={35} />
        </div>
        <div className='md:flex block items-center cursor-pointer mt-5 mb-6 space-x-4'>
            <span className={style.bottomFooter}>Privacy Policy</span>
            <span className={style.bottomFooter}>Terms of use</span>
            <span className={style.bottomFooter}>CA supply Chain Acty</span>
            <span className={style.bottomFooter}>Cookie Preference</span>
        </div>
        <span className='mb-6'>Cloned by JOSEPH OMOTADE 2022</span>
    </div>
    </div>
  )
}

export default Footer