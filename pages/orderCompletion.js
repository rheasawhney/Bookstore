import React from 'react'
import Footer from '../components/common/footer'
import Navbar from '../components/home/navbar'

const OrderCompletion = () => {
    return (
      <div>
      <Navbar/>
        <section className='w-100 h-[50vh] '>
            <section className='w-[50%] rounded-xl shadow-2xl h-[40vh] border-2 mx-auto mt-10  align-middle flex justify-center'>
                <p className='text-green-800 text-2xl mt-40 font-bold text-center'>You order is complete, will be delivered<br/> to you by monday!!!</p>
            </section>
        </section>
      <Footer/>
      </div>
    )
}
 
export default OrderCompletion