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
    <div className='w-full'>
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
         </form>
    </div>
  )
}

export default SignInForm