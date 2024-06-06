import React from 'react'
import Features from '../uComp/features'

export default function Ukg() {

const nClass = "Ukg"

const subjects =  {Bengali:true, English:true, Math:true, GK:true}

  return (
   <Features subjects={subjects}  nClass={nClass}/>
  )
}
