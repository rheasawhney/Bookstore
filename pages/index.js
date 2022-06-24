import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Category } from '../components/categories'
import { logoUrl } from '../public/constants/url'
import styles from '../styles/Home.module.css'
import { Popular } from '../components/Popular'
import { FeaturedContainer } from '../components/Featured'
import { Option } from '../components/option'
import { Blogs } from '../components/blogs'
import { HeadComponent } from '../components/common/head'
import Navbar from '../components/home/navbar'
import Banner from '../components/home/banner'

export default function Home() {
  return (
    <main>
      <HeadComponent title="Bookstore | Home" icon={logoUrl} />
      <Navbar/>
      <Banner/>
    </main>
  )
}
