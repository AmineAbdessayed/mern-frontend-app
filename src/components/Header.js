import React, { useState } from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../Store/userSlice';
import ROLE from '../common/role';




const Header = () => {

  const user = useSelector(state => state?.user?.user)
  console.log(user)
  const dispatch = useDispatch()
  const [menuDisplay,setMenuDisplay]=useState(false)

  const handleLogout = async () => {

    const dataApi = await fetch(SummaryApi.userLogout.url, {
      method: SummaryApi.userLogout.method,
      credentials: 'include'
    })
    const data = await dataApi.json()
    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetails(null))
    }
    if (data.error) {
      toast.error(data.error)
    }
  }
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>

        <div>
          <Link to={"/"}>
            <Logo w={150} h={50} />


          </Link>

        </div>


        <div className=' hidden lg:flex items-center pl-2'>
          <input type='text' placeholder='search product here' className='w-full outline-none ' />
          <div className=' text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />

          </div>

        </div>

          <div className='flex items-center gap-9 '>
          <div className='relative group flex justify-center '>
           {
            user?._id&&
               <div className='text-3xl cursor-pointer' onClick={()=>setMenuDisplay(prev=>!prev)}>
              {user?.profilePic ?
                (<img src={user.profilePic} alt={user.name} className='w-10 h-10 rounded-full' />) :
                (<FaRegCircleUser />
                )}
            </div>
            }

        
            {
            menuDisplay&& 

            
            <div className='absolute bg-white bottom-0  top-11 h-fit p-3 shadow-lg rounded '>
              
                 <nav className='hover:bg-slate-100  whitespace-nowrap p-1'>
                  {
                    user?.role===ROLE.ADMIN&&
                  
                <Link to={"admin/products"} onClick={()=>setMenuDisplay(prev=>!prev)} >Admin Panel</Link>
                  }
              </nav>
            
             

             

            </div>}


          </div>


          <div className='text-2xl relative'>
            <span><FaShoppingCart /> </span>
            <div className='text-sm bg-red-600 rounded-full text-white p-1 w-5 flex items-center justify-center absolute -top-2 -right-4'>
              <p>0</p>
            </div>


          </div>

          <div>
            {
              user?._id ? <Link to={"/login"} className='bg-red-600 px-3 py-1 rounded-full text-white hover:bg-red-700' onClick={handleLogout}>Logout</Link> : <Link to={"/login"} className='bg-red-600 px-3 py-1 rounded-full text-white hover:bg-red-700'>Login</Link>

            }

          </div>

        </div>
      </div>


    </header>
  )
}

export default Header