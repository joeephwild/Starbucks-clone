import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const style = {}

const JormForm = ({setPassword, setFirstName, setLastName, setEmail, email, password, firstName, lastName }) => {
  const { register, handleSubmit, watch, formState: {errors}} = useForm();
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(AiOutlineEyeInvisible);

    //handle password icon toogle
    const handleToogle = () => {
      if(type === 'password'){
        setType('text')
        setIcon(AiOutlineEye)
      }else {
        setType('password')
        setIcon(AiOutlineEyeInvisible)
      }
      
    }
  return (
    <>
       <div className='max-w-[500px] !mx-auto pb-[4.2rem]'>
         
         <form onSubmit={handleSubmit} className={style.formWrap}>
          <div className='mx-auto  space-y-4 '>
          <p className='text-sm font-medium mb-3 text-[#000] m-0'>* indicates required field</p>
            <span className='text-[15px] mb-3 font-semibold text-[#000]' >
              Personal Information
              </span>
              <div className='block space-y-4 mb-[-1.6rem] '>
              <div className='flex relative  items-center'>
              <input 
              {...register({firstName})}
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                    type="text" 
                    name={firstName}
                    aria-required='true'
                     placeholder='' 
                     className='bg-transparent h-14 focus:border-[#006241]  w-full  outline-none border-2  border-gray-400 rounded-lg px-6' />
                     <label className='input-text text-sm absolute mx-6 px-6  transition duration-200 left-0 top-4 cursor-text font-bold text-[#000]' htmlFor='name'>
                   *First name
              </label>
              </div>

              <div className='flex relative items-center'>
              <input 
              name={lastName}
              {...register({lastName})}
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                    type="text" 
                     placeholder='' 
                     className='bg-transparent px-6 h-14 focus:border-[#006241] w-full  outline-none border-2  border-gray-400 rounded-lg ' />
                     <label className='input-text text-sm absolute top-4 left-0 mx-6 px-6  transition duration-200 cursor-text  font-bold text-[#000]' htmlFor='name'>
              *Last name
              </label>
              </div>
              </div>
               </div>
                     {/* account security section */}
                  <div className='mt-9 space-y-6'>
                  <span htmlFor='name' className='text-[15px] mb-3 font-semibold text-[#000]' >Account Security</span>
                   <div className='flex relative items-center'>
                   <input 
                   name={email}
                   {...register({email}, { required: true, maxLength: 20 })}
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                      type="email" 
                      placeholder='' 
                      required
                      className='bg-transparent px-6 h-14 focus:border-[#006241] w-full  outline-none border-2  border-gray-400 rounded-lg ' />
                       <label className='input-text text-sm absolute top-4 left-0 mx-6 px-6  transition duration-200 cursor-text  font-bold text-[#000]' htmlFor='name'>*Email address</label>
                   </div>
                   <span className='pt-2 m-0 tracking-tight text-sm font-semibold font-sodosans text-[#000]'>This will be your username</span>
                   <div className='flex relative items-center'>
                   <input 
                   {...register({password}, { required: true,
                     minLength: 10, 
                     pattern: {value:A-Za-z1-9}})}
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   required
                   name={password}
                    type={type} 
                     placeholder='' 
                     className='bg-transparent px-6 h-14 focus:border-[#006241] w-full  outline-none border-2  border-gray-400 rounded-lg ' />
                      <label className='input-text text-sm absolute top-4 left-0 mx-6 px-6  transition duration-200 cursor-text  font-bold text-[#000]' htmlFor='name'>*Password</label>
                      <div onClick={handleToogle} className='absolute text-xl h-5 w-5 top-3 right-4'>
                        {icon}
                      </div>
                   </div>
                   {errors.password && 
                   <div>
                    <p>from 8 to 25 characters</p>
                   <p>At least one number</p>
                   <p>At least one capital letter</p>
                   <p>At least one lowercase letter</p>
                   <p>At least one special character character such as exclamation point or comma</p>
                   </div>
                   
                   }
                     <span className='pt-2 m-0  text-sm tracking-tight font-semibold text-[#000]'>
                     Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter,
                      1 number and 1 special character like an exclamation point or asterisk.
                      </span>
                  </div>
                
               <div className='pb-[4rem] mt-6 space-y-5' >
                <button className='min-w-[4px] min-h-[24px] font-bold underline bg-transparent text-[#006241] text-sm'>Already have a Starbucks gift card?</button>
                <div className='mt-9 !pt-[.8rem] !pr-[.4rem] pl-[44px] space-y-6'>
                  <span  className='text-[15px] mb-3 font-semibold text-[#000]' >Add your gift card to earn stars when you pay and order ahead.</span>
                   <div className='flex relative items-center'>
                   <input 
                      type="text" 
                      placeholder='' 
                      required
                      className='bg-transparent px-6 h-14 focus:border-[#006241] w-full  outline-none border-2  border-gray-400 rounded-lg ' />
                       <label className='input-text text-sm absolute top-4 left-0 mx-6 px-6  transition duration-200 cursor-text  font-bold text-[#000]' htmlFor='name'>Card number (16 digit)</label>
                   </div>
                   <span className='pt-2 m-0 tracking-tight text-sm font-semibold font-sodosans text-[#000]'>No spaces or dashes</span>
                   <div className='flex relative items-center'>
                   <input 
                   required
                    type="text" 
                     placeholder='' 
                     className='bg-transparent px-6 h-14 focus:border-[#006241] w-full  outline-none border-2  border-gray-400 rounded-lg ' />
                      <label className='input-text text-sm absolute top-4 left-0 mx-6 px-6  transition duration-200 cursor-text  font-bold text-[#000]' htmlFor='name'>Security code</label>
                   </div>
                     <span className='pt-2 m-0  text-sm tracking-tight font-semibold text-[#000]'>
                     Scrach to reveal 8 digit-code
                      </span>
                  </div>
                <div className='mt-7 flex flex-col space-y-3'>
                  <span className='!text-sm font-bold tracking-wide !uppercase  text-gray-400'>COLLECT MORE STARS & EARN REWARDS</span>
                <span className='text-sm font-bold tracking-tight text-[#000]'>Email is a great way to know about offers and what’s new from Starbucks.</span>
                <label  className='flex cursor-pointer space-x-2  items-center pt-5'>
                  <input  type='checkbox' className='h-8 w-8 checked:bg-[#006241] relative  cursor-pointer rounded-lg border-gray-400 appearance-none border-2' />
                  <div className='check-1 absolute text-[#000]  transition duration-200 left-4 top-0'>
                  <AiOutlineCheck color='white' size={25}  />
                  </div>
                  <div className='text-sm font-bold text-[#000]'>Yes, i'd like email from Starbucks.</div>
                </label>
                <p>Know about initiatives, announcements and product offers.</p>
                </div>
                <div >
                </div>

                
               </div>

                    {/* terms of use */}
                   
                     <span>TERMS OF USE</span>
                     <div className='flex cursor-pointer items-center pt-5' >
                     <label  >
                  <input  type='checkbox' className='h-8 w-8 mb-11 checked:bg-[#006241] relative  cursor-pointer rounded-lg border-gray-400 appearance-none border-2' />
                  <div className='check-1 absolute text-[#fafafa] text-opacity-0 transition duration-200 left-4 top-0'>
                   ✔
                  </div>
                </label>
                <div className='text-[15px] pl-[20px] pb-4 font-medium tracking-tight text-[#000]'>I agree to <span className='text-[#00754a] underline'> the 
                        Starbucks® Rewards Terms</span>opens in new window and the<span className='text-[#00754a] underline'>Starbucks Card Terms</span>
                        opens in new window and have read the<span className='text-[#00754a] underline'>Starbucks Privacy Statement</span>
                        opens in new window</div> 
               </div>
               <div className='!justify-end mt-[4rem] !flex'>
               <button type='submit' className='bg-[#00754a] py-3 rounded-full text-center px-9 text-xl font-bold shadow-xl shadow-gray-300 transition ease text-[#fff]' >Create account</button>
               </div>
         </form>
       </div>
    </>
  )
}

export default JormForm