import React, { useContext } from 'react'
import loginIcon from '../assets/signin.gif'
import { FaRegEye } from "react-icons/fa";
import { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common/index'
import  {toast} from 'react-toastify';
import Context from '../context';




const Login = () => {

     const [showPassword,setShowPassword]=useState(true)
     const [data,setData]=useState({
      email: "",
      password:""
     }

     )
  const handleOnChange=(e)=>{
    const {name , value}= e.target

    setData((prev)=>{
       return{ ...prev, [name] : value} 

               
    })

  }
  const {fetchUsersDetails,fetchUserAddToCart}=useContext(Context)
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const dataResponse= await fetch(SummaryApi.Login.url,{
      method: SummaryApi.Login.method,
      headers: {
        "content-type":"application/json"
      },
      credentials:'include',
      body: JSON.stringify(data)
  
  
    } )
    const dataAPI= await dataResponse.json()
    if(dataAPI.success){
      console.log(dataAPI.message)
      toast.success(dataAPI.message)
      fetchUsersDetails()
      fetchUserAddToCart()
      navigate('/')

    }
    if(dataAPI.error){
      toast.error(dataAPI.message)

    }  
  
    else {
      console.log("Please Check Password and confirm Password")
    }
  }
  console.log("data login ", data)





  return (


    <section>
      <div className='mx-auto container p-4'>
        <div className='bg-white p-3 py-5 w-full max-w-md mx-auto'>

          <div className='w-20 h-20 mx-auto'>
            <img src={loginIcon} alt='login icon' />
          </div>
          <form className='pt-5' onSubmit={handleSubmit}>
            <div className='grid'>
              <label>Email ID</label>
              <div className='bg-slate-100 p-2'>
              <input 
              type='email' placeholder='Enter your email' 
              className='w-full h-full bg-transparent outline-none'
              name='email'
              value={data.email}
              onChange={handleOnChange}/>

              </div>

              <div className='grid'>
                <label>Password </label>
                <div className='bg-slate-100 p-2 flex items-center'>
                <input 
                type= {showPassword? "password": 'text'}
                 placeholder='Enter your password' 
                 name='password'
                 value={data.password}
                 onChange={handleOnChange}
                 className='w-full h-full  bg-transparent outline-none'
                 />
                <div className='cursor-pointer' onClick={()=>setShowPassword((prev)=>!prev)}>
                       { 
                       showPassword ?<FaEyeSlash/> :  <FaRegEye />

                       }
                              
                             


                </div>
                
                </div>
                <Link to={"/forget-password"} className='block ml-auto hover:underline hover:text-cyan-400' >forget password ?</Link>
              </div>

              <button className='bg-red-500 px-9 py-3 mx-auto rounded-full text-white hover:scale-105 transition-all mt-7 hover:bg-red-600'>Login</button>

              </div>
          </form>
          <p className='my-5'>don't have an account <Link to={"/register"} className='hover:underline text-blue-700'> Sign in </Link></p>

        </div>
      </div>
    </section>
  )
}

export default Login