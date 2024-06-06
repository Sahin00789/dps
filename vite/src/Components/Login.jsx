import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Navbar from '../navbar'
import {useNavigate} from "react-router-dom"

import "../Stylesheets/login.css"




function Login({closeloginpop}) {

const [pass, setPass] = useState(733125);
const [inputpass, setInputpass] = useState(0)
const navigate = useNavigate();

const passinput =(e)=>{
   setInputpass(e.target.value)
}

const cheackPassword =()=>{
  if (inputpass==pass) {
    localStorage.setItem("token", true)
    toast.success("Login Successfully");
    closeloginpop();
  navigate("/lkg")
  
  } else {
    toast.error("You Have Entered Wrong Password")
  }
}

  return (
  <>
  <Navbar/>
    <div className='login-main'>
     <div className='login-box'>
      <div className="header">
     <h1>Login To Dashboard</h1>
     <button className="btn-clse" onClick={() => closeloginpop()}>X</button>
     </div>
      <div className='pass-input'>
       <label htmlFor="password">Enter Password</label>
       <input  name="password" type="password" onChange={passinput}/>
      
       </div>
    
       <button className='login-btn' onClick={cheackPassword}>Log In</button>
     </div>
    
    </div>
    </>
  )
}

export default Login
