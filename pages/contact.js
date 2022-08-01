import React from 'react'
import Navbar from '../components/home/navbar'
import { BreadCrum } from '../components/common/breadcrum'
import Footer from '../components/common/footer'
import { ContactInfo } from '../components/contact/info'


const Contact = () => {
    return (
      <div>
      <Navbar/>
      <div>
        <BreadCrum pageName={"Contact Us"}></BreadCrum>
        <ContactInfo></ContactInfo>
      </div>
      <Footer/>
      </div>
    )
}
 
export default Contact