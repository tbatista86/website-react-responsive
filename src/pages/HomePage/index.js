import React from 'react'
import { InfoSection } from '../../components'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne}/> 
      <InfoSection {...homeObjTwo}/> 
      <InfoSection {...homeObjThree}/> 
      <InfoSection {...homeObjFour}/> 
    </>
  )
}

export default Home
