import React from 'react'
import styles from "../featured/Featured.module.css"
import Image from "next/image"
import darkhorse from "../../public/darkhorse.jpg"
import booktheif from "../../public/booktheif.jpg"
import itends from "../../public/itends.jpg"

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
  ]
  
  export const FeaturedContainer = () => {
  
    return (
      <>
      <div className={styles.featuredContainer}>
        <h2>Featured Collections</h2>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random</p>
         <div className={styles.cardsRow}>
         {cardsData.map(cards => {
           return(
            <CardsCard imageUrl={cards.image} title={cards.name} price={cards.price}/>
           )
        })}
        </div>
      </div>
      </>
      
    )
  }
  
  const CardsCard=({imageUrl,title,price,bgColor})=> {return(
    <>
      <div className={styles.card} style={{backgroundColor: bgColor }}>
        <Image className={styles.image} src={imageUrl} width={300} height={300}/>
        <h5>{title}</h5>
        <p>{price}</p>
        <p>⭐⭐⭐⭐⭐</p>
      </div>
    </>
  )}
  
