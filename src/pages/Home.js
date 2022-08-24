import React from 'react'
import Banner from '../components/HomeSreen/Banner'
import Footer from '../components/HomeSreen/Footer'
import Navbar from '../components/HomeSreen/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
        <Banner />
        <Footer />
    </div>
  )
}

export default Home