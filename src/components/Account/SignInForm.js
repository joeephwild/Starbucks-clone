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
    <div className='w-full mt-28'>
      <span className='md:text-4xl  text-2xl text-[#000000de] justify-center items-center flex mb-8 font-bold text-center'>Sign in or create an account</span> 
        <form onSubmit={handleSubmit} className='mx-auto md:max-w-[600px] block py-[98px] rounded-lg shadow-md shadow-slate-300 space-y-8 px-[90px] '>
        
                  <div className='flex mt-28 flex-col mb-16 mx-auto'>
                  <label htmlFor='name' className="text-xl font-bold mt-6">Create Account</label>

                     <input 
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                      type="email" 
                      placeholder='*Email address' 
                      required
                     className='md:w-[30rem] w-[25rem] px-[16px] ml-[-1.6rem] mt-6 mr-[-1.6rem] border-[#00000094] border-2 rounded-lg h-16 ' />
                    
                   <input 
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   required
                    type="password" 
                     placeholder='*Password' 
                     className='md:w-[30rem] w-[25rem] px-4 border-[#00000094] mt-6 border-2 ml-[-1.6rem] mr-[-1.6rem] rounded-lg h-16' />
                     
                  </div>

                  <div className='flex flex-col space-y-6 my-16'>
                    <span className='text-[#00a862] font-bold mr-[20px] text-lg underline mb-7'>Forgot your username</span>
                    <span className='text-[#00a862] font-bold mr-[20px] text-lg underline mb-7'>Forgot your Password</span>
                  </div>
                  <button className="text-xl font-bold mb-[50px] bg-[#184733] ml-[50%] rounded-full px-5 py-4 text-[#fafafa]">Sign In</button>
         </form>
              
             <div className='flex flex-col bg-green-200/80 mx-[18%] rounded-lg p-[10px] justify-center items-center my-9'>
             <span className='text-[20px]'>JOIN STARBUCKS® REWARDS</span>
             <span className='text-[20px]  w-[30rem]'>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</span>
             <button className='text-[#000000de] border-2 border-[#000000de]  rounded-full px-3 py-2'>Join now</button>
             </div>
    </div>
  )
}

export default SignInForm