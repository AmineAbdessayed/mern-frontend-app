import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';


const AdminPanel = () => {

    const user = useSelector(state => state?.user?.user)


  return (
    <div className='min-h-[calc(100vh-120px)] md:flex hidden'>

        <aside className='bg-white w-full max-w-60 min-h-full customShadow'>


        <div className='text-2xl cursor-pointer flex justify-center items-center h-52 flex-col'>
              {user?.profilePic ?
                (<img src={user.profilePic} alt={user.name} className='w-24 h-24 rounded-full' />) :
                (<FaRegCircleUser />
                )}
                            <p className='mt-5 capitalize font-semibold'>{user?.username}</p>
                            <p className='mt-5 capitalize font-semibold text-sm'>{user?.role}</p>

            </div>
            <nav className='grid py-2'>
                <Link to={"allUsers"} className='px-2 py-2  hover:bg-slate-300' >All users</Link>
                <Link to={"products"} className='px-2 py-2 hover:bg-slate-300' >products</Link>
            </nav>
           

        </aside>
        <main className='p-4 w-full'>
            <Outlet/>

        </main>
    </div>
  )
}

export default AdminPanel