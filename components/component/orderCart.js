import React from 'react'
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';

export const OrderCart = ({imageUrl,name,price,description,id,handleRemove}) => {

  return (
    <div className='w-[60%] mx-10 mt-10 p-5 shadow-2xl flex bg-green-100'>
        <img className='h-[14vh]' src={imageUrl} />
        <section className='w-[70%] mx-10'>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>⭐⭐⭐⭐⭐</p>
        </section>
        <section className=''>
            <button onClick={()=>{handleRemove(id)}} className='bg-red-200 px-4 py-2 rounded-md'>Cancel</button>    
        </section>
    </div>
  )
}
