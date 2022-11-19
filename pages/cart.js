import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import toast from 'react-hot-toast'
import Footer from '../components/common/footer'
import { CartCard } from '../components/component/cartCart'
import Navbar from '../components/home/navbar'

const Cart = () => {

  const [cookies, setCookie] = useCookies(['cart']);
  const [cart,setCart] = useState()
  const router = useRouter()

  useEffect(()=>{
    fetchBooks()
  },[setCookie])

  async function fetchBooks(){
    const data = await axios.get("/api/book/getBooks")
  
    if(data?.data?.length>0){
      let list = data?.data.filter(x => cookies?.cart?.books?.includes(x._id))
      setCart(list)
    }  
  }

  function handleBuy(id){
    if(cookies.isLoggedIn!=="true"){
      toast.error("Please login to Buy the item")
    }else{
      let books;
      if(cookies?.order && cookies?.order?.books){
        books = [...cookies?.order.books,id]
      }else{
        books = [id]
      }
      const orderData = {
        "userId":cookies.userEmail,
        "books":books
      }
      setCookie('order',orderData);
      handleRemove(id)
      toast.success("Book added to order succesfully")
      router.push("/orders")
    }
  }

  function handleRemove(id){
    let x = cart?.filter(x=> x._id !== id)
    let cartData = {
      "userId":cookies?.userEmail,
      "books": x
    }
      setCookie('cart',cartData);
      setCart(cartData.books)
      toast.success("Book removed to cart succesfully")
  }
  
  return (
    <div>
    <Navbar/>
    <div className="w-100 h-auto py-10">
      <section className='w-[60%] m-auto my-[5vh]'>
        <h3 className='font-bold'>My Cart</h3>
        <section className='my-10 border-2 border-gray-300 h-auto py-10'>
            {cart && cart.map((x,index) => {
              return <CartCard  handleBuy={handleBuy} handleRemove={handleRemove} id={x._id} key={index} name={x.title} price={"$10"} imageUrl={x.thumbnailUrl} description={x.description}  />
            })}
        </section>
      </section>
    </div>
    <Footer/>
</div>
  )
}

export default Cart