import React, { useEffect, useState } from "react";
import "../Stylesheets/Dashboard.css";
import NavBar from '../navbar.jsx'
import { Link } from "react-router-dom";


function Addstudent() {





  return (
    <>
      <NavBar />

      <div className="main-class">
        <div className="pp"><Link  to={'/Lkg'}><div className="card-class-pp"> <h2>Class LKG</h2></div></Link>
        <Link to={'/Ukg'}> <div className="card-class-pp"><h2>Class UKG</h2></div></Link></div>


        <Link to={'/classOne'}><div className="card-class"><h2>Class 1</h2></div></Link>
        <Link to={'/classTwo'}><div className="card-class"> <h2>Class 2</h2></div></Link>
        <Link to={'/classThree'}><div className="card-class"> <h2>Class 3</h2></div></Link>
        <Link to={'/classFour'}><div className="card-class"> <h2>Class 4</h2></div></Link> 
        <Link to={'/classFive'}><div className="card-class"> <h2>Class 5</h2></div></Link> 
      </div>
    </>
  );
}

export default Addstudent;
