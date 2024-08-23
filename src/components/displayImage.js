import React from 'react'
import { IoMdClose } from "react-icons/io";


const displayImage = ({ imgUrl , onClose}) => {
  return (
    <div className=' fixed left-0 right-0 bottom-0 top-0 flex justify-center items-center'>

        <div className='bg-slate-800 shadow-2xl'>
        <div className='w-fit ml-auto hover:text-red-500 text-xl cursor-pointer' onClick={onClose}>
                        <IoMdClose />
                    </div>

           <div className='flex justify-center p-4 max-w-[80vh] max-h-[80vh]'>
        <img src={imgUrl} className='w-full h-full'/>
    </div>
        </div>


    </div>
 
  )
}

export default displayImage