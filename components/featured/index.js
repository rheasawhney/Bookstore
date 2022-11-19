import React from 'react'
import { ProductCard } from '../common/productCard'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { cardsData } from '../../utils/books'

export const FeaturedContainer = ({books}) => {  
    return (
      <div className="w-full h-auto my-20">
        <section className='w-[80%] m-auto min-h-[60vh]'>
          <span className='flex items-center justify-between'>
            <h2 className='text-2xl font-bold' >Bestselling Books</h2>
            <a href='#' className='flex'>View All
              <ChevronRightIcon className='w-4' />
            </a>
          </span>
          <div className={"w-[100%] sm:w-[100%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-2 xl:grid-cols-5 m-auto my-10"}>
            {books.slice(0,10).map((cards,index) => {
              return(
                <ProductCard key={index} id={cards._id} name={cards.title} price={cards?.price ? cards.price :"$10"} imageUrl={cards.thumbnailUrl}/>
              )
            })}
          </div>
          </section>

      </div>
    )
  }
  
