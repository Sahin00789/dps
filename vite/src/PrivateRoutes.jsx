import React from 'react'
import {Outlet, Navigate} from "react-router-dom"

function PrivateRoutes() {
    const Auth = localStorage.getItem('token')
  return (
   Auth ? <Outlet/> : <Navigate to ="/"/>
  )
}

export default PrivateRoutes
