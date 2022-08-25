import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { LocationData } from '../../data/LocationData'

const Location = () => {
  return (
    <div className='flex flex-col mt-5 space-y-6 items-center px-4'>
      <div className="flex px-5 items-center rounded-md bg-{#fafafa} max-w-full cursor-pointer border-green-500 border-2">
        <FaSearch size={25} />
        <input type="text" placeholder='Lagos, NG' className=' flex-grow bg-transparent w-[40rem] h-10 rounded-lg focus:outline-none px-4' />
      </div>

      <div>
        {LocationData.map((detail, id) => {
          return <div key={id} className='flex flex-col mx-auto space-y-6 items-center'>
            <div className='flex border-b-2 space-x-36 justify-around items-center border-green-500 '>
              <div className='flex-col flex items-center'>
                <h3 className='text-sm w-[14rem] font-semibold'>{detail.location}</h3>
                <p className='text-sm'>{detail.closes}</p>
              </div>
              <div className='flex space-x-4 items-center'>
                <h3>{<detail.inactive size={25} />}</h3>
                <p>{<detail.info size={25} />}</p>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Location