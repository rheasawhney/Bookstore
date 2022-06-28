import React from 'react'
import styles from "../categories/Category.module.css"
import Image from "next/image"
import castleImage from "../../public/castleimg.webp"
import bio from "../../public/bio.jpeg"
import fiction from "../../public/download.jpeg"
import mystery from "../../public/mystery.jpeg"
import nonFiction from "../../public/nonFiction.jpeg"
import fantasy from "../../public/fantasy.jpeg"
import { ChevronRightIcon } from '@heroicons/react/outline'


const catergoryData = [
  {
    id:1,
    name:"Fiction",
    description:"fiction is based on made up scenarios",
    image:fiction,
    bgColor:"#f0e6ff  "
  },
  {
    id:2,
    name:"Non-Fiction",
    description:"Non fiction is based on not made up scenarios",
    image: nonFiction,
    bgColor:"#f0e6ff "
  },
  {
    id:3,
    name:"Fantasy",
    description:"Fantasy deals with the imagination and fantasy",
    image:fantasy,
    bgColor:"#f0e6ff "
  },
  {
    id:4,
    name:"Mystery",
    description:"Mystery deals with the mysterios stories",
    image:mystery,
    bgColor:"#f0e6ff "
  },
  {
    id:5,
    name:"Biography",
    description:"Biography deals with the biography of an individual",
    image:bio,
    bgColor:"#f0e6ff "
  }
  
  
]

export const Category = () => {

  return (
    <>
     <span className='flex items-center justify-between ml-[10%] mt-20'>
            <h2 className='text-2xl font-bold' >Featured Categories</h2>
    </span>
    <div className="w-[90%] sm:w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5 xl:grid-cols-5 m-auto my-10">
       {catergoryData.map((category,index) => {
         return(
          <CategoryCard key={index} castleImage={category.image} title={category.name} description={category.description} bgColor={category.bgColor} />
         )
      })}
    </div>
    </>
    
  )
}

const CategoryCard=({castleImage,title,description,bgColor})=> {return(
  <>
  <div className='w-auto p-4 rounded-lg' style={{backgroundColor: bgColor }}>
    <Image className={styles.image} src={castleImage} width={300} height={300} alt="card"/>
    <h3>{title}</h3>
    <p className='text-sm font-light text-gray-600'>{description}</p>
  </div>
  </>
)}
