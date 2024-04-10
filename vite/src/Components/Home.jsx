import React, { useState } from 'react'
import NavBar from '../navbar';
import Login from "./Login.jsx"
import "../Stylesheets/home.css"


export default function Home() {
  const [loginpop, setLoginpop] =useState(false)

  return (
  <>
    <NavBar openloginpop = {()=>setLoginpop(true)}/>
    <div className='main-h'>
      <h1>Welcome</h1>
    </div>
    {loginpop && <Login closeloginpop ={()=>setLoginpop(false)}/>}
    </>
  )
}

