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
      <HorizentalCardProduct category={"watches"} heading={"top's Watches"}/>


      <VerticalCardProduct category={"mobiles"} heading={"top's Phones"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"top's refrigerator"}/>
      <VerticalCardProduct category={"televisions"} heading={"top's Televisions"}/>
      <VerticalCardProduct category={"Mouse"} heading={"top's Mouses"}/>
      <VerticalCardProduct category={"trimmers"} heading={"top's Trimmers"}/>
      <VerticalCardProduct category={"speakers"} heading={"top's Speakers"}/>
      <VerticalCardProduct category={"processor"} heading={"top's Processor"}/>
      <VerticalCardProduct category={"printers"} heading={"top's Printers"}/>
    </div>
  )
}

export default Home