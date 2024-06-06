import React from 'react'
import Features from '../uComp/features'

export default function Lkg() {

const nClass = "lkg"

const subjects =  {Bengali:true, English:true, Math:true, GK:true}

  return (
   <Features subjects={subjects}  nClass={nClass}/>
  )
}
