import React from 'react'
<<<<<<< HEAD
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
=======
import UserLayout from '../components/common/layout'

const About = () => {
  return (
    <UserLayout>
        <div>about</div>
    </UserLayout>
  )
}

>>>>>>> 7fae3ea (Accepted)
export default About