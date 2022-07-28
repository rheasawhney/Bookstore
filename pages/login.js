import React from 'react'
import Footer from '../components/common/footer'
import { LoginForm } from '../components/forms/loginForm'
import Navbar from '../components/home/navbar'

const Login = () => {
    return (
      <div>
      <Navbar/>
        <LoginForm />
      <Footer/>
      </div>
    )
}
 
export default Login