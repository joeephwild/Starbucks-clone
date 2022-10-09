import React, { useState } from 'react'
<<<<<<< HEAD
=======
import {AiOutlineCheck, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
>>>>>>> 49ab28f (login commit)

const SignInForm = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
=======
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
>>>>>>> 49ab28f (login commit)

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
    `);
    event.preventDefault();
<<<<<<< HEAD
  }

  return (
    <div className='w-full md:mt-28'>
      <span className='md:text-4xl  text-2xl text-[#000000de] mt-9 justify-center items-center flex font-bold text-center'>Sign in or create an account</span> 
        <form onSubmit={handleSubmit} className='mx-auto md:max-w-[600px] w-full flex-col flex md:py-[98px] rounded-lg shadow-md shadow-slate-300 px-[40px] md:px-[90px] '>
        
                  <div className='flex mt-28 flex-col mb-16 mx-auto'>
                  <label htmlFor='name' className="text-sm mt-6">*indicate required field</label>

                     <input 
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                      type="email" 
                      placeholder='*Email address' 
                      required
                     className='md:w-[30rem] -ml-[1.6rem] -mr-[1.6rem] w-[23rem] px-4 mt-6 border-[#00000094] border-2 rounded-lg h-16 ' />
                    
                   <input 
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   required
                    type="password" 
                     placeholder='*Password' 
                     className='md:w-[30rem] w-[23rem] px-4 border-[#00000094] mt-6 border-2 ml-[-1.6rem] mr-[-1.6rem] rounded-lg h-16' />
                     
                  </div>

                    <span className='text-[#00a862] font-bold mr-[20px] text-sm underline mb-3'>Forgot your username</span>
                    <span className='text-[#00a862] font-bold mr-[20px] text-sm underline mb-3'>Forgot your Password</span>
                
                  <button className="md:text-xl font-bold justify-end flex px-4  bg-green-700 rounded-full  text-[#fafafa]">Sign In</button>
         </form>
              
             <div className='flex flex-col bg-green-200/90 px-[18%] rounded-lg py-[10px] justify-center items-center my-9'>
             <span className='md:text-[20px] text-green-700 text-sm'>JOIN STARBUCKS® REWARDS</span>
             <span className='md:text-[20px] text-[#000000de] mb-3 text-sm w-[25rem] md:w-[30rem] text-center'>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</span>
             <button className='text-[#000000de] border-2 mb-3 border-[#000000de]  rounded-full px-3 py-2'>Join now</button>
             </div>
    </div>
  )
=======
  };

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
  
>>>>>>> 49ab28f (login commit)
}

export default SignInForm