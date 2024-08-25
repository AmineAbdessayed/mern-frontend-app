import React from 'react'
import { useParams } from 'react-router-dom'

const Category = () => {

    const params=useParams()
    console.log("categorie ::: ", params.CategorieName)
  return (
    <div><h1>{params.CategorieName}</h1></div>
  )
}

export default Category