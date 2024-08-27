import React, { useEffect, useState } from 'react'
import SummaryApi from '../common/index'
import { Link } from 'react-router-dom'


const CategoryList = () => {

    const [categoryProduct, setcategoryProduct] = useState([])
    const [loading, setloading] = useState(false)


    const DisplayLoading = new Array(4).fill(null)

    const categoryList = async () => {
        setloading(true)

        const dataApi = await fetch(SummaryApi.getCategoryProduct.url)
        const dataResponse = await dataApi.json()
        setloading(false)
        setcategoryProduct(dataResponse.data)

      

    }

    console.log("data:", categoryProduct)
    useEffect(() => {
        categoryList()

    }, [])


    return (
        <div className='container mx-auto p-4'>
            <div className='flex items-center gap-4 justify-between overflow-scroll scrollbar-none:'>
                {
                    loading ? (

                        DisplayLoading.map((index, key) => {
                            return (
                                <div className='h-16 w-16 rounded-full overflow-hidden bg-slate-200 animate-ping'>                             </div>



                            )
                        })




                    ) : (
                        categoryProduct.map((product, index) => {

                            return (
                                <Link className='p-3 cursor-pointer' to={"categorie/" + product?.category} key={product?.category}>
                                    <div className='w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-full p-4 bg-slate-200 flex items-center justify-center'>
                                        <img src={product?.productImage[0]} className='h-full  object-scale-down mix-blend-multiply hover:scale-125 transition-all' />


                                    </div>
                                    <p className='text-center text-sm md:text-base capitalize'>{product?.category}</p>

                                </Link>


                            )
                        })

                    )


                }
            </div>

            CategoryList
        </div>
    )
}

export default CategoryList