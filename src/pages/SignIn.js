import React from 'react'
import Navbar from '../components/Account/Navbar'
import Footer from '../components/Account/Footer'
import SignInForm from '../components/Account/SignInForm'

const SignIn = () => {
  return (
    <div>
        <Navbar />
<<<<<<< HEAD
        <SignInForm />
=======
        <div className='!max-w-[500px] !mx-auto pt-[2.6rem] !px-[1.6rem] box-content'>
          <div className='box-border'>
          <h3 className="text-2xl mb-6 mt-4 font-bold">Sign in or create an account</h3>
            <SignInForm />
          </div>
        </div>
>>>>>>> 49ab28f (login commit)
        <Footer />
    </div>
  )
}

export default SignIn