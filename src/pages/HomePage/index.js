import React from 'react'
import { InfoSection, Price } from '../../components'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne}/> 
      <InfoSection {...homeObjTwo}/> 
      <InfoSection {...homeObjThree}/> 
      <Price />
      <InfoSection {...homeObjFour}/> 
    </>
  )
}

export default Home
