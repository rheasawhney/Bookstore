import React from 'react'
import styles from "../Popular/Popular.module.css"
import Image from "next/image"
import thealchemist from "../../public/thealchemist.jpg"
import midlib from "../../public/midlib.png"
import thefourwinds from "../../public/thefourwinds.jpg"
import fault from "../../public/fault.jpg"
import { ProductCard } from '../common/productCard'


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
      <div className={styles.popular}>
        <h1>Popular Collections</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random.</p>
        <section className={styles.popularContainer}>
          {popularData.map(cards => {
            return(
              <ProductCard imageUrl={cards.image} title={cards.name} price={cards.price} />
            )
          })}
        </section>
      </div>
    )
  }
  

