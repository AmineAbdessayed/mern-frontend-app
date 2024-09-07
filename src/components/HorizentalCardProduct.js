import React, { useContext, useEffect, useRef, useState } from 'react'
import FetchCategoryProduct from '../helpers/FetchCategoryProduct'
import displayDTCurrency from '../helpers/displayDTCurrency'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import addToCart from '../helpers/addToCart';
import Context from '../context';

 const HorizentalCardProduct = ({ category ,heading}) => {

  const [data, setData] = useState([])
  const [Loading, setLoading] = useState(false)
  const loadingList = new Array(4).fill(null)
  const [scroll,setScroll]=useState(0)
  const scrollElement=useRef()

  const fetchData=async()=>{
    setLoading(true)
    const categoryProduct = await FetchCategoryProduct(category)
    setData(categoryProduct?.data)
    setLoading(false)

  }
  const {fetchUserAddToCart}=useContext(Context)

    const handleAddToCart=async(e,id)=>{

      await addToCart(e,id)
      await fetchUserAddToCart()

    }

 useEffect(()=>{
  fetchData()


 },[])

 const ScrollRightFn=()=>{
  scrollElement.current.scrollLeft+=300
 }
 const ScrollLeft=()=>{
  scrollElement.current.scrollLeft-=300
 }
  return (
    <div className='container mx-auto px-4 my-6 relative'>

         
         <h2 className='text-2xl font-semibold py-4'>{heading}</h2>
        <div className='flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all' ref={scrollElement}>
        <button ><FaAngleLeft className='text-3xl  bg-white rounded-full p-1 absolute left-0' onClick={ScrollLeft} />  </button>
        <button><FaAngleRight  className='text-3xl bg-white rounded-full p-1 absolute right-0' onClick={ScrollRightFn}/> </button>
       
        {
          Loading? (
            loadingList.map((product,index)=>{
              return (
               
                  <div className='w-full min-w-[280px] md:min-w-[390px] h-36 bg-white rounded-sm shadow flex'>
                <div className='bg-slate-200 h-full p-4 min-w-[180px] animate-pulse'>
            
        
                </div>  
                <div className='p-3 grid w-full gap-2'>
                  <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 bg-slate-200 animate-pulse rounded-full'></h2>
                  <p className='font-semibold text-slate-500 capitalize p-1 bg-slate-200 animate-pulse rounded-full'></p>
        
                  <div className='flex gap-2 w-full'> 
                    <p className='text-red-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full' ></p>
                    <p className='text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
  
                  </div>
                  <button className='text-sm md:text-lg  rounded-full text-white px-2 mt-2 w-full bg-slate-200 animate-pulse rounded-full'></button>
  
                </div>
                
              </div>
  
                )
  
                
        
  
              
            })

          ):
          
          data.map((product,index)=>{
            return (
             
                <Link to={"/product/"+product?._id} className='w-full min-w-[280px] md:min-w-[390px] h-36 bg-white rounded-sm shadow flex'> 
              <div className='bg-slate-200 h-full p-4 min-w-[180px]'>
          
                <img src={product.productImage[0]} className='object-scale-down h-full hover:scale-125 transition-all mix-blend-multiply'/>
      
              </div>  
              <div className='p-3'>
                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                <p className='font-semibold text-slate-500 capitalize'>{product?.category}</p>
      
                <div className='flex gap-2'> 
                  <p className='text-red-600 font-medium' >{displayDTCurrency(product?.sellingPrice)}</p>
                  <p className='text-slate-500 line-through'>{displayDTCurrency(product?.price)}</p>

                </div>
                <button className='text-sm md:text-lg bg-red-500 hover:bg-red-700 rounded-full text-white px-2 mt-2'
                        onClick={(e)=>handleAddToCart(e,product?._id)}>
                          
                          Add to Cart
                        </button>

              </div>
              
              </Link>
              )

              
      

            
          })
         }
     

        </div>
    </div>
  )
}

export default HorizentalCardProduct