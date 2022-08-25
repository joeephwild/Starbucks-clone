import React, { useState } from 'react'
import Footer from '../components/Account/Footer'
import JoinNowForm from '../components/Account/JoinNowForm'
import Navbar from '../components/Account/Navbar'

const JoinNow = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
      FirstName: ${firstName}
      LastName: ${lastName}
    `);
    event.preventDefault();
  }

  return (
    <div className='overflow-x-hidden'>
        <Navbar />

        <div className='flex flex-col items-center justify-center mt-6 w-full'>
            <h3 className="text-3xl font-bold">Create an account</h3>
            <p className='text-sm mt-7 font-semibold text-gray-600'>STARBUCKS® REWARDS</p>
            <p className='text-xs mt-7 font-thin text-gray-500 w-[25rem] mx-11 md:w-[37rem] text-center'>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and more.
                 </p>
        </div>

        <JoinNowForm 
        email={email}
        password={password}
        firstName={firstName}
        lastName={lastName}
        setLastName={setLastName} 
        setFirstName={setFirstName} 
        setPassword={setPassword}
        setEmail={setemail}
        handleSubmit={handleSubmit}
         />

        <Footer />
    </div>
  )
}

export default JoinNow