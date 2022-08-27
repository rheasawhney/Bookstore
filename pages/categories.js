import React, { useEffect, useState } from 'react'
import Footer from '../components/common/footer'
import { ProductCard } from '../components/common/productCard'
import Navbar from '../components/home/navbar'
import axios from 'axios'
import { SearchIcon } from '@heroicons/react/outline'
import { debounce } from 'lodash'
import _ from 'lodash'

const Categories = () => {
    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBook] = useState(books)
    const loadSearch = debounce(handleSearch,800)

    useEffect(()=>{
      fetchBooks()
    },[])
  
    async function fetchBooks(){
      const data = await axios.get("/api/book/getBooks")
      setFilteredBook(data.data)
      setBooks(data.data)
    }

    function handleSearch(e){
      const items = books.filter((book)=> book.title.toLowerCase().includes((e.target.value).toLowerCase()))
      setFilteredBook(items)
    }

    function handleSort(e){
      var result 
      if(e.target.value.includes("nameAsc")){
       result = _.orderBy(filteredBooks,['title'],['asc']);
      }else if(e.target.value.includes("nameDsc")){
        result = _.orderBy(filteredBooks,['title'],['desc']);
      }
      setFilteredBook(result)
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
            <section className='my-4 pt-4 flex justify-between'>
              <span className='flex justify-center border-2 border-gray-400 rounded-lg'>
              <input onChange={loadSearch} type={"text"} className="px-2 py-2 w-[25vw] outline-none rounded-lg " placeholder='Search by Book Name...' />
              <SearchIcon className='w-10 text-gray-400' />
              </span>
              <section>
                <span className='mr-4'>
                <label className='mr-2'>Sort</label>
                <select onChange={handleSort} className='border-2 border-gray-300 px-2 py-3 rounded-lg'>
                  <option value={"nameAsc"}>Name Asc</option>
                  <option value={"nameDsc"}>Name Dsc</option>
                  {/* <option value={"priceAsc"}>Price Asc</option>
                  <option value={"priceDsc"}>Price Dsc</option> */}
                </select>
                </span>
              </section>
            </section>
          <div className={"w-[100%] sm:w-[100%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-2 xl:grid-cols-5 m-auto my-10"}>
            {filteredBooks.slice(0,10).map((cards,index) => {
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