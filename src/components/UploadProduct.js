import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import productCategory from '../helpers/productCategory'
import { FaCloudUploadAlt } from "react-icons/fa";



const UploadProduct = ({ onClose }) => {
    const [data, setdata] = useState({
        productName: "",
        brandName: "",
        category: "",
        productImage: "",
        description: "",
        price: "",
        selling: ""
    })
    /*
    const handleOnchange=()=>{

    }
        */
    
    return (

        <div className='bg-slate-200 bg-opacity-35 fixed w-full h-full top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
            <div className='bg-white p-4 rounded w-full  max-w-2xl h-full max-h-[75%] overflow-hidden'>

                <div className='flex justify-between items-center'>

                    <h2 className='font-bold text-lg'>Upload Product</h2>
                    <div className='w-fit ml-auto hover:text-red-500 text-xl cursor-pointer' onClick={onClose}>
                        <IoMdClose />
                    </div>
                </div>

                <form className='grid p-4 gap-2 overflow-y-scroll h-full'>

                    <label htmlFor='productName'>Product Name</label>
                    <input type='text' 
                     id='productName'
                     placeholder='Enter product name '
                     name='productName'
                     value={data.productName}
                     onChange=""
                     className='p-1 bg-slate-200'
                     />

                     
                    <label htmlFor='brandName'>Brand Name</label>
                    <input type='text' 
                     id='brandName'
                     placeholder='Enter Brand name '
                     name='brandName'
                     value={data.brandName}
                     onChange=""
                     className='p-1 bg-slate-200'
                     />

                     <label htmlFor='category'> Select Category</label>
                     <select value={data.category} className='p-1 bg-slate-200'>
                        {productCategory.map((category,index)=>{
                            return(
                                <option value={category.value} key={category.value+index}>{category.label}</option>
                            )
                        })
                        }
                     </select>

                     <label htmlFor='productImage'>productImage</label>
                     <label htmlFor='uploadImageInput'>

                     <div className='w-full h-32 bg-slate-200 rounded p-2'>

                       
                     <div className='text-slate-500 flex justify-center items-center flex-col'>

                        <span className='text-7xl cursor-pointer'> <FaCloudUploadAlt />  </span> 
                         <p className='text-sm pr-7'>Upload Product Image</p>
                         <input type='file' id='uploadImageInput'/>
                     </div>
                     
                     </div>
                     </label>

                     <div>
                        <img src='' width={50} height={50} className='bg-slate-200'/>
                     </div>

                </form>


            </div>
        </div>

    )
}

export default UploadProduct