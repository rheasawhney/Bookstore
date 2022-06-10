import React from 'react'
import styles from "../Popular/Popular.module.css"
import Image from "next/image"
import thealchemist from "../../public/thealchemist.jpg"
import midlib from "../../public/midlib.png"
import thefourwinds from "../../public/thefourwinds.jpg"
import fault from "../../public/fault.jpg"


const popularData = [
    {
      id:1,
      name:"The Alchemist",
      price:"Rs. 395",
      image:thealchemist,
      bgColor:"#f2f2f2  "
    },
    {
      id:2,
      name:"The Four Winds",
      price:"Rs 165",
      image: thefourwinds,
      bgColor:"#f2f2f2"
    },
    {
      id:3,
      name:"The Midnight Library",
      price:"Rs 233",
      image:midlib,
      bgColor:"#f2f2f2"
    },
    {
        id:4,
        name:"The Fault In Our Stars",
        price:"Rs 478",
        image:fault,
        bgColor:"#f2f2f2"
      },
    
    
  ]
  
  export const Popular = () => {
  
    return (
      <>
      <div className={styles.Popular}>
         {popularData.map(cards => {
           return(
            <PopularCard castleImage={cards.image} title={cards.name} price={cards.price} bgColor={cards.bgColor} />
           )
        })}
      </div>
      </>
      
    )
  }
  
  const PopularCard=({castleImage,title,description,bgColor})=> {return(
    <>
    <div className={styles.popular} style={{backgroundColor: bgColor }}>
      <Image className={styles.image} src={castleImage} width={300} height={300}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    </>
  )}
  
