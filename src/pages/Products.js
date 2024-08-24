import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import SummaryApi from '../common/index'
import AdminProductCard from '../components/AdminProductCard'



const Products = () => {
  const[uploadProduct,setuploadProduct]=useState(false)
  const[products,setproducts]=useState([])

  const getProducts=async()=>{

    const dataRes= await fetch(SummaryApi.getProducts.url, {
      method:SummaryApi.getProducts.method
    })
    const dataApi=await dataRes.json()
    setproducts(dataApi.data || [])
  }
  useEffect(()=>{
    getProducts()

  },[])

  console.log("products: ", products)



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
    <div className='flex justify-center gap-5 py-6'>
      {
        products.map((product,index)=>{

          return (
            <AdminProductCard data={product} key={index} fetchDataAgain={getProducts}/>

      
          )
        }

      )}
    </div>
    </div>

  )
}

export default Products