import React from 'react'
import { Checkbox} from '@chakra-ui/react'

const JormForm = ({ handleSubmit, setPassword, setFirstName, setLastName, setEmail, email, password, firstName, lastName }) => {
  return (
    <>
       <div className="md:max-w-[100vw] max-w-[100vw] mb-[60px] flex-col mt-6 md:mt-16 flex   ">
         
         <form onSubmit={handleSubmit} className=' md:max-w-[600px] px-[60px] md:px-[80px] mx-auto  py-[98px]  rounded-lg shadow-md shadow-slate-300 space-y-8'>
            <p className="text-sm mb-8">* indicates required field</p>
            <label htmlFor='name' className="text-xl font-bold mt-6">Personal Information</label>
                <input 
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                    type="text" 
                     placeholder='*First name' 
                     className='md:w-[30rem] w-[25rem]  px-4 border-[#00000094] mt-6 border-2 ml-[-1.6rem] mr-[-1.6rem] rounded-lg h-16' />
                  <input 
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                    type="text" 
                     placeholder='*Last name' 
                     className='md:w-[30rem] w-[25rem]  px-4 border-[#00000094] mt-6 border-2 ml-[-1.6rem] md:mr-[-1.6rem] rounded-lg h-16' />

                     {/* account security section */}
                  <div className='flex mt-28 flex-col mb-16 mx-auto'>
                  <label htmlFor='name' className="text-xl font-bold mt-6">Account Security</label>

                     <input 
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                      type="email" 
                      placeholder='*Email address' 
                      required
                     className='md:w-[30rem] w-[25rem] px-[16px] ml-[-1.6rem] mt-6 mr-[-1.6rem] border-[#00000094] border-2 rounded-lg h-16 ' />
                     <span className='text-sm font-semibold mr-[20%] text-gray-500'>This will be your username</span>
                   <input 
                   value={password}
                   onChange={e => setPassword(e.target.value)}
                   required
                    type="password" 
                     placeholder='*Password' 
                     className='md:w-[30rem] w-[25rem] px-4 border-[#00000094] mt-6 border-2 ml-[-1.6rem] mr-[-1.6rem] rounded-lg h-16' />
                     <span className='text-sm font-semibold md:w-[28rem] text-center text-gray-500'>Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.</span>
                  </div>
                
               <div className='flex flex-col mx-auto mt-16'>
                <span className='text-[#00a862] font-bold mr-[20px] text-lg underline mb-7'>Already have a Starbucks gift card?</span>
                <span className='text-sm text-[#00000094] mr-[20px] leading-[.1em] uppercase font-bold mb-[2.4rem]'>COLLECT MORE STARS & EARN REWARDS</span>
                <span className='text-sm text-[#000000de] font-semibold block mb-[2.4rem]'>Email is a great way to know about offers and what’s new from Starbucks.</span>

                <div className='flex space-x-3 py-[10px] text-[#00000094] items-center'>
                <Checkbox 
                size="lg"
                borderRadius="3xl"
                colorScheme="green"
                className='text-[#00000094] text-sm' 
                animation="ease-in">Yes, I’d like email from Starbucks</Checkbox>
                  
                </div>
                <p className='text-[#000000de] text-center mt-3 text-sm'>Know about initiatives, announcements and product offers.</p>
               </div>

                    {/* terms of use */}
                     <span className='text-[#00000094] py-16 text-lg'>TERMS OF USE</span>
                     <div className='flex items-center my-[60px] px-5 space-y-7 mx-auto'>
                
                      <Checkbox
                         size="lg"
                        iconColor='black'
                        iconSize="30px"
                        borderRadius="3xl"
                       colorScheme="green"
                       animation="ease-in" >
                       </Checkbox>
                       <span className='text-[#00000094] my-16 text-sm'>I agree to <span className='text-[#00a862] font-bold mr-[20px] text-sm underline mb-7'> the 
                        Starbucks® Rewards Terms</span>opens in new window and the<span className='text-[#00a862] font-bold mr-[20px] text-sm underline mb-7'>Starbucks Card Terms</span>
                        opens in new window and have read the<span className='text-[#00a862] font-bold text-sm underline'>Starbucks Privacy Statement</span>
                        opens in new window</span>  
               </div>
               <button className="text-xl font-bold mb-[50px] bg-[#184733] ml-[50%] rounded-full px-5 py-4 text-[#fafafa]">Create account</button>
         </form>
       </div>
    </>
  )
}

export default JormForm