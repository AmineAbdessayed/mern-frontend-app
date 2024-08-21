import React from 'react'
import loginIcon from '../assets/signin.gif'
import { FaRegEye } from "react-icons/fa";
import { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import imageToBase64 from '../helpers/imageToBase64';
import SummaryApi from '../common/index'
import  {toast} from 'react-toastify';


const Regitser = () => {
  const [showPassword,setShowPassword]=useState(true)
  const [showConfirmPassword,setShowConfirmPassword]=useState(true)
  const [data,setData]=useState({
    username:"",
   email: "",
   password:"",
   confirmPassword:"",
   profilePic:"",
  }

  )
  const navigate=useNavigate()






const handleOnChange=(e)=>{
 const {name , value}= e.target

 setData((prev)=>{
    return{ ...prev, [name] : value} 

            
 })

}
const handleSubmit= async(e)=>{
  e.preventDefault();

  if(data.password===data.confirmPassword){
      const dataResponse= await fetch(SummaryApi.Register.url,{
    method: SummaryApi.Register.method,
    headers: {
      "content-type":"application/json"
    },
    body: JSON.stringify(data)


  } )
  const dataAPI= await dataResponse.json()
  if(dataAPI.success){
    toast.success(dataAPI.message)
    navigate("/login")
  }
  if(dataAPI.error){
    toast.error(dataAPI.message)
  }  

  }else {
    console.log("Please Check Password and confirm Password")
  }






}
console.log("data login ", data)

const handleUploadPic= async(e)=> {

  const file=e.target.files[0]
  const imagePic= await imageToBase64(file)
  console.log("image",imagePic)

  setData((prev)=>{
   return {...prev, profilePic:imagePic }
  })


}



  return (

    <section>
      <div className='mx-auto container p-4'>
        <div className='bg-white p-3 py-5 w-full max-w-md mx-auto'>

          <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
            <div>
                          <img src={data.profilePic!=""? data.profilePic :loginIcon} alt='login icon' />

            </div>
            <form>
              <label>
                  <div className='text-xs text-center bg-slate-200 pb-3 pt-1 cursor-pointer absolute bottom-0 w-full bg-opacity-80'>
              Upload photo

                  </div>

              <input type='file' className='hidden' onChange={handleUploadPic}/>
              </label>


           

            </form>
           
          </div>


          <form className='pt-5' onSubmit={handleSubmit}>

            <div className='grid'>
              <label>username </label>
              <div className='bg-slate-100 p-2'>
              <input 
              type='text' placeholder='Enter your username' 
              className='w-full h-full bg-transparent outline-none'
              name='username'
              value={data.username}
              onChange={handleOnChange}
              required/>
              

              </div>
              </div>

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
                 required
                 />
                <div className='cursor-pointer' onClick={()=>setShowPassword((prev)=>!prev)}>
                       { 
                       showPassword ?<FaEyeSlash/> :  <FaRegEye />

                       }
                              
                             


                </div>
                
                </div>

                
              </div>

              <div className='grid'>
                <label>Confirm Password </label>
                <div className='bg-slate-100 p-2 flex items-center'>
                <input 
                type= {showConfirmPassword? "password":"text"}
                 placeholder='Enter your password' 
                 name='confirmPassword'
                 value={data.confirmPassword}
                 onChange={handleOnChange}
                 className='w-full h-full  bg-transparent outline-none'
                 required
                 />
                <div className='cursor-pointer' onClick={()=>setShowConfirmPassword((prev)=>!prev)}>

                  {
                    showConfirmPassword?<FaEyeSlash/> : <FaRegEye/>

                  }
                       
                              
                             


                </div>
                
                </div>

                
              </div>

              <button className='bg-red-500 px-9 py-3 mx-auto rounded-full text-white hover:scale-105 transition-all mt-7 hover:bg-red-600'
              >
              Login

              </button>

          </form>
          <p className='my-5'>already have an account <Link to={"/login"} className='hover:underline text-blue-700'> Login </Link></p>

        </div>
      </div>
    </section>  )
}

export default Regitser