import React from 'react'
import { Feedback } from '../components/about/feedback'
import { Info } from '../components/about/info'
import { Teamimage } from '../components/about/team'
import {BreadCrum} from "../components/common/breadCrum/index";
import UserLayout from '../components/common/layout'

 const About = () => {
  return (

    <UserLayout>
      <BreadCrum pageName={"About"} />
      <Info />
      <Feedback />
      <Teamimage />
    </UserLayout>
  )
}
export default About