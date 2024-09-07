import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SummaryApi from '../common/index'
import CardProductForSearch from '../components/CardProductForSearch'


const SearchProduct = () => {
    const query=useLocation()
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)


    console.log("query:",query.search)

    const fetchProduct=async()=>{
      setLoading(true)
      const DataApi=await fetch(SummaryApi.searchProduct.url+query.search)
      const Response= await DataApi.json()
      setData(Response.data)
      setLoading(false)

    }
    useEffect(()=>{
      fetchProduct()

    },[query])
  return (
    <div className='container mx-auto p-4'>
      {
        loading&&(
          <p className='text-lg text-center'>Loading ...</p>
        )
      }
      <p className='text-lg font-semibold my-3'>Search Results : {data.length}</p>

      {
        data.length===0 && !loading&&(
          <p className='bg-white text-lg text-center p-4'>No Data Available </p>
        )
      }
      
         {
        data.length!==0 && !loading && (
        
              <CardProductForSearch Loading={loading} data={data}/>
        
            )
          }
     
       
    
      </div>
  )
}

export default SearchProduct