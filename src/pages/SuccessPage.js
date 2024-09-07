import React from 'react'
import successImage from '../assets/sucesssss.gif'
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className='w-full max-w-screen-lg mx-auto flex justify-center items-center flex-col my-4'>
                  <p className='font-meduim text-2xl  bg-green-400 text-white rounded-full p-2'>Payment Successfully</p>

        <img src={successImage}
         alt='success' 
         className='mix-blend-multiply'
          width={600}
          height={600}/>

          <Link to={"/cart"} className='text-xl font-bold underline text-blue-600'>Back to order Page</Link>
    </div>
  )
}

export default SuccessPage