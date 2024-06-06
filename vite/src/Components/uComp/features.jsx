import React, { useState } from 'react'
import "../../Stylesheets/features.css"



import Allusers from '../uComp/Alluser'
import Dashboard from "../Dashboard.jsx";
import TermMarks from './TermMarks.jsx'
import Coscholastic from '../uComp/Coscholastic';
import Marksheet from './Marksheet'



function features({subjects, nClass}) {
 const [all, setAll] = useState(true)
 const [fmarksbx, setFmarksbx] = useState(false)
 const [smarksbx, setSmarksbx] = useState(false)
 const [tmarksbx, setTmarksbx] = useState(false)
 const [coscholasticbx, setCoscholasticbx] = useState(false)
 const [marksSheetbx, setmarksSheetbx] = useState(false)

 

 console.log(subjects);
 console.log(nClass);
    
    return (
    <>
    <Dashboard/>

    <div className='features-nav'>
    <button className={all? "features-cards actv ":"features-cards "}  onClick={()=>{setFmarksbx(false);setSmarksbx(false);setTmarksbx(false);setCoscholasticbx(false);setmarksSheetbx(false); setAll(true) }} >All Students</button>
    <button className={fmarksbx? "features-cards actv":"features-cards "} onClick={()=>{setFmarksbx(true);setSmarksbx(false);setTmarksbx(false);setCoscholasticbx(false);setmarksSheetbx(false);  setAll(false)}} >First Term Exam</button>
    <button className={smarksbx? "features-cards actv ":"features-cards "} onClick={()=>{setFmarksbx(false);setSmarksbx(true);setTmarksbx(false);setCoscholasticbx(false);setmarksSheetbx(false); setAll(false) }}>Second Term Results</button>
    <button className={tmarksbx? "features-cards actv ":"features-cards "} onClick={()=>{setFmarksbx(false);setSmarksbx(false);setTmarksbx(true);setCoscholasticbx(false);setmarksSheetbx(false);  setAll(false)}}>Third Term Results</button>
    <button className={coscholasticbx? "features-cards actv ":"features-cards "} onClick={()=>{setFmarksbx(false);setSmarksbx(false);setTmarksbx(false);setCoscholasticbx(true);setmarksSheetbx(false); setAll(false) }}>Co-Scholastic</button>
   <button className={marksSheetbx? "features-cards actv ":"features-cards "}onClick={()=>{setFmarksbx(false);setSmarksbx(false);setTmarksbx(false);setCoscholasticbx(false);setmarksSheetbx(true);  setAll(false)}}>Marksheet</button>
   </div>
  {all && <Allusers nClass={nClass}/>}
   {fmarksbx && <TermMarks nClass={nClass} subjects={subjects} exam ={ 1 }/>}
   {smarksbx && <TermMarks nClass={nClass} subjects={subjects} exam ={ 2 }/>}
   {tmarksbx && <TermMarks nClass={nClass} subjects={subjects} exam ={ 3 }/>}
   {coscholasticbx && <Coscholastic nClass={nClass} subjects={subjects} />}
   {marksSheetbx && <Marksheet nClass={nClass} subjects={subjects} />}
    </>
  )
}

export default features
