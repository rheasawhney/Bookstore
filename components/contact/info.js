import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'


const query = {

}

export const ContactInfo = () => {

  

  const handleSubmit = (e) => {
    e.preventDefault()
    const queryData = {
      "name": e.target["username"].value,
      "email": e.target["email"].value,
      "subject": e.target["subject"].value,
      "message": e.target["message"].value,
    }
    insertQuery(queryData)
    e.target.reset()
  }

  const insertQuery = async  (queryData) => {
    const res = await axios.post("/api/queries/insertQuery",queryData)
    if(res.status===200){
      toast.success("Your query is submitted succesfully")
    }
  }

  return (
    <div>
        <div className=''>
         <section className='w-[70%] my-[10vh] h-auto m-auto py-2 px-[8vw] grid-cols-2 grid shadow-2xl'>
          <section className='p-10'>
                  <h2 className='text-3xl font-bold'> Contact us</h2><br/><br/>
                  <h5>#111, Golden heights, Sarjapur - Bangalore - 560015 </h5>
                  <br/>
                  <h5>info@bookstore.com</h5>
                  <br/>
                  <h5>+91-9876543210</h5>
                  <br/>
              </section>
              <section className='p-10 py-5 text-center'>
                <form onSubmit={handleSubmit}>
                
                  <input required className='border-2 border grey-300 w-[80%] my-5 p-2' type="text" id="username" name="username" placeholder='Enter Name'/>
                  <input required  className='border-2 border grey-300 w-[80%] my-5 p-2' type="text" id="email" name="email" placeholder='Enter Email'/>
                  <input required className='border-2 border grey-300 w-[80%] p-2' type="text" id="subject" name="subject" placeholder='Subject'/>
                  <textarea required className='border-2 border grey-300 w-[80%] p-2 my-5' id="message" name="message" rows="4" placeholder='messege'></textarea>
      
                  <button  type="submit" className='w-[80%] p-2 bg-black text-white' value="Submit">Submit</button>
                </form> 
              </section>
          </section>
        </div>
    </div>
  )
}
