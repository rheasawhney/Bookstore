import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import toast from 'react-hot-toast'
import Footer from '../components/common/footer'
import { CartCard } from '../components/component/cartCart'
import { OrderCart } from '../components/component/orderCart'
import Navbar from '../components/home/navbar'

export const Orders = () => {

  const [cookies, setCookie] = useCookies(['order']);
  const [cart,setCart] = useState()

  useEffect(()=>{
    fetchBooks()
  },[setCookie])

  async function fetchBooks(){
    const data = await axios.get("/api/book/getBooks")
  
    if(data?.data?.length>0){
      let list = data?.data.filter(x => cookies?.order?.books.includes(x._id))
      setCart(list)
    }  
  }


  function handleRemove(id){
    let x = cart?.filter(x=> x._id !== id)
    let cartData = {
      "userId":cookies?.userEmail,
      "books": x
    }
      setCookie('order',cartData);
      toast.success("Book removed to cart succesfully")
}

  return (
    <div>
        <Navbar/>
        <div className='w-100 h-[70vh'>
        <div className="w-100 h-auto py-10">
          <section className='w-[60%] m-auto my-[5vh]'>
            <h3 className='font-bold'>My Orders</h3>

            <section className='my-10 border-2 border-gray-100 h-auto py-10 bg-gray-100'>
                {cart && cart.map((x,index) => {
                  return <OrderCart  handleRemove={handleRemove} id={x._id} key={index} name={x.title} price={"$10"} imageUrl={x.thumbnailUrl} description={x.description}  />
                })}
            </section>
          </section>
        </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Orders


