import React from 'react'
import Location from '../components/FindStore/Location'
import Map from '../components/FindStore/Map'
import Footer from '../components/HomeSreen/Footer'
import Navbar from '../components/HomeSreen/Navbar'

const FindStore = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 '>
        <Location />
        <Map />
        </div>
        <Footer />
    </div>
  )
}

export default FindStore