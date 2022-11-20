import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import toast from 'react-hot-toast'
import Footer from '../components/common/footer'
import { LoginForm } from '../components/forms/loginForm'
import Navbar from '../components/home/navbar'

const registerUser = {
    "firstName":"",
    "lastName":"",
    "contact":"",
    "gender":"",
    "state":"",
    "pincode":""
}

const Onboard = () => {

    const [register,setRegister] = useState(registerUser)
    const [cookies, setCookie] = useCookies(['userEmail']);
    const router = useRouter();

    const onboard = async (e) => {
        e.preventDefault()
        console.log(register)
        const res = await axios.post("/api/user/updateUser?email="+cookies.userEmail,register)
        console.log(res)
        if(res.status===201){
            toast.success("User Created Succesfully")
            router.push("/profile")
        }
    }

    

    return (
      <div>
      <Navbar/>
        <div className='h-[60vh]'>
            <div className="mt-10 sm:mt-0">
            <p className='text-center mt-10 mb-10  text-green-900 text-lg'>Enter your information</p>
            <div className=" w-[50vw] m-auto mb-20 shadow-2xl">
                <form onSubmit={onboard}>
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            First name
                        </label>
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            onChange={(e)=>{
                                register.firstName = e.target.value
                                setRegister(register)
            
                            }
                            }
                            autoComplete="given-name"
                            className="mt-1 block w-full border-2 p-1  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Last name
                        </label>
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            onChange={(e)=>{
                                register.lastName = e.target.value
                                setRegister(register)
            
                            }
                            }
                            autoComplete="family-name"
                            className="border-2 p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="text"
                            disabled={true}
                            name="email-address"
                            value={cookies.userEmail}
                            id="email-address"
                            onChange={(e)=>{
                                register.email = e.target.value
                                setRegister(register)
              
                            }
                            }
                            autoComplete="email"
                            className="mt-1 block border-2 p-1  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>


                        <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                            Gender
                        </label>
                        <input
                            type="text"
                            name="gender"
                            id="gender"
                            onChange={(e)=>{
                                register.gender = e.target.value
                                setRegister(register)
                 
                            }
                            }
                            autoComplete="gender"
                            className="mt-1 block w-full border-2 p-1  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            Contact
                        </label>
                        <input
                            type="text"
                            name="contact"
                            id="contact"
                            onChange={(e)=>{
                                register.contact = e.target.value
                                setRegister(register)
                  
                            }
                            }
                            autoComplete="contact"
                            className="mt-1 block w-full border-2 p-1  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                            State / Province
                        </label>
                        <input
                            type="text"
                            name="state"
                            id="state"
                            onChange={(e)=>{
                                register.state = e.target.value
                                setRegister(register)
                
                            }
                            }
                            autoComplete="address-level1"
                            className="mt-1 block w-full border-2 p-1  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                            ZIP / Postal code
                        </label>
                        <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            onChange={(e)=>{
                                register.pincode = e.target.value
                                setRegister(register)
                        
                            }
                            }
                            autoComplete="postal-code"
                            className="mt-1 border-2 p-1  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Save
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
      <Footer/>
      </div>
    )
}
 
export default Onboard