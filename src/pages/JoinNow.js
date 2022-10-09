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
    <div className='overflow-x-hidden '>
        <Navbar />
<div className='max-w-[500px] !mx-auto font-sodosans pt-[2.6rem] !px-[1.6rem] box-content'>
<div className='box-border'>
            <h3 className="text-2xl font-bold">Create an account</h3>
            <p className='text-sm hidden font-normal'>STARBUCKS® REWARDS</p>
            <p className='text-sm tracking-tight font-medium pt-[1.2rem] pb-[3.2rem] text-[rgba(0,0,0,.58)]'>
              Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay.
               Get access to mobile ordering, a birthday Reward, and more.
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
</div>
        <Footer />
    </div>
  )
}
