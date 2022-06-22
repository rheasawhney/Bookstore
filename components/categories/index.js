import React from 'react'
import styles from "../categories/Category.module.css"
import Image from "next/image"
import castleImage from "../../public/castleimg.webp"
import bio from "../../public/bio.jpeg"
import fiction from "../../public/download.jpeg"
import mystery from "../../public/mystery.jpeg"
import nonFiction from "../../public/nonFiction.jpeg"
import fantasy from "../../public/fantasy.jpeg"


const catergoryData = [
  {
    id:1,
    name:"Fiction",
    description:"fiction is based on made up scenarios",
    image:fiction,
    bgColor:"#ffe9c2  "
  },
  {
    id:2,
    name:"Non-Fiction",
    description:"Non fiction is based on not made up scenarios",
    image: nonFiction,
    bgColor:"#ffcac2"
  },
  {
    id:3,
    name:"Fantasy",
    description:"Fantasy deals with the imagination and fantasy",
    image:fantasy,
    bgColor:"#c7fff8"
  },
  {
    id:4,
    name:"Mystery",
    description:"Mystery deals with the mysterios stories",
    image:mystery,
    bgColor:"#d2ffc2"
  },
  {
    id:5,
    name:"Biography",
    description:"Biography deals with the biography of an individual",
    image:bio,
    bgColor:"#f9e6ff"
  }
  
  
]

export const Category = () => {

  return (
    <>
    <div className={styles.Category}>
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
  <div className={styles.card} style={{backgroundColor: bgColor }}>
    <Image className={styles.image} src={castleImage} width={300} height={300} alt="card"/>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
  </>
)}
