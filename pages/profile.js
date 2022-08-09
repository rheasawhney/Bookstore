import React from 'react'
import Footer from '../components/common/footer'
import Navbar from '../components/home/navbar'
 

const Profile = () => {
    return (
      <div >
      <Navbar/>
      <div className='w-100 h-[80vh] p-[5vh] text-center bg-gray-600'>
            <div className='w-80% h-[60vh] p-[5vh] text-center bg-gray-300 flex justify-center py-20'><br/>
              <section className="mr-12">
                <img className="w-[10vw] h-[10vw] rounded-full"src="images/profile.jpg"/>
              </section>
              <section className="text-left"><h1 className="font-bold text-4xl"> Rahul Bhosale</h1><br/>
              <p className="my-2"><span>Masterchef</span> <span className="mx-10">|</span>Lives in Mumbai India</p>
              <p>Cooking is my hobby etc etc</p>
              <p className="my-2">A competant hospitality professional having 10 years of experience</p>
           </section> </div>
            
         
        </div>
      <Footer/>
      </div>
    )
}
 
export default Profile