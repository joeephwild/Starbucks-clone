import React, { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

const style = {
    
    wrapper: `flex-1 mt-5  h-[100vh] relative overflow-hidden`,
  }

  mapboxgl.accessToken = ('pk.eyJ1Ijoiam9zZXBod2ViIiwiYSI6ImNsM3pjMnp5djEyMXkzYnF0NmZlYWhvOGgifQ.-h4WEnN0qYj2P0U0NQkc1Q')
const Map = () => {
    const [count, setCount] = useState(8)

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/josephweb/cl790v231001h15of3qboq1t9',
          
    
          center: [-99.29011, 39.39172],
          zoom: count,
        })
    
      }, [])
  return (
    <div>
        <div className={style.wrapper} id='map'/>
        <div className="flex flex-col absolute md:top-[55%] top-[80%] right-5">
            <button className="bg-[#fafafa] font-bold text-[#000000de] text-xl py-4 px-2 rounded-lg" onClick={() => setCount(count + 1)}>+</button>
            <button className="bg-[#fafafa] font-bold text-[#000000de] text-xl py-4 px-2 rounded-lg" onClick={() => setCount(count - 1)}>-</button>
        </div>
    </div>
    
  )
}

export default Map