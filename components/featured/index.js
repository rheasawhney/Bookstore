import React from 'react'
import styles from "../featured/Featured.module.css"
import Image from "next/image"
import darkhorse from "../../public/darkhorse.jpg"
import booktheif from "../../public/booktheif.jpg"
import itends from "../../public/itends.jpg"
import { ProductCard } from '../common/productCard'
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/outline'

const cardsData = [
    {
      id:1,
      name:"Dark Horse",
      price:"Rs. 495",
      image:darkhorse,
      
    },
    {
      id:2,
      name:"It Ends with Us",
      price:"Rs 265",
      image: itends,
      
    },
    {
      id:3,
      name:"The Book Theif",
      price:"Rs 293",
      image:booktheif,
    },
    {
      id:3,
      name:"The Book Theif",
      price:"Rs 293",
      image:booktheif,
    },
    {
      id:3,
      name:"The Book Theif",
      price:"Rs 293",
      image:booktheif,
    },
    {
      id:3,
      name:"The Book Theif",
      price:"Rs 293",
      image:booktheif,
    },
  ]
  
  export const FeaturedContainer = () => {
  
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
            {cardsData.map((cards,index) => {
              return(
                <ProductCard key={index} name={cards.name} price={cards.price} imageUrl={cards.image}/>
              )
            })}
          </div>
          </section>

      </div>
    )
  }
  
