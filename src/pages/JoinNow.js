import React from 'react'
import JormForm from '../components/Account/JormForm'
import Navbar from '../components/Account/Navbar'

const JoinNow = () => {
  return (
    <div>
        <Navbar />

        <div className='flex flex-col items-center justify-center mt-6 w-full'>
            <h3 className="text-3xl font-bold">Create an account</h3>
            <p className='text-sm mt-7 font-semibold text-gray-600'>STARBUCKS® REWARDS</p>
            <p className='text-xs mt-7 font-thin text-gray-500 w-[37rem] text-center'>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and more.
                 </p>
        </div>

        <JormForm />
    </div>
  )
}

export default JoinNow