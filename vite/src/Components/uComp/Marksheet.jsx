import React, { useEffect, useState, useRef } from 'react'
import { apiUrl } from '../../helper.jsx'

import { useReactToPrint } from "react-to-print";

import axios from "axios";

import '../../Stylesheets/Marksheets.css'



export default function Marksheet({nClass, subjects}) {
    const [users, setUsers] = useState([]);

const pos =["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th"]

    const grade =(num)=>{
        return num>90? "AA" : 
       num>80? "A+" : 
       num>60? "A":
        num>45? "B+":
       num>35? "B":
        num>25? "C": "D"
    }

    const getUser = async () => {
        const res = await axios.get(`${apiUrl}/${nClass}`);
       setUsers(res.data.Students)
    }

users.forEach((a)=>{if(subjects.Bengali){a.BengaliTotal = (a.fMarks.fBengali !="AB" ? parseInt(a.fMarks.fBengali):0) + (a.sMarks.sBengali !="AB" ? parseInt(a.sMarks.sBengali):0) + (a.sMarks.sBengali !="AB" ?parseInt(a.tMarks.tBengali):0);
            a.BengaliPercentage = parseInt(a.BengaliTotal / 110 *100);
            a.BengaliGrade = grade(a.BengaliPercentage);}

    if(subjects.English){a.EnglishTotal = (a.fMarks.fEnglish !="AB" ? parseInt(a.fMarks.fEnglish):0) + (a.sMarks.sEnglish !="AB" ? parseInt(a.sMarks.sEnglish):0) + (a.tMarks.tEnglish !="AB" ?parseInt(a.tMarks.tEnglish):0);
           a.EnglishPercentage = parseInt(a.EnglishTotal / 110*100);
           a.EnglishGrade = grade(a.EnglishPercentage);}

   if(subjects.Math) {a.MathTotal = (a.fMarks.fMath !="AB" ?parseInt(a.fMarks.fMath):0) + (a.sMarks.sMath !="AB" ?parseInt(a.sMarks.sMath):0) + (a.tMarks.tMath !="AB" ?parseInt(a.tMarks.tMath):0);
         a.MathPercentage = parseInt(a.MathTotal / 110*100);
         a.MathGrade = grade(a.MathPercentage);}

   if(subjects.Envs){a.EnvsTotal = (a.fMarks.fEnvs !="AB" ?parseInt(a.fMarks.fEnvs):0) + (a.sMarks.sEnvs !="AB" ?parseInt(a.sMarks.sEnvs):0) + (a.tMarks.tEnvs !="AB" ?parseInt(a.tMarks.tEnvs):0);
         a.EnvsPercentage = parseInt(a.EnvsTotal / 110*100);
         a.EnvsGrade = grade(a.EnvsPercentage);}

   if(subjects.GK){a.GkTotal = (a.fMarks.fGk !="AB" ?parseInt(a.fMarks.fGk):0) + (a.sMarks.sGk !="AB" ?parseInt(a.sMarks.sGk):0) + (a.tMarks.tGk !="AB" ?parseInt(a.tMarks.tGk):0);
         a.GkPercentage = parseInt(a.GkTotal / 110*100);
        a.GkGrade = grade(a.GkPercentage);}

    if(subjects.Science){a.ScienceTotal = (a.fMarks.fScience !="AB" ?parseInt(a.fMarks.fScience):0) + (a.sMarks.sScience !="AB" ?parseInt(a.sMarks.sScience):.0) + (a.tMarks.tScience !="AB" ?parseInt(a.tMarks.tScience):0);
        a.SciencePercentage = parseInt(a.ScienceTotal / 110*100);
        a.ScienceGrade = grade(a.SciencePercentage);}

   if(subjects.Geography){a.GeographyTotal = (a.fMarks.fGeography !="AB" ?parseInt(a.fMarks.fGeography):0) + (a.sMarks.sGeography !="AB" ?parseInt(a.sMarks.sGeography):0) + (a.tMarks.tGeography !="AB" ?parseInt(a.tMarks.tGeography):0);
            a.GeographyPercentage = parseInt(a.GeographyTotal / 110*100);
            a.GeographyGrade = grade(a.GeographyPercentage);}

   if(subjects.History){a.HistoryTotal = (a.fMarks.fHistory !="AB" ?parseInt(a.fMarks.fHistory):0) + (a.sMarks.sHistory !="AB" ?parseInt(a.sMarks.sHistory):0) + (a.tMarks.tHistory !="AB" ?parseInt(a.tMarks.tHistory):0);
        a.HistoryPercentage = parseInt(a.HistoryTotal / 110*100);
        a.HistoryGrade = grade(a.HistoryPercentage);}             

   if(subjects.Language){a.LanguageTotal = (a.fMarks.fLanguage !="AB" ?parseInt(a.fMarks.fLanguage):0) + (a.sMarks.sLanguage !="AB" ?parseInt(a.sMarks.sLanguage):0) + (a.tMarks.tLanguage !="AB" ?parseInt(a.tMarks.tLanguage):0);
   a.LanguagePercentage = parseInt(a.LanguageTotal / 110*100);
   a.LanguageGrade = grade(a.LanguagePercentage);}

   a.grandTotal = (subjects.Bengali ? a.BengaliTotal :0 ) + (subjects.English ? a.EnglishTotal:0) + (subjects.Math? a.MathTotal:0) + (subjects.Envs ? a.EnvsTotal:0) + (subjects.GK ? a.GkTotal:0) + (subjects.Science ? a.ScienceTotal:0)+ (subjects.Geography ? a.GeographyTotal:0)+ (subjects.History ? a.HistoryTotal:0) + (subjects.Language?a.LanguageTotal:0);
   a.grandPercentage = parseInt(a.grandTotal / 550*100);
   a.grandGrade = grade(a.grandPercentage);
})

users.sort((a,b)=>{ return b.grandTotal - a.grandTotal});

users.forEach((a,i)=>{ a.position = pos[i] });

users.sort((a,b)=>{ return a.Roll - b.Roll});

const compfiventRef = useRef([]);
  const handlePrint = useReactToPrint({
    content: () => compfiventRef.current,
    copyStyles:true,
    
  });

useEffect(()=>{
 getUser();
},[])

  return (<>
  

    <div className="marksheet-back">
   
   <div ref={compfiventRef}>
   {users.map((user, id)=>( <div className="a4page" key={id} style={{breakAfter: "page"}} >
    <div className="full-height" >
        <div >
    <div className="head">
        <h1>Dina Public School</h1>
        <p>Affliated to West Bengal Board Of Primary Education</p>
        <p>Govt. Reg No : IV/192217 , UDISE Code : 19050503603</p>
        <p>Paharpur, P.S. - Banshihari, Dist - Dakshin Dinajpur, 733125</p>
    </div>
<div className="progress">PROGRESS REPORT - 2024</div>
</div>
<div className="studentbx">
<h2>Student Details</h2>
<div className="detailsbx">
<div className="studentData1">
    <p>Student's Name : {user.studentName}</p>
    <p>Father's Name : {user.fatherName}</p>
    <p>D. O. B. : {user.dob} </p>
    <p>Address : {user.Adress}</p>
</div>
<div className="studentData2">
    <p>Class : Class 5</p>
    <p>Roll No. : {user.Roll}</p>
    <p>Session : {user.Session}</p>
    <p>Attendence : {user.Attendence}</p>
</div>
<div  ><img src={user.photo} className="photo"/></div>
</div>
</div>

<div className="marksdetails">
<h2>Academic Performance</h2>
<table>
    <thead>
        <tr>
            <th rowspan="2">Subject</th>
          <th>1st Term Exam</th>
          <th>2nd Term Exam</th>
          <th>Annual Exam</th>
          <th>Total</th>
          <th rowspan="2">Percentage</th>
          <th rowspan="2">GRADE</th>
        </tr>
        <tr className="fullmarks">
          <th>F. M. = 15</th>
          <th>F. M. = 25</th>
          <th>F. M. = 70</th>
          <th>F. M. = 110</th>
        </tr>
    </thead>
    <tbody>
        {subjects.Bengali && <tr>
            <td>Bengali</td>
            <td>{user.fMarks.fBengali}</td>
            <td>{user.sMarks.sBengali}</td>
            <td>{user.tMarks.tBengali}</td>
            <td>{user.BengaliTotal}</td>

            <td>{user.BengaliPercentage} % </td>
           
            <td>{user.BengaliGrade}</td>

        </tr>}
       {subjects.English && <tr>
            <td>English</td>
            <td>{user.fMarks.fEnglish}</td>
            <td>{user.sMarks.sEnglish}</td>
            <td>{user.tMarks.tEnglish}</td>
            <td>{user.EnglishTotal}</td>
            <td>{user.EnglishPercentage} % </td>
            <td>{user.EnglishGrade}</td>
        </tr>}
        {subjects.Math &&<tr>
            <td>Mathematics</td>
            <td>{user.fMarks.fMath}</td>
            <td>{user.sMarks.sMath}</td>
            <td>{user.tMarks.tMath}</td>
            <td>{user.MathTotal}</td>
            <td>{user.MathPercentage} % </td>
            <td>{user.MathGrade}</td>
        </tr>}
      
        {subjects.Envs &&<tr>
            <td>Envs</td>
            <td>{user.fMarks.fEnvs}</td>
            <td>{user.sMarks.sEnvs}</td>
            <td>{user.tMarks.tEnvs}</td>
            <td>{user.EnvsTotal}</td>
            <td>{user.EnvsPercentage} % </td>
            <td>{user.EnvsGrade}</td>
        </tr>}
        {subjects.GK &&<tr>
            <td>G. K.</td>
            <td>{user.fMarks.fGk}</td>
            <td>{user.sMarks.sGk}</td>
            <td>{user.tMarks.tGk}</td>
            <td>{user.GkTotal}</td>
            <td>{user.GkPercentage} % </td>
            <td>{user.GkGrade}</td>
        </tr>}
        {subjects.Science &&<tr>
            <td>Science</td>
            <td>{user.fMarks.fScience}</td>
            <td>{user.sMarks.sScience}</td>
            <td>{user.tMarks.tScience}</td>
            <td>{user.ScienceTotal}</td>
            <td>{user.SciencePercentage} % </td>
            <td>{user.ScienceGrade}</td>
        </tr>}
        {subjects.History &&<tr>
            <td>History</td>
            <td>{user.fMarks.fHistory}</td>
            <td>{user.sMarks.sHistory}</td>
            <td>{user.tMarks.tHistory}</td>
            <td>{user.HistoryTotal}</td>
            <td>{user.HistoryPercentage} % </td>
            <td>{user.HistoryGrade}</td>
        </tr>}
        {subjects.Geography &&<tr>
            <td>Geography</td>
            <td>{user.fMarks.fGeography}</td>
            <td>{user.sMarks.sGeography}</td>
            <td>{user.tMarks.tGeography}</td>
            <td>{user.GeographyTotal}</td>
            <td>{user.GeographyPercentage} % </td>
            <td>{user.GeographyGrade}</td>
        </tr>}
        {subjects.Language &&<tr>
            <td>Arabic/Hindi</td>
            <td>{user.fMarks.fLanguage}</td>
            <td>{user.sMarks.sLanguage}</td>
            <td>{user.tMarks.tLanguage}</td>
            <td>{user.LanguageTotal}</td>
            <td>{user.LanguagePercentage} % </td>
            <td>{user.LanguageGrade}</td>
        </tr>}
        <tr>
            <td colspan="4"><strong>Grand Total</strong> </td>
            <td><strong>{user.grandTotal}</strong></td>
            <td><strong>{user.grandPercentage} %</strong></td>
            <td><strong>{user.grandGrade}</strong></td>
        </tr>
    </tbody>
</table>
</div>

<div className="resultbox">
<div className="result">
<div>
Result
</div>
<div>
Passed
</div>
</div>

<div className="result">
<div>
   Position
</div>
<div>
 {user.position}
</div>
</div>
</div>



<div className="coscholastic">
<h2>Co-Scolastic Performance</h2>
<table>
    <tr><td>Work Education</td><td>{user.coscholastic.workEd}</td></tr>
    <tr><td>Art Education</td><td>{user.coscholastic.artEd}</td></tr>
    <tr><td>Health & Physical Education</td><td>{user.coscholastic.phyEd}</td></tr>
    <tr><td>Discipline</td><td>{user.coscholastic.discipline}</td></tr>
</table>
</div>

<div className="signbox">
<div >
<div></div>
<div className="sign">Signatur Of Claas Teacher</div>

</div>
<div >
<div></div>
<div className="sign" >Signatur Of Head Master</div>
</div>
<div ><div></div>
<div className="sign">Signatur Of Guardian</div></div>
</div>
</div>
</div> ))}
</div>
<button className="print-btn-marksheet" onClick={handlePrint}>
          Print <br></br>All Pages
        </button>
</div>
</>
  )
}


