import React, { useContext, useEffect, useRef, useState } from 'react'
import FetchCategoryProduct from '../helpers/FetchCategoryProduct'
import displayDTCurrency from '../helpers/displayDTCurrency'

import { Link } from 'react-router-dom';
import addToCart from '../helpers/addToCart';
import Context from '../context';



const CategoryWiseProduct = ({ category ,heading}) => {

    const [data, setData] = useState([])
    const [Loading, setLoading] = useState(false)
    const loadingList = new Array(13).fill(null)
    const {fetchUserAddToCart}=useContext(Context)

    const handleAddToCart=async(e,id)=>{

      await addToCart(e,id)
      await fetchUserAddToCart()

    }

  
    const fetchData=async()=>{
      setLoading(true)
      const categoryProduct = await FetchCategoryProduct(category)
      setLoading(false)
      setData(categoryProduct?.data)
  
    }
   useEffect(()=>{
    fetchData()
  
  
   },[])
  

    return (
      <div className='container mx-auto px-4 my-6 relative'>
  
           
           <h2 className=' flex justify-center text-3xl font-semibold py-4'>{heading}</h2>

          <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,320px))] justify-between md:gap-6 overflow-x-scroll scrollbar-none transition-all mt-9' >
     
         
          {
            Loading? (
              loadingList.map((product,index)=>{
                return (
                  <div className='w-full min-w-[280px] md:min-w-[200]  bg-white rounded-sm shadow row'>
                  <div className='bg-slate-200 h-56 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse '>
              
          
                  </div>  
                  <div className='p-3'>
                    <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 w-full animate-pulse bg-slate-200 '></h2>
                    <p className='font-semibold text-slate-500 capitalize p-1 w-full animate-pulse bg-slate-200 '></p>
          
                    <div className='flex gap-2'> 
                      <p className='text-red-600 font-medium bg-slate-200  animate-pulse' ></p>
                      <p className='text-slate-500 line-through p-1 w-full animate-pulse bg-slate-200 '></p>
    
                    </div>
                    <button className='text-sm md:text-lg rounded-full text-white px-2 mt-2 p-1 w-full animate-pulse bg-slate-200 '></button>
    
                  </div>
                  
                </div>
          
    
                )
              })            ): (

              data.map((product,index)=>{
                return (
                  <Link to={"/product/"+product?._id} className='w-full min-w-[280px] md:min-w-[200]  bg-white rounded-sm shadow row'>
                  <div className='bg-slate-200 h-56 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center'>
              
                    <img src={product.productImage[0]} className='object-scale-down h-full hover:scale-125 transition-all mix-blend-multiply'/>
          
                  </div>  
                  <div className='p-3'>
                    <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                    <p className='font-semibold text-slate-500 capitalize'>{product?.category}</p>
          
                    <div className='flex gap-2'> 
                      <p className='text-red-600 font-medium' >{displayDTCurrency(product?.sellingPrice)}</p>
                      <p className='text-slate-500 line-through'>{displayDTCurrency(product?.price)}</p>
    
                    </div>
                    <button className='text-sm md:text-lg bg-red-500 hover:bg-red-700 rounded-full text-white px-2 mt-2'  onClick={(e)=>handleAddToCart}>Add to Cart</button>
    
                  </div>
                  
                </Link>
          
    
                )
              })

            )
            
           }
       
  
          </div>
      </div>
    )
  }

export default CategoryWiseProduct