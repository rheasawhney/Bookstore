import React from 'react'
import { Feedback } from '../components/about/feedback'
import { Info } from '../components/about/info'
import { Teamimage } from '../components/about/team'
import { BreadCrum } from '../components/common/breadcrum'
import UserLayout from '../components/common/layout'

 const About = () => {
  return (

    <UserLayout>
      <BreadCrum />
      <Info />
      <Feedback />
      <Teamimage />
    </UserLayout>
  )
}
export default About