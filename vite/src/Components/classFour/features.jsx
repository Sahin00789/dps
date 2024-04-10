import React from 'react'
import "../../Stylesheets/features.css"
import { Link } from "react-router-dom";

function features() {
    
  
 
    return (
    <>
    <div className='features-nav'>
    <Link to = {'/FirstTermMarksFour'}><button className="features-cards" >First Term Exam</button></Link>
    <Link ><button className="features-cards">Second Term Results</button></Link>
    <Link ><button className="features-cards">Third Term Results</button></Link>
    <Link ><button className="features-cards">Marksheet</button></Link>
   </div>
    </>
  )
}

export default features
