import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export const LoginForm = () => {

  const insertUser = "http://localhost:3000/api/user/insertUser";

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const submit = () => {
    if(email === '' && password === ''){
      toast.error("Please enter email and password");
    }else{
        registerUser()
    }
  }

  const registerUser = async () => {
      const res = await axios.post(insertUser,{email:email,password:password})
      if(res.data){
        toast.success("User Created Successfully");
      }
  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    if(name === 'email'){
        setEmail(value);
    }else{
      setPassword(value);
    }
  }

  return (
    <div className='form w-full h-[60vh] flex justify-center align-middle'>
        <section className='w-[50%] shadow-xl border-2 border-orange-100 h-[80%] m-auto rounded-xl'>
            <p className='text-xl text-center font-bold mt-16'>Login</p>
            <form className='block justify-center text-center mt-8'>
                <input required onChange={handleChange} type={"email"} name="email" value={email} className="border-2 w-[50%] my-4  border-violet-300 py-1 px-8 rounded-lg"  
                placeholder="Enter your email" /><br/>
                <input required onChange={handleChange} type={"password"} name="password" value={password} className="border-2 w-[50%] my-4  border-violet-300 py-1 px-8 rounded-lg"  
                placeholder="Enter your password" />
                <br/>
            </form>
            <p className='flex justify-center'>
             <button onClick={submit} className='px-4 py-1 bg-orange-400 text-white'>Submit</button>
            </p>
        </section>
    </div>
  )
}
