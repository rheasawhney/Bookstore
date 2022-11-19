import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import toast from 'react-hot-toast'
import Footer from '../components/common/footer'
import { LoginForm } from '../components/forms/loginForm'
import Navbar from '../components/home/navbar'

const registerUser = {
    "title":"",
    "shortDescription":"",
    "longDescription":"",
    "price":"",
    "thumbnailUrl":"",
    "categories":"",
    "authors":""
}

const AddBooks = () => {

    const [register,setRegister] = useState(registerUser)
    const [cookies, setCookie] = useCookies(['userEmail']);
    const router = useRouter();

    const onboard = async (e) => {
        e.preventDefault()
        console.log(register)
        register.categories = register.categories.split(",")
        register.authors = register.authors.split(",")
        register.id = Math.floor(Math.random() * 1000);
        console.log(register)
        const res = await axios.post("/api/book/insertBook",register)
        console.log(res)
        if(res.status===200){
            toast.success("Book Created Succesfully")
            router.push("/categories")
        }
    }

    

    return (
      <div>
      <Navbar/>
        <div className='h-[60vh]'>
            <div className="mt-10 sm:mt-0">
            <p className='text-center mt-10 mb-10  text-green-900 text-lg'>Enter Book Details</p>
            <div className=" w-[50vw] m-auto mb-20 shadow-2xl">
                <form onSubmit={onboard}>
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                           Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            onChange={(e)=>{
                                register.title = e.target.value
                                setRegister(register)
                            }
                            }
                            autoComplete="title"
                            className="mt-1 block w-full border-2 p-1  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">
                           Short Description
                        </label>
                        <input
                            type="text"
                            name="shortDescription"
                            id="shortDescription"
                            onChange={(e)=>{
                                register.shortDescription = e.target.value
                                setRegister(register)
            
                            }
                            }
                            autoComplete="family-name"
                            className="border-2 p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700">
                           Long Description
                        </label>
                        <input
                            type="text" 
                            name="longDescription"
                            id="longDescription"
                            onChange={(e)=>{
                                register.longDescription = e.target.value
                                setRegister(register)
              
                            }
                            }
                            autoComplete="email"
                            className="mt-1 block border-2 p-1  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>


                        <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            onChange={(e)=>{
                                register.price = e.target.value
                                setRegister(register)
                 
                            }
                            }
                            autoComplete="gender"
                            className="mt-1 block w-full border-2 p-1  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            Thumbnail Url
                        </label>
                        <input
                            type="text"
                            name="thumbnailUrl"
                            id="thumbnailUrl"
                            onChange={(e)=>{
                                register.thumbnailUrl = e.target.value
                                setRegister(register)
                  
                            }
                            }
                            autoComplete="contact"
                            className="mt-1 block w-full border-2 p-1  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="categories" className="block text-sm font-medium text-gray-700">
                            Categories
                        </label>
                        <input
                            type="text"
                            name="categories"
                            id="categories"
                            onChange={(e)=>{
                                register.categories = e.target.value
                                setRegister(register)
                
                            }
                            }
                            autoComplete="categories"
                            className="mt-1 block w-full border-2 p-1  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="authors" className="block text-sm font-medium text-gray-700">
                            Authors
                        </label>
                        <input
                            type="text"
                            name="authors"
                            id="authors"
                            onChange={(e)=>{
                                register.authors = e.target.value
                                setRegister(register)
                        
                            }
                            }
                            autoComplete="authors"
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
 
export default AddBooks