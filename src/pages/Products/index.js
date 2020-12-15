import React from 'react'
import { InfoSection, Price } from '../../components'
import { homeObjFour, homeObjThree, homeObjTwo } from './Data'

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjTwo}/> 
      <InfoSection {...homeObjThree}/> 
      <Price />
      <InfoSection {...homeObjFour}/> 
    </>
  )
}

export default Products
