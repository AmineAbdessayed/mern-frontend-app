import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import productCategory from '../helpers/productCategory'
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from "../helpers/uploadImage"
import DisplayImage from '../components/displayImage';
import { MdDelete } from "react-icons/md";




const UploadProduct = ({ onClose }) => {

    const [openFullScreenImage, setopenFullScreenImage] = useState(false)
    const [fullscreenImage, setfullscreenImage] = useState("")

    const [fileUploadInput, setfileUploadInput] = useState()
    const [data, setdata] = useState({
        productName: "",
        brandName: "",
        category: "",
        productImage: "",
        description: "",
        price: "",
        sellingPrice: ""
    })

    const handleOnchange = (e) => {
        const { name, value } = e.target

        setdata((prev) => {
            return {
                ...prev,
                [name]: value

            }
        })



    }


    const handleFileUpload = async (e) => {
        const file = e.target.files[0]

        console.log("file::", file)

        const uploadImageCloudinary = await uploadImage(file)

        setdata((prev) => {
            return {
                ...prev,
                productImage: [...prev.productImage, uploadImageCloudinary.url]

            }
        })
    }

    const handleDelete = (index) => {

        console.log("index image: ", index)
        const newProductImage = [...data.productImage]
        newProductImage.splice(index, 1)
        setdata((prev) => {
            return {
                ...prev,
                productImage: [...newProductImage]

            }
        })





    }

    return (

        <div className='bg-slate-200 bg-opacity-35 fixed w-full h-full top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
            <div className='bg-white p-4 rounded w-full  max-w-2xl h-full max-h-[75%] overflow-hidden'>

                <div className='flex justify-between items-center'>

                    <h2 className='font-bold text-lg'>Upload Product</h2>
                    <div className='w-fit ml-auto hover:text-red-500 text-xl cursor-pointer' onClick={onClose}>
                        <IoMdClose />
                    </div>
                </div>

                <form className='grid p-4 gap-2 overflow-y-scroll h-full'>

                    <label htmlFor='productName'>Product Name</label>
                    <input type='text'
                        id='productName'
                        placeholder='Enter product name '
                        name='productName'
                        value={data.productName}
                        onChange={handleOnchange}
                        className='p-1 bg-slate-200'
                    />


                    <label htmlFor='brandName'>Brand Name</label>
                    <input type='text'
                        id='brandName'
                        placeholder='Enter Brand name '
                        name='brandName'
                        value={data.brandName}
                        onChange={handleOnchange}
                        className='p-1 bg-slate-200'
                    />

                    <label htmlFor='category'> Select Category</label>
                    <select value={data.category} className='p-1 bg-slate-200'>
                        {productCategory.map((category, index) => {
                            return (
                                <option value={category.value} key={category.value + index}>{category.label}</option>
                            )
                        })
                        }
                    </select>

                    <label htmlFor='productImage'>productImage</label>
                    <label htmlFor='uploadImageInput'>

                        <div className='w-full h-32 bg-slate-200 rounded p-2'>


                            <div className='text-slate-500 flex justify-center items-center flex-col'>

                                <span className='text-7xl cursor-pointer'> <FaCloudUploadAlt />  </span>
                                <p className='text-sm pr-7'>Upload Product Image</p>
                                <input type='file' id='uploadImageInput' className='hidden' onChange={handleFileUpload} value={fileUploadInput} />
                            </div>

                        </div>
                    </label>

                    <div className='flex justify-center gap-3'>


                        {
                            data?.productImage ? (
                                data.productImage.map((e1, index) => {
                                    return (
                                        <div className='flex'>
                                            <img src={e1} alt={e1} width={50} height={50} className='bg-slate-200 cursor-pointer' onClick={
                                                () => {
                                                    setopenFullScreenImage(true)
                                                    setfullscreenImage(e1)
                                                }

                                            } />
                                            <MdDelete className='cursor-pointer text-red-950 hover:text-red-600' onClick={() => handleDelete(index)} />

                                        </div>



                                    )
                                })


                            ) :
                                (<p className='text-red-700 text-md'>Please Upload Image</p>)
                        }
                    </div>



                    <label htmlFor='price'> Price :</label>
                    <input type='number'
                        id='price'
                        placeholder='Enter product Price '
                        name='price'
                        value={data.price}
                        onChange={handleOnchange}
                        className='p-1 bg-slate-200'
                    />

                    <label htmlFor='sellingPrice'> SellingPrice :</label>
                    <input type='number'
                        id='sellingPrice'
                        placeholder='Enter product Price '
                        name='sellingPrice'
                        value={data.sellingPrice}
                        onChange={handleOnchange}
                        className='p-1 bg-slate-200'
                    />

                    <label htmlFor='description'> description :</label>
                    <textarea type='textArea'
                        id='description'
                        placeholder='Enter product Price '
                        name='description'
                        value={data.description}
                        onChange={handleOnchange}
                        className='p-1 bg-slate-200'
                    />






                    <button className='bg-red-500 text-white rounded'> Upload Product</button>

                </form>

            </div>
            {
                openFullScreenImage && (
                    <DisplayImage imgUrl={fullscreenImage} onClose={() => setopenFullScreenImage(false)} />


                )
            }
        </div>



    )
}

export default UploadProduct