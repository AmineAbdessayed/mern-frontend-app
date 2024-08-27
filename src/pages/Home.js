import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerSliding from '../components/BannerSliding'
import HorizentalCardProduct from '../components/HorizentalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>

      <CategoryList/>
      <BannerSliding/>
      <HorizentalCardProduct category={"airpodes"} heading={"top's Airpods"}/>
      <HorizentalCardProduct category={"Mouse"} heading={"top's Mouses"}/>
      <VerticalCardProduct category={"mobiles"} heading={"top's Phones"}/>
    </div>
  )
}

export default Home