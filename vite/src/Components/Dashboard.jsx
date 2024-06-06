import React, { useEffect, useState } from "react";
import "../Stylesheets/Dashboard.css";
import { Link, NavLink, useNavigate } from "react-router-dom";


function Addstudent() {


  const navigate = useNavigate();


  return (
    <>
    <div className="class-dash">
    <Link to={'/'}><button className="home-btn">Home</button></Link>
      <div className="classlist">
       
        <NavLink  to={'/Lkg'}><button >Class LKG</button></NavLink>
        <NavLink to={'/Ukg'}><button>Class UKG</button> </NavLink>
        <NavLink to={'/classOne'}><button>Class 1</button></NavLink>
        <NavLink to={'/classTwo'}><button>Class 2</button></NavLink>
        <NavLink to={'/classThree'}><button>Class 3</button></NavLink> 
        <NavLink to={'/classFour'}><button>Class 4</button></NavLink> 
        <NavLink to={'/classFive'}><button>Class 5</button></NavLink> 
       
        </div>
      
      {localStorage.getItem('token') ? <button className="lgout-btn" onClick={()=>{localStorage.removeItem('token'); navigate("/")}}>Log Out</button> : <button className="lgin-btn" onClick={()=>openloginpop()}>Login To Dashboard</button>}
       
      </div>
      
    </>
  );
}

export default Addstudent;
