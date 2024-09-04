import React, { useContext, useEffect, useState } from 'react'
import SummaryApi from '../common'
import Context from '../context'
import displayDTCurrency from '../helpers/displayDTCurrency'
import { MdDeleteSweep } from "react-icons/md";
import { MdPayment } from "react-icons/md";





const Cart = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const context = useContext(Context)
  const loadingCart = new Array(context.productCount).fill(null)

  const GetData = async () => {
    setLoading(true)
    const DataApi = await fetch(SummaryApi.viewProductsCart.url, {
      method: SummaryApi.viewProductsCart.method,
      credentials: 'include',
      headers: {
        "content-type": "application/json"
      },

    })


    setLoading(false)

    const Response = await DataApi.json()

    if (Response.succes) {
      setData(Response.data)


    }
  }
  useEffect(() => {
    GetData()

  }, [])
  console.log("_______________ data :: ", data)

  const increaseQty = async (id, qte) => {
    const DataApi = await fetch(SummaryApi.updateCart.url, {
      method: SummaryApi.updateCart.method,
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        _id: id,
        quantity: qte + 1

      })
    })
    console.log("DataApi", DataApi.status)

    const Reponse = await DataApi.json()
    if (Reponse.success) {
      GetData()
    }
  }

  const DecreaseQty = async (id, qte) => {
    if (qte >= 2) {
      const DataApi = await fetch(SummaryApi.updateCart.url, {
        method: SummaryApi.updateCart.method,
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          _id: id,
          quantity: qte - 1

        })
      })
      console.log("DataApi", DataApi.status)

      const Reponse = await DataApi.json()
      if (Reponse.success) {
        GetData()
      }
    }
  }

  const DeleteCartProduct = async (id) => {
    const DataApi = await fetch(SummaryApi.DeleteCart.url, {
      method: SummaryApi.DeleteCart.method,
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        _id: id,

      })
    })
    console.log("DataApi", DataApi.status)

    const Reponse = await DataApi.json()
    if (Reponse.success) {
      GetData()
      context.fetchUserAddToCart()
    }


  }
  const totalQty = data.reduce((prev, curr) => prev + curr.quantity, 0)
  const totalPrice = data.reduce((prev, curr) => prev + (curr.quantity * curr?.productId?.sellingPrice), 0)
  return (



    <div className='container mx-auto'>

      <div className='text-center text-lg my-4'>
        {
          data.length === 0 && !loading && (
            <p className='bg-white  py-5'>No Data Available</p>
          )
        }

      </div>


      <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
        {/**view product */}

        <div className='w-full max-w-3xl'>
          {
            loading ? (
              loadingCart?.map(e => {
                return (
                  <div key={e + "Add to cart Loading"} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded '>
                  </div>
                )
              })


            ) : (
              data.map((product, index) => {
                return (
                  <div key={product?._id} className='w-full bg-white h-32 my-2 border border-slate-300 rounded flex flex-row'>
                    <div className='w-24 h-full bg-slate-200'>
                      <img src={product?.productId?.productImage[0]} className='h-full w-full object-scale-down mix-blend-multiply' />
                    </div>

                    <div className='p-4 py-2 relative w-full'>
                      <div className=' absolute right-0 rounded-full  hover:bg-red-700 text-black hover:text-white p-1 cursor-pointer' onClick={() => DeleteCartProduct(product?._id)}>
                        <MdDeleteSweep className='text-sm' />
                      </div>
                      <h2 className='text-xl lg:text-lg'>{product?.productId?.productName}</h2>
                      <p className='text-slate-600 capitalize'>{product.productId.category}</p>
                      <div className='flex justify-between'>
                        <p className='font-semibold text-red-700'>{displayDTCurrency(product.productId.sellingPrice)}</p>
                        <p className='font-semibold text-slate-600'>{displayDTCurrency(product.productId.sellingPrice * product.quantity)}</p>
                      </div>

                      <div className='py-1'>
                        <button className=' bg-red-400 hover:bg-red-600 rounded-full px-3 font-bold text-sm' onClick={() => DecreaseQty(product?._id, product.quantity)}>-</button>
                        <span className='font-bold'>{product?.quantity}</span>
                        <button className=' bg-green-400 hover:bg-green-600 rounded-full px-3 font-bold text-sm' onClick={() => increaseQty(product?._id, product.quantity)} >+</button>
                      </div>

                    </div>
                  </div>
                )
              })
            )
          }

        </div>


        {/**total :  */}
        <div className='mt-5 lg: mt-0 w-full max-w-sm'>
          {
            loading ? (
              <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse rounded'>

              </div>

            ) : (
              <div className='h-36 bg-white'>
                <h2 className='text-white bg-red-600 text-center text-lg'>Summary</h2>
                <div className='flex items-center justify-between px-2 py-2'>
                  <p>Quantity :</p>
                  <p className='font-semibold'>{totalQty} </p>
                </div>
                <div className='flex items-center justify-between px-2 py-2'>
                  <p className='underline'>Total :</p>
                  <p className='underline text-lg'> <strong>{displayDTCurrency(totalPrice)}</strong></p>

                </div>
                <div className=''>
                  <div className='bg-blue-700 text-white w-full p-2 flex justify-center text-center'>
                  <p> <MdPayment className='text-sm' />   </p>
                  <p>Payment </p>

                  
                    </div>
                </div>


              </div>

            )
          }
        </div>


      </div>
    </div>
  )
}

export default Cart