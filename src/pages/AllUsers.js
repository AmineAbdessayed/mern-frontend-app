import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import {toast} from 'react-toastify'
import moment from 'moment'
import { FaEdit } from "react-icons/fa";
import ChangeUserRole from '../components/ChangeUserRole';

const AllUsers = () => {

  const[AllUsers,setAllUsers]=useState([])
  const[openUpdateRole,setopenUpdateRole]=useState(false)
  const[userUpdateDetails,setuserUpdateDetails]=useState({
    username:"",
    email:"",
    role:"",
    _id:""
    
})

  useEffect(()=>{
    fetchAllusers()


  },[])
  const fetchAllusers=async()=>{
    const dataApi= await fetch(SummaryApi.allUsers.url,{
      method:SummaryApi.allUsers.method,
      credentials:'include'
    })
    const dataRes= await dataApi.json()
    if(dataRes.success){
      setAllUsers(dataRes.data)
    }
    if(dataRes.error){
      toast.error(dataRes.error)
    }

    console.log(dataRes)

  }
  return (
    <div>

  <table className='w-full userTableClass bg-white'>
    <thead className='bg-black text-white'>
    <tr>

      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Picture</th>
      <th>Created Date</th>
      <th>Edit</th>
      </tr>

    </thead>
    <tbody>
      {
        AllUsers.map((e,i)=>{
          return (

  
          <tr>
            <td>{i+1}</td>
            <td>{e?.username}</td>
            <td>{e?.email}</td>
            <td>{e?.role}</td>
            <td>{moment(e?.createdAt).format("MMM Do YY")}</td>
            <td className='flex justify-center bg-green-300 rounded-full p-1 cursor-pointer hover:bg-green-500 ' 
            onClick={()=>{
              setuserUpdateDetails(e)
                setopenUpdateRole(true)

            }}
              >
               
                <FaEdit />
            </td>
              
            </tr>
          )
        })
      }

    </tbody>
  </table>
  {
    openUpdateRole&&(
      <ChangeUserRole 
          onClose={()=>setopenUpdateRole(false)}
          username={userUpdateDetails.username}   
          email={userUpdateDetails.email}  
          role={userUpdateDetails.role} 
          userID={userUpdateDetails._id}
          callFunc={fetchAllusers} /> )


    
  }



    </div>
  )
}

export default AllUsers