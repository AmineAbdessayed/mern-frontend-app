import React, { useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import DisplayDTCurrency from '../helpers/displayDTCurrency'

const AdminProductCard = ({data,fetchDataAgain}) => {
    const [editProduct,seteditProduct]=useState(false)

    return (
        <div>

            <div className='bg-white rounded p-3'>
                <div className=''>
                <MdModeEditOutline className='text-blue-500 cursor-pointer' onClick={()=>seteditProduct(true)}/>
 
                </div>
                <div className='w-40'>
                    <div className='w-32 h-32 flex justify-center items-center'>
                 <img src={data?.productImage[0]} alt={data?.productName} width={100} height={100}  className=' mx-auto object-fill h-full'/>

                    </div>
                <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>
                </div>
                <p className='font-semibold'>
                     {
                    DisplayDTCurrency(data.sellingPrice)
                }
                </p>
               
                
            </div>
            {
                editProduct&&(

                    <AdminEditProduct productData={data} onClose={()=>seteditProduct(false)} fetchDataAgain={fetchDataAgain}/>


                )
            }


        </div>
    )
}

export default AdminProductCard;
