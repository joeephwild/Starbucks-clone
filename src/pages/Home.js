import React from 'react'
import Banner from '../components/HomeSreen/Banner'
import Footer from '../components/HomeSreen/Footer'
import FooterSecondary from '../components/HomeSreen/FooterSecondary'
import Navbar from '../components/HomeSreen/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
        <Banner />
        <FooterSecondary />
        <Footer />
    </div>
  )
}

export default Home