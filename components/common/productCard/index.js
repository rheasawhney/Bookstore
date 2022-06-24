import Image from 'next/image'
import React from 'react'
import styles from "../productCard/style.module.css"

export const ProductCard = ({imageUrl,name,price}) => {
  return (
    <div className="w-[15vw] p-4 pb-12 my-10 border shadow-lg">
        <section>
            <Image src={imageUrl} width={250} height={240} alt="prodcard"/>
            <h5 className='text-md font-bold my-1'>{name}</h5>
            <p className='text-gray-400 my-1'>{price}</p>
            <p>⭐⭐⭐⭐⭐</p>
        </section>
        <section className={styles.icon}>
            <a href="#"> <i className='fa fa-search' ></i></a>
            <a href="#">  <i className='fa fa-shopping-cart'></i></a>
        </section>
    </div>
  )
}

