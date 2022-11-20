import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import Footer from '../components/common/footer'
import Navbar from '../components/home/navbar'
 
const profiles = {
  "saifmohammed888@gmail.com":{
    name:"Mohammed Saif",
    profession:"Engineer",
    email:"saifmohammed888@gmail.com",
    contact:"123456789",
    city:"Mumbai",
    address:"#dummy, city, State- 56001",
    image:"images/profile.jpg",
    bio:"I am a Software Engineer working with a retail company called Lowe's India Services in Bangalore. I completed my Engineering in June 2019 from New Horizon College of Engineering Bangalore."
  },
  "sawhneyrhea@gmail.com":{
    name:"Rhea Sawhney",
    profession:"Student",
    email:"sawhneyrhea@gmail.com",
    contact:"8553548534",
    city:"Bangalore ",
    address:"#dummy, city, State- 56001",
    image:"https://cdn5.vectorstock.com/i/1000x1000/50/29/avatar-icon-of-girl-in-a-wide-brim-felt-hat-vector-16225029.jpg",
    bio:"I am a Software Engineer working with a retail company called Lowe's India Services in Bangalore. I completed my Engineering in June 2019 from New Horizon College of Engineering Bangalore."
  }
}

const Profile = () => {

    const [cookies, getCookie] = useCookies(['userEmail']);
    const route = useRouter()
    const [profile,setProfileValue] = useState({})
   
    useEffect(()=>{
      if(cookies.userEmail){
        getUser(cookies.userEmail)
      
        
      }
    },[cookies.userEmail])


    const getUser = async (email) => {
      const res = await axios.post("/api/user/getUserByPhone",{"email":email})
      console.log(res?.data)
      if(res?.data){setProfileValue(res?.data)}
 
    }

    const handleAdd= () =>{
      route.push("/addBooks")
    }
    return (
      <div >
      <Navbar/>
      <div className='w-100 h-auto p-[5vh] text-center bg-white'>
       
            <div className='w-[60%] rounded-lg m-auto h-auto p-[3vh] text-center bg-white shadow-2xl flex justify-center py-20'><br/>
              <section className="mr-12">
                <img className="w-[10vw] h-[10vw] rounded-full" src={profiles["saifmohammed888@gmail.com"]?.image} alt="profile"/>
              </section>
              <section className="text-left"><h1 className="font-bold text-4xl">{profile?.firstName+" "+profile?.lastName}</h1><br/>
              <p className="my-2">{profile?.gender}</p>
              <p>Lives in {profile?.state} India</p>
              <p className="my-2 max-w-[40vw]">{profile?.bio}</p>
              <p className='my-2'><b>Contact</b>: {profile?.contact}</p>
              <p className='my-2'><b>Email</b>: {profile?.email}</p>
              <p className='my-2'><b>Address</b>: {profile?.pincode}+{" "+profile?.state}</p>
              <button className='font-light text-sm bg-gray-400 p-1  text-white rounded-sm' onClick={handleAdd}>Add Books</button>
            </section> 
           </div>
          
        </div>
      <Footer/>
      </div>
    )
}
 
export default Profile