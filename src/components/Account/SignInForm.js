import React, { useState } from 'react'
import {AiOutlineCheck, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const SignInForm = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(AiOutlineEyeInvisible);

  //handle password icon toogle
  const handleToogle = () => {
    if(type === 'password') {
      setIcon(AiOutlineEye);
      setType('text')
    }
    else {
      setIcon(AiOutlineEyeInvisible);
      setType('password')
    }
  }

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
    `);
    event.preventDefault();
  }
    return <div className='max-w-[500px] !mx-auto pb-[4.2rem]'>
    <form>
     <p className='text-sm font-medium mb-3 mt-3 text-[#000] m-0'>* indicates required field</p>
    <div className='block space-y-4 mb-[-1.6rem] '>
    <div className='flex relative  items-center'>
    <input 
      value={email}
      onChange={e => setEmail(e.target.value)}
          type="text" 
          aria-required='true'
           placeholder='' 
           className='bg-transparent h-14 focus:border-[#006241]  w-full  outline-none border-2  border-gray-400 rounded-lg px-6' />
           <label className='input-text text-lg absolute mx-6 px-6  transition duration-200 left-0 top-4 cursor-text font-bold text-[#000]' htmlFor='name'>
         *Username or email address
    </label>
    </div>

    <div className='flex relative items-center'>
    <input 
        value={password}
        onChange={e => setPassword(e.target.value)}
          type={type} 
           placeholder='' 
           className='bg-transparent px-6 h-14 focus:border-[#006241] w-full  outline-none border-2  border-gray-400 rounded-lg ' />
           <label className='input-text text-lg absolute top-4 left-0 mx-6 px-6  transition duration-200 cursor-text  font-bold text-[#000]' htmlFor='name'>
    *Password
    </label>
    <div onClick={handleToogle} className='absolute text-xl h-5 w-5 top-3 right-4'>
                       {icon}
                     </div>
    </div>
    <label  className='flex cursor-pointer space-x-2  items-center pt-5'>
                 <input  type='checkbox' className='h-8 w-8 checked:bg-[#006241] relative  cursor-pointer rounded-lg border-gray-400 appearance-none border-2' />
                 <div className='check-1 absolute text-[#000]  transition duration-200 left-4 top-0'>
                 <AiOutlineCheck color='white' size={25}  />
                 </div>
                 <div className='text-sm font-bold text-[#000] flex space-x-3'>Keep me signed in. <span className='text-[#006241] text-sm underline font-black'>Details</span></div>
               </label>
               <div className='flex flex-col'>
               <span className='text-[#006241] text-lg underline'>Forgot your username?</span>
               <span className='text-[#006241] text-lg underline'>Forgot your password?</span>
               <div className='!justify-end mt-[4rem] !flex'>
              <button type='submit' className='bg-[#00754a] py-3 rounded-full text-center px-9 text-xl font-bold shadow-xl shadow-gray-300 transition ease text-[#fff]' >Sign in</button>
              </div>
               </div>
               
    </div>
   
    </form>
    <div className='!mx-auto'>
     <span className='text-sm font-bold text-center text-[#006241]'>JOIN STARBUCKS REWARDS</span>
     <span>
       Join Starbucks® Rewards to earn free food and drinks, 
       get free refills, 
       pay and order with your phone, and more.
       </span>
    </div>
   </div>
};

export default SignInForm