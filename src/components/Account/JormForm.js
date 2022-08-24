import React from 'react'
import { Checkbox, CheckboxGroup, Input } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

const JormForm = () => {
  return (
    <>
       <div className="max-w-[30rem] overflow-x-hidden  mx-auto flex-col mt-24 flex  ">
         <h4 ></h4>
         <form className='mx-auto md:max-w-[800px] shadow-md shadow-slate-300 space-y-8 px-[90px] '>
            <p className="text-sm mb-8">* indicates required field</p>
            <label htmlFor='name' className="text-xl font-bold mt-6">Personal Information</label>

                <input 
                    type="text" 
                     placeholder='* First name' 
                     className='md:w-[30rem] w-[25rem]  px-4 border-gray-400 mt-6 border-2 ml-[-1.6rem] mr-[-1.6rem] rounded-lg h-16' />
                  
                  <input 
                    type="text" 
                     placeholder='* Last name' 
                     className='md:w-[30rem] w-[25rem]  px-4 border-gray-400 mt-6 border-2 ml-[-1.6rem] md:mr-[-1.6rem] rounded-lg h-16' />
                  <div className='flex mt-16 flex-col mx-auto'>
                  <label htmlFor='name' className="text-xl font-bold mt-6">Account Security</label>

                     <input 
                      type="email" 
                      placeholder='*Email address' 
                     className='md:w-[30rem] w-[25rem] px-[16px] ml-[-1.6rem] mt-6 mr-[-1.6rem] border-gray-400 border-2 rounded-lg h-16 ' />
                     <span className='text-sm font-semibold mr-[20%] text-gray-500'>This will be your username</span>
                   <input 
                    type="password" 
                     placeholder='*Password' 
                     className='md:w-[30rem] w-[25rem] px-4 border-gray-400 mt-6 border-2 ml-[-1.6rem] mr-[-1.6rem] rounded-lg h-16' />
                     <span className='text-sm font-semibold md:w-[28rem] text-gray-500'>Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</span>
                  </div>
                
               <div className='flex flex-col items-center mt-16'>
                <span className='text-[#00a862] font-bold mr-[20px] text-sm underline mb-7'>Already have a Starbucks gift card?</span>
                <span className='text-sm text-[#00000094] mr-[20px] leading-[.1em] uppercase font-bold mb-[2.4rem]'>COLLECT MORE STARS & EARN REWARDS</span>
                <span className='text-sm text-[#000000de] font-semibold block mb-[2.4rem]'>Email is a great way to know about offers and what’s new from Starbucks.</span>

                <div className='flex space-x-3 py-[10px] text-[#00000094] items-center'>
                <Checkbox 
                size="lg"
                borderRadius="3xl"
                colorScheme="green"
                className='text-[#00000094] text-sm' 
                animation="ease-in">Yes, I’d like email from Starbucks</Checkbox>
                  <p ></p>
                  
                </div>
                <p className='text-[#000000de] text-sm'>Know about initiatives, announcements and product offers.</p>
               </div>
         </form>
       </div>
    </>
  )
}

export default JormForm