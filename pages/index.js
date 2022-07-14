import { Category } from '../components/categories'
import { FeaturedContainer } from '../components/featured/index'
import Banner from '../components/common/breadCrum/index'
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
