import React from 'react'
import Features from '../uComp/features'

export default function ClassFour() {

const nClass = "Four"

const subjects =  {Bengali:true, English:true, Math:true, Envs:true, Geography: true, History:true, Language: true}

  return (
   <Features subjects={subjects}  nClass={nClass}/>
  )
}
