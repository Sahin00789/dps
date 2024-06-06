import React from 'react'
import Features from '../uComp/features'

export default function CkassOne() {

const nClass = "One"

const subjects =  {Bengali:true, English:true, Math:true, GK:true, Science: true, Language: true }

  return (
   <Features subjects={subjects}  nClass={nClass}/>
  )
}
