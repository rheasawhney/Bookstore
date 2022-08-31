import React from 'react'
import styles from "../categories/Category.module.css"
import Image from "next/image"


export const Category = ({books}) => {

  return (
    <>
     <span className='flex items-center justify-between ml-[10%] mt-20'>
            <h2 className='text-2xl font-bold' >Featured Categories</h2>
    </span>
    <div className="w-[90%] sm:w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5 xl:grid-cols-5 m-auto my-10">
       {books?.filter(book=> book.shortDescription).slice(0,5).map((category,index) => {
         return(
          <CategoryCard key={index} author={category.authors[0]} castleImage={category.thumbnailUrl} title={category.title} description={category.shortDescription} bgColor={"#ded7fc"} />
         )
      })}
    </div>
    </>
    
  )
}

const CategoryCard=({castleImage,title,description,bgColor,author})=> {return(
  <>
  <div className='w-auto p-4 rounded-lg' style={{backgroundColor: bgColor }}>
    <Image className={styles.image} src={castleImage} width={300} height={300} alt="card"/>
    <h3>{title}</h3>
    <p className='text-sm font-light text-gray-600 max-h-[6vh] overflow-hidden'>{description}</p>
    <p  className='text-sm font-bold text-blue-600 my-2'>{author}</p>
  </div>
  </>
)}
