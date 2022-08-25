import React, { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

const style = {
    
    wrapper: `flex-1 h-[100vh] relative overflow-hidden`,
  }

  mapboxgl.accessToken = ('pk.eyJ1Ijoiam9zZXBod2ViIiwiYSI6ImNsM3pjMnp5djEyMXkzYnF0NmZlYWhvOGgifQ.-h4WEnN0qYj2P0U0NQkc1Q')
const Map = () => {
    const [count, setCount] = useState(8)

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/josephweb/cl3zg581z000114o51w32qnct',
          
    
          center: [-99.29011, 39.39172],
          zoom: {count},
        })
    
      }, [])
    
  return (
    <div>
        <div className={style.wrapper} id='map'/>
        <div className="flex justify-between items-center">
            <button className="bg-green-600 font-bold text-white px-4 py-2 roundedlg" onClick={() => setCount(count + 1)}>+</button>
            <button className="bg-green-600 font-bold text-white px-4 py-2 roundedlg" onClick={() => setCount(count - 1)}>-</button>
        </div>
    </div>
    
  )
}

export default Map