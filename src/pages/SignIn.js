import React from 'react'
import Navbar from '../components/Account/Navbar'
import Footer from '../components/Account/Footer'
import SignInForm from '../components/Account/SignInForm'

const SignIn = () => {
  return (
    <div>
        <Navbar />
        <SignInForm />
        <Footer />
    </div>
  )
}

export default SignIn