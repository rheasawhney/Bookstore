import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Banner } from '../components/Banner'
import { Category } from '../components/categories'
import Navbar from '../components/navbar'
import { logoUrl } from '../public/constants/url'
import styles from '../styles/Home.module.css'
import { Popular } from '../components/Popular'
import { FeaturedContainer } from '../components/Featured'

export default function Home() {
  return (
    <main>
      <Head>
        <title>
          Bookstore | Home
        </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link href={logoUrl} rel='icon'></link>
        </Head>
      <Navbar></Navbar>
      <Banner></Banner>
      <Category></Category>
      <FeaturedContainer></FeaturedContainer>
      <Popular></Popular>

    </main>
    
  )
}
