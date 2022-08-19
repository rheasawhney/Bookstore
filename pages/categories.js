import React, { useEffect, useState } from 'react'
import Footer from '../components/common/footer'
import { ProductCard } from '../components/common/productCard'
import Navbar from '../components/home/navbar'
import axios from 'axios'

const Categories = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
      fetchBooks()
    },[])
  
    async function fetchBooks(){
      const data = await axios.get("/api/book/getBooks")
      setBooks(data.data)
    }
    return (
    <div>
        <Navbar/>
        <div className="w-100 h-auto py-10">
            <section className='w-[80%] m-auto min-h-[60vh]'>
            <span className='flex items-center justify-between'>
            <h2 className='text-2xl font-bold' >Categories</h2>
            <a href='#' className='flex'>View All
            </a>
          </span>
          <div className={"w-[100%] sm:w-[100%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-2 xl:grid-cols-5 m-auto my-10"}>
            {books.slice(0,10).map((cards,index) => {
              return(
                <ProductCard key={index} name={cards.title} price={cards?.price ? cards.price :"$10"} imageUrl={cards.thumbnailUrl}/>
              )
            })}
          </div>
            </section>

        </div>
        <Footer/>
    </div>
  )
}
export default Categories