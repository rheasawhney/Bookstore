import React from 'react'
import { OptionCard } from '../common/optioncard'
import styles from "../Option/Option.module.css"


const optionData = [
    {
      id:1,
      name:"Free Shipping",
      description:"Order over Rs. 395",
    
    },
    {
        id:2,
        name:"Secure Payment",
        description:"100% Secure payment",
      
      },
      {
        id:3,
        name:"Best Price",
        description:"Guarenteed Low cost",
      
      },
      {
        id:4,
        name:"Easy Return",
        description:"Within 30 day returns",
      
      },
   
      ]

export const Option = () => {

    return (
      <div className={styles.option}>
        <section className={styles.optionContainer}>
          {optionData.map(cards => {
            return(
              <OptionCard title={cards.name} description={cards.description} />
            )
          })}
        </section>
      </div>
    )
  }