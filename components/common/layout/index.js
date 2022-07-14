import React from 'react'
import Navbar from '../../home/navbar'
import { HeadComponent } from '../head'
import { logoUrl } from '../../../public/constants/url'
import Footer from '../footer'

const UserLayout = ({children}) => {
  return (
    <div>
      <HeadComponent title="Bookstore | Home" icon={logoUrl} />
      <Navbar/>
      {children}
      <Footer />
    </div>
  )
}

export default UserLayout