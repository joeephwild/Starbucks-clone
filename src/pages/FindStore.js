import React from 'react'
import Banner from '../components/FindStore/Banner'
import Location from '../components/FindStore/Location'
import Map from '../components/FindStore/Map'
import Navbar from '../components/HomeSreen/Navbar'

const FindStore = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <Banner />
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 max-h-screen '>
        <Location />
        <Map />
        </div>
    </div>
  )
}

export default FindStore