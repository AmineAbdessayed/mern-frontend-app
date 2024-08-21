import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import {toast} from 'react-toastify'
import moment from 'moment'
const AllUsers = () => {

  const[AllUsers,setAllUsers]=useState([])
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
    <thead>
    <tr>

      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Picture</th>
      <th>Created Date</th>
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
              
            </tr>
          )
        })
      }

    </tbody>
  </table>


    </div>
  )
}

export default AllUsers