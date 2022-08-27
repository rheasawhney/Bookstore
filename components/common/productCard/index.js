import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import toast from 'react-hot-toast'
import styles from "../productCard/style.module.css"

export const ProductCard = ({imageUrl,name,price}) => {

  const [cookies, setCookie] = useCookies(['isLoggedIn']);
  const [data, setEmail] = useCookies(['userEmail']);
  const [cart,setCart] = useState([]);

  useEffect(()=>{
    if(data.userEmail){
      getCart()
    }

  },[])

  const getCart = async () => {
    const res = await axios.get(`/api/cart/getCartById?userId=${data.userEmail}`)
    if(res.status === 200){
      setCart(res.data)
    }
  }

  function handleCart(){
    if(cookies.isLoggedIn!=="true"){
      toast.error("Please login to add to cart")
    }
    else{
      const resp = axios.post()
    }
  }

  function handleBuy(){
    if(cookies.isLoggedIn!=="true"){
      toast.error("Please login to Buy the item")
    }
  }
  return (
    <div className="w-[15vw] p-4 pb-12 my-10 border shadow-2xl rounded-xl">
        <section>
            <Image src={imageUrl} width={250} height={240} alt="prodcard"/>
            <h5 className='text-md font-bold my-1'>{name}</h5>
            <p className='text-gray-400 my-1'>{price}</p>
            <p>⭐⭐⭐⭐⭐</p>
            <span className='mt-4 flex'>
            <button onClick={handleCart} className='p-2 bg-gray-400 mt-2 mr-3 rounded-lg text-white'>Add to Cart</button>
            <button onClick={handleBuy} className='px-6 py-2 bg-indigo-500 mt-2 mr-3 rounded-lg text-white'>Buy</button>
            </span>
        </section>
        <section className={styles.icon}>
            <a href="#"> <i className='fa fa-search' ></i></a>
            <a href="#">  <i className='fa fa-shopping-cart'></i></a>
        </section>
    </div>
  )
}

