import React from 'react'
import styles from "../categories/Category.module.css"
import Image from "next/image"

export const Category = () => {

  return (
    <>
    
    <div className={styles.Category}>
    <CategoryCard/>
    
    </div>
    </>
    
  )
}

const CategoryCard=()=> {return(
  <>
  <div className={styles.card}>
    <Image src={"/public/castleimg.webp"} width={100} height={100}/>
    <h1>fiction</h1>
    <p>fiction is based on made up scenarios</p>
  </div>
  </>
)}
