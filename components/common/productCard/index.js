import Image from 'next/image'
import React from 'react'
import styles from "../productCard/style.module.css"

export const ProductCard = ({imageUrl,title,price}) => {
  return (
    <div className={styles.card}>
        <section>
            <Image className={styles.image} src={imageUrl} width={300} height={300}/>
            <h5>{title}</h5>
            <p>{price}</p>
            <p>⭐⭐⭐⭐⭐</p>
        </section>
        <section className={styles.icon}>
            <a href="#"> <i className='fa fa-search' ></i></a>
            <a href="#">  <i className='fa fa-shopping-cart'></i></a>
        </section>
    </div>
  )
}
