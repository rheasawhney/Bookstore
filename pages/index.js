import { Category } from '../components/categories'
import { FeaturedContainer } from '../components/featured/index'
import Banner from '../components/home/banner/index'
import Newsletter from '../components/common/newsletter'
import Authors from '../components/common/authors'
import UserLayout from '../components/common/layout'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

  const [books, setBooks] = useState([])

  useEffect(()=>{
    fetchBooks()
  },[])

  async function fetchBooks(){
    const data = await axios.get("/api/book/getBooks")
    setBooks(data.data)
  }

  return (
    <UserLayout>
      <main>
        <Banner/>
        <Category books={books}/>
        <FeaturedContainer books={books}/>
        <Authors books={books}/>
        <Newsletter/>
      </main>
    </UserLayout>
  )
}
