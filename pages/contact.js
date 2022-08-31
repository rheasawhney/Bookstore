import React from 'react'
import Navbar from '../components/home/navbar'
import Footer from '../components/common/footer'
import { ContactInfo } from '../components/contact/info'


const Contact = () => {
    return (
      <div>
      <Navbar/>
      <div>
        <ContactInfo></ContactInfo>
      </div>
      <Footer/>
      </div>
    )
}
 
export default Contact