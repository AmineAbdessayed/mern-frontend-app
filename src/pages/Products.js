import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'

const Products = () => {
  const[uploadProduct,setuploadProduct]=useState(false)
  return (
    <div>

    <div className='bg-white font-bold py-2 px-4 flex justify-between '>
      <h2>All Products</h2>
      <button className='bg-black rounded-full p-2 text-white hover:bg-red-400 border-2 border-red-600' onClick={()=>setuploadProduct(true)}>Add Product</button>
    </div>
    {
      uploadProduct&&
      <UploadProduct onClose={()=>setuploadProduct(false)}/>

    } 
    </div>

  )
}

export default Products