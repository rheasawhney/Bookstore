import React from 'react'
import { Feedback } from '../components/about/feedback'
import { Info } from '../components/about/info'
import { Team, Teamimage } from '../components/about/team'
import { BreadCrum } from '../components/common/breadcrum'
import Footer from '../components/common/footer'
import Navbar from '../components/home/navbar'


 const About = () => {
  return (
    <div>
    <Navbar/>
    <div>
      <BreadCrum></BreadCrum>
      <Info></Info>
      <Feedback></Feedback>
      <Teamimage></Teamimage>
      
    </div>
  

    <Footer/>
    </div>
  )
}
export default About