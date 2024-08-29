import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";
import displayDTCurrency from '../helpers/displayDTCurrency'


const ProductDetails = () => {

  const [data, setData] = useState({
    productName: "",
    brandName: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
    category: ""




  },
  )
  const params = useParams()
  const [activeImage, setactiveImage] = useState("")


  const FetchProductDetails = async () => {

    const DataApi = await fetch(SummaryApi.getProductDetails.url, {
      method: SummaryApi.getProductDetails.method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        productId: params?.id

      })
    })
    const dataReponse = await DataApi.json()
    setData(dataReponse.data)
    setactiveImage(dataReponse?.data.productImage[1])




  }


  useEffect(() => {
    FetchProductDetails()


  }, [])
  console.log("ID product : ", params)
  console.log("Data : ", data)

  const handleMouseSelection = (imgUrl) => {
    setactiveImage(imgUrl)


  }

  return (

    <div className='container mx-auto p-32 ml-10'>
      <div className='min-h-[200px] flex flex-col lg:flex-row gap-11'>

        {/** Product Image */}
        <div className=' h-96 flex  flex-col lg:flex-row-reverse gap-4'>
          <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200'>
            <img src={activeImage} />

          </div>

          <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
            {

              data.productImage.map((image, index) => {
                return (
                  <div className='h-28 w-28 bg-slate-200 rounded'>

                    <img src={image} alt={image} className='h-full w-full object-scale-down mix-blend-multiply cursor-pointer' onMouseEnter={() => handleMouseSelection(image)} onClick={() => handleMouseSelection(image)} />
                  </div>
                )
              })
            }
          </div>


        </div>





        {/** Product details */}

        <div className='flex flex-col gap-2'>
          <div>
            <p className='bg-red-300 rounded-full px-1 w-fit '>{data?.brandName}</p>

          </div>
          <h2 className='text-2xl lg:text-3xl font-medium'>{data?.productName}</h2>
          <p className='text-slate-400 capitalize'>{data.category}</p>
          <div className='flex text-yellow-500 text-md gap-1'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />


          </div>

          <div className=' flex flex-row gap-4 text-2xl lg:text-3xl font-medium'>
            <p className='text-red-600'>{displayDTCurrency(data.sellingPrice)}</p>
            <p className=' text-slate-500 line-through'>{displayDTCurrency(data.price)}</p>
          </div>
          <div className='flex gap-2'>
            <button className='border-2 border-red-500 rounded px-3 py-1 min-w-[100px] text-red-600 hover:bg-red-600 hover:text-white'>Buy</button>
            <button className='border-2 border-red-500 rounded px-3 py-1 min-w-[100px] text-white bg-red-600 hover:text-red-500 hover:bg-white  '>Add to Cart</button>
          </div>

          <div className='p-1'>
            <p className='text-slate-500'>Description :</p>
            <p>{data.description}</p>
          </div>



        </div>

      </div>

    </div>
  )
}

export default ProductDetails