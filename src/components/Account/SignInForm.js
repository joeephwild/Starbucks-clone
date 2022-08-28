import React, { useState } from 'react'

const SignInForm = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
    `);
    event.preventDefault();
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
}

export default SignInForm