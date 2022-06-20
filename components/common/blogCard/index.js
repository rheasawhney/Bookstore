import React from 'react'
import styles from "../blogCard/blogCard.module.css"
import Image from "next/image"

export const BlogCard = ({image, title, description}) => {
  return (
    <div className={styles.card}>
        <section>
            <Image className={styles.image} src={image} width="100" height="100"/>
            <h5>{title}</h5>
            <p>{description}</p>
            

            
        </section>

    </div>
  )
}
