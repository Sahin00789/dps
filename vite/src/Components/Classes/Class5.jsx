import React from 'react'
import Features from '../uComp/features'

export default function ClassFive() {

const nClass = "Five"

const subjects =  {Bengali:true, English:true, Math:true, Envs:true, Language: true}

  return (
   <Features subjects={subjects}  nClass={nClass}/>
  )
}
