import React from 'react'
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';

export const CartCard = ({imageUrl,name,price,description,id,handleRemove,handleBuy}) => {
  return (
    <div className='w-[90%] m-auto mt-10 p-5 shadow-2xl flex'>
        <img className='h-[14vh]' src={imageUrl} />
        <section className='w-[70%] mx-10'>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>⭐⭐⭐⭐⭐</p>
            <input type={"number"} className="border-gray-100 border-2 mt-2 p-1 w-40" placeholder='qty: 1' max={5} min={1}/>
        </section>
        <section className=''>
            <button  onClick={()=>{handleBuy(id)}}  className='bg-gray-400 px-4 py-2 rounded-md'>Buy</button>   
            <br/> 
            <br/> 
            <button onClick={()=>{handleRemove(id)}} className='bg-blue-200 px-4 py-2 rounded-md'>Remove</button>    
        </section>
    </div>
  )
}
