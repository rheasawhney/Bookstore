import { Category } from '../components/categories'
import { FeaturedContainer } from '../components/Featured'
import Banner from '../components/home/banner'
import Footer from '../components/common/footer'
import Newsletter from '../components/common/newsletter'
import Authors from '../components/common/authors'
import UserLayout from '../components/common/layout'

export default function Home() {
  return (
    <UserLayout>
      <main>
        <Banner/>
        <Category/>
        <FeaturedContainer/>
        <Authors/>
        <Newsletter/>
      </main>
    </UserLayout>
  )
}
