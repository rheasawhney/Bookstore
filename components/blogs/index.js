import React from 'react'
import styles from "../blogs/Blogs.module.css"
import { BlogCard } from '../common/blogCard'


const blogData=[{
  id:1,
  name:"Significant Reading has info",
  description:"",
  image:"https://media.istockphoto.com/vectors/mass-production-delivery-truck-pop-art-retro-icon-vector-illustration-vector-id1215746862"
},
{
  id:2,
  name:"Activities Book International",
  description:"",
  image:"https://media.istockphoto.com/vectors/mass-production-delivery-truck-pop-art-retro-icon-vector-illustration-vector-id1215746862"
},
{
  id:3,
  name:"International activities of book",
  description:"",
  image:"https://media.istockphoto.com/vectors/mass-production-delivery-truck-pop-art-retro-icon-vector-illustration-vector-id1215746862"
  
}]

export const Blogs = () => {
  return (
    <div className={styles.Blogs}>
      <h1>Latest Blog</h1>
      <p>Contrary to popular belief.</p>
      <section className={styles.BlogContainer}>
        
      {
        blogData.map((cards)=>{
          return(
            <BlogCard image={cards.image} title={cards.name} description={cards.description}/>
          )
        })
      }
      </section>
    </div>
  )
}
