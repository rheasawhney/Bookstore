import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import toast from 'react-hot-toast'
import Footer from '../components/common/footer'
import { OrderCart } from '../components/component/orderCart'
import Navbar from '../components/home/navbar'

export const Orders = () => {

  const [cookies, setCookie] = useCookies(['order']);
  const [cart,setCart] = useState()
  const router = useRouter()
  

  useEffect(()=>{
    fetchBooks()
  },[setCookie])

  async function fetchBooks(){
    const data = await axios.get("/api/book/getBooks")
  
    if(data?.data?.length>0){
      let list = data?.data.filter(x => cookies?.order?.books?.includes(x._id))
      setCart(list)
    }  
  }

  function handleRemove(id){
    let book = cart?.filter(x=> x._id !== id)
    let cartData = {
      "userId":cookies?.userEmail,
      "books": book
    }
    setCookie('order',cartData);
    setCart(cartData.books)
    toast.success("Book removed to cart succesfully")
  }


  function handleOrder(){
    toast.success("Your order is placed succesfully")
    setCookie("cart",{})
    setCookie("order",{})
    router.push("/orderCompletion")
  }



  async function displayRazorpay(){
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      console.log("Loaded script")

      const options = {
        key: "rzp_test_ksVODSdGoq9G8s",
        amount: "1000",
        currency: "INR",
        name: "BookStore",
        description: "Buy books online",
        handler: (res) => {
          toast.success("Payment Succesfull")
          handleOrder()
        }
      }

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }

    

    document.body.appendChild(script);
  }

  return (
    <div>
        <Navbar/>
        <div className='w-100 h-[70vh'>
        <div className="w-100 h-auto py-10">
          <section className='w-[60%] m-auto my-[5vh]'>
            <h3 className='font-bold'>My Orders</h3>

            <section className='my-10 border-2 border-gray-100 h-auto py-10 bg-gray-100 flex'>
              <section className='w-[70%]'>
                {cart && cart?.map((x,index) => {
                  return <OrderCart  handleRemove={handleRemove} id={x._id} key={index} name={x.title} price={"$10"} imageUrl={x.thumbnailUrl} description={x.description}  />
                })}
              </section>

              {cart?.length>0 && <section>
                <p className='text-lg border-b-4'>Order Details</p>
                <p className='text-blue-400 text-lg my-2'>Price: ${cart?.length * 10}</p>
                <p className='text-blue-400 text-lg my-2'>Delivery Fee: ${cart?.length * 2}</p>
                <p className='text-blue-400 text-lg my-2'>Taxes: ${cart?.length * 0.5}</p>
                <hr/>
                <p className='border-t-4 border-orange-700 mt-2 pt-2 font-bold text-md'>Total Cost: ${(cart?.length * 10)+(cart?.length * 2)+(cart?.length * 0.5)}</p>

                <button onClick={displayRazorpay} className='my-10 bg-orange-300 px-4 py-2 rounded-lg'>Complete the order</button>
                
              </section>}
            </section>
          </section>
        </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Orders


