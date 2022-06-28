import { Category } from '../components/categories'
import { logoUrl } from '../public/constants/url'
import { FeaturedContainer } from '../components/Featured'
import { HeadComponent } from '../components/common/head'
import Navbar from '../components/home/navbar'
import Banner from '../components/home/banner'
import Footer from '../components/common/footer'

export default function Home() {
  return (
    <main>
      <HeadComponent title="Bookstore | Home" icon={logoUrl} />
      <Navbar/>
      <Banner/>
      <Category/>
      <FeaturedContainer/>
      <Footer />
    </main>
  )
}
