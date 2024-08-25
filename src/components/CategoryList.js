import React, { useEffect, useState } from 'react'
import SummaryApi from '../common/index'
import { Link } from 'react-router-dom'


const CategoryList = () => {

    const [categoryProduct, setcategoryProduct] = useState([])

    const categoryList = async () => {

        const dataRes = await fetch(SummaryApi.getCategoryProduct.url, {
            method: SummaryApi.getCategoryProduct.method
        })
        const dataApi = await dataRes.json()

        setcategoryProduct(dataApi)


    }

    console.log("data:", categoryProduct)
    useEffect(() => {
        categoryList()

    }, [])


    return (
        <div className='container mx-auto p-4'>
            <div className='flex items-center gap-4 justify-between overflow-scroll scrollbar-none:'>
                {
                    categoryProduct.map((product, index) => {
                        return (
                            <Link className='p-3 cursor-pointer' to={"categorie/"+product.category}>
                                <div className='w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-full p-4 bg-slate-200 flex items-center justify-center'>
                                    <img src={product?.productImage[0]} className='h-full  object-scale-down mix-blend-multiply hover:scale-125 transition-all' />


                                </div>
                                <p className='text-center text-sm md:text-base capitalize'>{product?.category}</p>

                            </Link>


                        )
                    })

                }
            </div>

            CategoryList
        </div>
    )
}

export default CategoryList