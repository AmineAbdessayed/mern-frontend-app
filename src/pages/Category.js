import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import productCategory from '../helpers/productCategory'
import CardProductForSearch from '../components/CardProductForSearch'
import SummaryApi from '../common'

const Category = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const location = useLocation()
  const urlSearch = new URLSearchParams(location.search)
  const urlCategoryListinArray = urlSearch.getAll('category')
  const urlCategoryListObject = {}
  urlCategoryListinArray.forEach((e1) => {
    urlCategoryListObject[e1] = true
  })

  const [selectCategory, setSelectCategory] = useState(urlCategoryListObject)
  const [filterCategoryList, setFilterCategoryList] = useState([])

  const fetchData = async () => {
    setLoading(true)
    try {
      const DataApi = await fetch(SummaryApi.filterProduct.url, {
        method: SummaryApi.filterProduct.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: filterCategoryList,
        }),
      })
      const Response = await DataApi.json()
      console.log('API Response:', Response)
      setData(Response?.data || [])
    } catch (error) {
      console.error('Error fetching products:', error)
    }
    setLoading(false)
  }

  const handleSelectCategory = (e) => {
    const { value, checked } = e.target
    setSelectCategory((prev) => ({
      ...prev,
      [value]: checked,
    }))
  }

  useEffect(() => {
    fetchData()
  }, [filterCategoryList])

  useEffect(() => {
    const arrayOfCategory = Object.keys(selectCategory)
      .map((categoryKeyName) => {
        if (selectCategory[categoryKeyName]) {
          return categoryKeyName
        }
        return null
      })
      .filter((e1) => e1)

    setFilterCategoryList(arrayOfCategory)

    const urlFormat = arrayOfCategory.map((el, index) => {
      if (arrayOfCategory.length - 1 === index) {
        return `category=${el}`
      }
      return `category=${el}&&`
    })

    navigate('/categorie?' + urlFormat.join(''))
  }, [selectCategory])


   const [sortBy,setsortBy]=useState("")
const handleSort=(e)=>{
  const {value}=e.target
  setsortBy(value)
  if(value==="asc"){
    setData(p=>p.sort((a,b)=>a.sellingPrice-b.sellingPrice))
  }
  if(value==="dsc"){
    setData(p=>p.sort((a,b)=>b.sellingPrice-a.sellingPrice))
  }

}

  return (
    <div className='container mx-auto p-4'>
      <div className='hidden lg:grid grid-cols-[200px,1fr]'>
        <div className='bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>

          {/**Sort By */}

          <div className=''>
            <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-x-slate-950'>
              Sort by
            </h3>
            <form className='text-sm flex flex-col gap-1 py-2'>
              <div>
                <input type='radio' name='sortBy' value={"asc"} onChange={handleSort}/>
                <label className='px-1'>Price - Low to High</label>
              </div>

              <div>
                <input type='radio' name='sortBy' value={"dsc"} onChange={handleSort}/>
                <label className='px-1'>Price - High to Low</label>
              </div>
            </form>
          </div>

          <div className=''>
            <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-x-slate-950'>
              Category
            </h3>
            <form className='text-sm flex flex-col gap-1 py-2'>
              {productCategory.map((category) => (
                <div className='flex items-center gap-3' key={category?.value}>
                  <input
                    type='checkbox'
                    name='category'
                    checked={selectCategory[category?.value] || false}
                    value={category?.value}
                    id={category?.value}
                    onChange={handleSelectCategory}
                  />
                  <label htmlFor={category?.value}>{category?.label}</label>
                </div>
              ))}
            </form>
          </div>
        </div>

        <div>
          <p className='font-meduim text-lg text-slate-800 my-2 mx-7'>Search Results : {data.length}</p>
          <div className='min-h-[calc(100vh-120px)] overflow-y-scroll max-h-[calc(100vh-120px)]'>
            {

              data.length !== 0 && (
                <CardProductForSearch data={data} Loading={loading} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
