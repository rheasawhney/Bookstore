import { PhoneIcon } from '@heroicons/react/outline'
import React from 'react'

export const ContactInfo = () => {
  return (
    <div>
        <div className='w-[80%] h-[90vh] m-auto px-[8vw] grid-cols-2 grid'>
            <section>
              <br/><br/>
                <h2 className='text-3xl font-bold'> Contact us</h2><br/><br/>
                <h5>Address goes here, street, Crossroad 123 </h5>
                <br/>
                <h5>info@example.com/ info@example.com</h5>
                <br/>
                <h5>+1 98765 43210/+1 98765 43210 </h5>
                <br/>
                
            </section>
            <section>
            

              <form className='p-10 py-5 shadow-md text-center'>
               
                <input className='border-2 border grey-300 w-[80%] my-5 p-2' type="text" id="name" name="username" placeholder='Enter Name'/>
                <input className='border-2 border grey-300 w-[80%] my-5 p-2' type="text" id="email" name="email" placeholder='Enter Email'/>
                <input className='border-2 border grey-300 w-[80%] p-2' type="text" id="subject" name="subject" placeholder='Subject'/>
                <textarea className='border-2 border grey-300 w-[80%] p-2 my-5' rows="4" placeholder='messege'></textarea>
    
                <button className='w-[80%] p-2 bg-black text-white' type="submit" value="Submit">Submit</button>
              </form> 
              

            </section>
        </div>
    </div>
  )
}
