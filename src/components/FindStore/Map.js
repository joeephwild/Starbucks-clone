import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const style = {
    wrapper: `flex-1 h-[100vh] overflow-hidden`,
  }

  mapboxgl.accessToken = ('pk.eyJ1Ijoiam9zZXBod2ViIiwiYSI6ImNsM3pjMnp5djEyMXkzYnF0NmZlYWhvOGgifQ.-h4WEnN0qYj2P0U0NQkc1Q')
const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/josephweb/cl3zg581z000114o51w32qnct',
          
    
          center: [-99.29011, 39.39172],
          zoom: 3,
        })
    
      }, [])
    
  return (
    <div className={style.wrapper} id='map'/>
  )
}

export default Map