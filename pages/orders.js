import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  console.log(cookies)

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

  const handlePayment = (subscriptionAmt, subscriptionType) => {
    console.log(subscriptionAmt,subscriptionType)
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {;
      try {
        // setLoading(true);
  
        const result = await axios.post("/api/razorpay/createSubscriptionOrder");
        console.log(result)
        // const { amount, id: order_id, currency } = result.data;
        // const  razorpayKey =  process.env.RAZORPAY_KEY_ID

        // const options = {
        //   key: razorpayKey,
        //   amount: amount.toString(),
        //   currency: currency,
        //   name: "Grostore",
        //   description: subscriptionType,
        //   order_id: order_id,
        //   handler: async function (response) {
        //     const result = await axios.post(
        //       "/api/razorpay/paySubscriptionOrder",
        //       {
        //         amount: amount,
        //         razorpayPaymentId: response.razorpay_payment_id,
        //         razorpayOrderId: response.razorpay_order_id,
        //         razorpaySignature: response.razorpay_signature,
        //         subscriptionType: subscriptionType,
        //         userId: profileData.phoneNumber,
        //       }
        //     );
        //     if(result.status===201){
        //       toast.success("Your payment is succesfull")
        //     }
        //   },
        //   prefill: {
        //     name: "user",
        //     email: "email",
        //     contact: "contact",
        //   },
        // };
        // setLoading(false);
        // const paymentObject = new window.Razorpay(options);
        // paymentObject.open();
      } catch (err) {
        toast.error(err);
      }
    };
    document.body.appendChild(script);
    // handleOrder()  
  };


  function handleOrder(){
    toast.success("Your order is placed succesfully")
    setCookie("cart",{})
    setCookie("order",{})
    handlePayment()
    router.push("/orderCompletion")
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

                <button onClick={()=>{handlePayment(10,"Saif")}} className='my-10 bg-orange-300 px-4 py-2 rounded-lg'>Complete the order</button>

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


