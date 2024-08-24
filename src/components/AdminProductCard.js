import React, { useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';

const AdminProductCard = ({data,fetchDataAgain}) => {
    const [editProduct,seteditProduct]=useState(false)

    return (
        <div>

            <div className='bg-white rounded p-3'>
                <div className=''>
                <MdModeEditOutline className='text-blue-500 cursor-pointer' onClick={()=>seteditProduct(true)}/>
 
                </div>
                <div className='w-40'>
                    <img src={data?.productImage} alt={data?.productName} width={100} height={100}  className='w-fit mx-auto'/>
                <h1>{data.productName}</h1>
                </div>
                
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
