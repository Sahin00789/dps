import React, { useState } from "react";
import "./Stylesheets/nav.css";
import { Link, useNavigate } from "react-router-dom";


export default function Navbar({openloginpop}) {
 const navigate = useNavigate();
  return (<>
    <div className="nav-container">
      <div className="nav-logo">
        <Link to="/">ARman</Link>
      </div >
      <div className="nav-links">
     <li> <Link to="/Dashboard">Dashboard</Link></li>
      </div>
      
    {localStorage.getItem('token') ? <button className="lgout-btn" onClick={()=>{localStorage.removeItem('token'); navigate("/")}}>Log Out</button> : <button className="lgin-btn" onClick={()=>openloginpop()}>Login To Dashboard</button>}
     
    </div>

    </>
  );
}
