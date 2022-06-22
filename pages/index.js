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
import { Option } from '../components/option'
import { Blogs } from '../components/blogs'
import { HeadComponent } from '../components/common/head'

export default function Home() {
  return (
    <main>
      <HeadComponent title="Bookstore | Home" icon={""} />
      <Navbar/>
    </main>
  )
}
