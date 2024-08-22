import React, { useState } from 'react'
import ROLE from '../common/role'
import { IoMdClose } from "react-icons/io";
import SummaryApi from '../common';
import { toast } from 'react-toastify';


const ChangeUserRole = ({username,email,role,userID,onClose,callFunc}) => {
    const [UserRole, setUserRole] = useState(role)

    const handleChangeRole = (e) => {


        setUserRole(e.target.value)
    }


    const handleUpdate=async()=>{
        const dataAPI= await fetch(SummaryApi.updateUser.url,{
            method:SummaryApi.updateUser.method,
            credentials:'include',
            headers : {
                "content-type":"application/json"
            },
            body: JSON.stringify({
                userID:userID,
                role:UserRole
            }
            )

        })
        const dataRes= await dataAPI.json()
        if(dataRes.success){
            toast.success(dataRes.message)
            onClose()
            callFunc()
        }
        console.log(dataRes)
    }

    return (
        <div className='flex justify-between items-center fixed top-0 w-full h-full z-10 bottom-0 left-0 right-0 bg-slate-300 bg-opacity-40'>
            <div className='bg-white p-8 font-medium w-full max-w-sm mx-auto'>
                <button className=' block ml-auto cursor-pointer bg-red-300 p-1 ' onClick={onClose}>

                    <IoMdClose />
                </button>


                <h1 className='text-lg'>Change user Role</h1>
                <p className='text-sm mt-5'>Name : {username}</p>
                <p className='text-sm'>Email : {email}</p>

                <div className='flex justify-between mt-5'>
                    <p className='text-sm'>Role :</p>

                    <select className='border px-3 py-1' value={UserRole} onChange={handleChangeRole}>
                        {
                            Object.values(ROLE).map(e => {
                                return (
                                    <option className='bg-sky-300'>{e}</option>

                                )
                            })
                        }
                    </select>
                </div>
                <button className='bg-red-300 rounded-full p-3 border w-fit mx-auto block hover:bg-red-400 text-white' onClick={handleUpdate}>change Role</button>

            </div>
        </div>
    )
}

export default ChangeUserRole