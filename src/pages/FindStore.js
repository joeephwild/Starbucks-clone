import React from 'react'
import Location from '../components/FindStore/Location'
import Map from '../components/FindStore/Map'

const FindStore = () => {
  return (
    <div className='grid grid-cols-2 '>
        <Location />
        <Map />
    </div>
  )
}

export default FindStore