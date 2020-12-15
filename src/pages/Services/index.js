import React from 'react'
import { InfoSection, Price } from '../../components'
import { homeObjFour } from './Data'

const Services = () => {
  return (
    <>
      <Price />
      <InfoSection {...homeObjFour}/> 
    </>
  )
}

export default Services
