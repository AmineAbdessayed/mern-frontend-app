import React from 'react'
import errorImage from '../assets/canceled.gif'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className='w-full max-w-screen-lg mx-auto flex justify-center items-center flex-col my-4'>
    <p className='font-meduim text-2xl  bg-red-600 text-white rounded-full p-2'>Payment Canceled!!!</p>

<img src={errorImage}
alt='success' 
className='mix-blend-multiply'
width={400}
height={400}/>

<Link to={"/cart"} className='text-xl font-bold underline text-red-600'>Back to order Page</Link>
</div>
  )
}

export default ErrorPage