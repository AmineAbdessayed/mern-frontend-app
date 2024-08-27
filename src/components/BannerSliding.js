import React, { useEffect, useState } from 'react'
import image1 from '../assets/banner/img1.webp'
import image2 from '../assets/banner/img2.webp'
import image3 from '../assets/banner/img3.jpg'
import image4 from '../assets/banner/img4.jpg'
import image5 from '../assets/banner/img5.webp'

import image1mobile from '../assets/banner/img1_mobile.jpg'
import image2mobile from '../assets/banner/img2_mobile.webp'
import image3mobile from '../assets/banner/img3_mobile.jpg'
import image4mobile from '../assets/banner/img4_mobile.jpg'
import image5mobile from '../assets/banner/img5_mobile.png'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";




const BannerSliding = () => {

    const [currentImage,setcurrentImage]=useState(1)

    const DesktopImages=[
        image1,
        image2,
        image3,
        image4,
        image5
    ]
    const mobileImages=[
        image1mobile,
        image2mobile,
        image3mobile,
        image4mobile,
        image5mobile
    ]

    const nextImage=()=>{
        if(DesktopImages.length-1>currentImage)
         setcurrentImage(prev=>prev+1)


    }
    const prevImage=()=>{
        if(DesktopImages.length!=0)
             setcurrentImage(currentImage-1)


    }

    useEffect(()=>{
        const intervall=setInterval(()=>{

            if(DesktopImages.length-1>currentImage){
                 nextImage()
            }
           
        else{
            setcurrentImage(0)
        }


        },4000)

        return ()=>clearInterval(intervall)

    },[currentImage])




    return (
        <div className='container mx-auto px-4 rounded '>

            <div className='md:h-72 w-full bg-slate-200 relative'>
                <div className='absolute z-20 h-full w-full flex items-center'>
                    <div className='flex justify-between w-full'>
                          <button onClick={prevImage}><FaAngleLeft className='text-3xl  bg-white rounded-full p-' />  </button>
                <button onClick={nextImage}><FaAngleRight  className='text-3xl bg-white rounded-full p-'/> </button>
                    </div>
              

                </div>
              


                   <div className='hidden md:flex h-full w-full overflow-hidden'>
                   {
                        DesktopImages.map((banners,index)=>{
                            return(
                                <div className='w-full h-full min-h-full min-w-full transition-all' style={{transform: `translateX(-${currentImage *100}%)`}}>

                                <img src={banners} className='w-full h-full' />
                                </div>

 
                            )
                        })
                    }

                   </div>

             
                   <div className='flex h-full w-full overflow-hidden md:hidden'>
                   {
                        mobileImages.map((banners,index)=>{
                            return(
                                <div className='w-full h-full min-h-full min-w-full transition-all'style={{transform: `translateX(-${currentImage *100}%)`}}>

                                <img src={banners} className='w-full h-full' />
                                </div>

 
                            )
                        })
                    }

                   </div>




            </div>
        </div>
    )
}

export default BannerSliding