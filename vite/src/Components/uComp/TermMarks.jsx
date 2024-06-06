import React, { useEffect, useState, useRef } from "react";
import { apiUrl } from '../../helper.jsx'
import { toast } from 'react-toastify';

import "../../Stylesheets/Marks-table.css";
import "../../Stylesheets/marksEdit.css";

import axios from "axios";
import { useReactToPrint } from "react-to-print";



export default function marks( {exam, nClass, subjects}) {
  const [users, setUsers] = useState([]);
  const [editbox, setEditbox] = useState(false);
  const [id, setId] = useState("");
  const [editbtn, setEditbtn] = useState(true);
  const [currentpost, setCurrentpost] = useState([]);
  




  // start Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostperPage] = useState(8);

  const compfiventRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => compfiventRef.current,
  });

  const cheackValue = (e) => {
    setEditbtn(!e.target.checked);
  };


  const getUser = async () => {
    const res = await axios.get(`${apiUrl}/${nClass}`);
    const doc = res.data.Students;
    setUsers(doc);

    const lastpostindex = currentPage * postperPage;
    const firstpostindex = lastpostindex - postperPage;
  
    const doc1 = doc.slice(firstpostindex, lastpostindex);
    setCurrentpost(doc1);
  };


  useEffect(() => {
    getUser();
  }, [editbox, currentPage]);


  if (exam===1) {
    users.forEach((a)=>{
          if(subjects.Bengali)  {a.bengali = a.fMarks.fBengali};
          if(subjects.English)  {a.english = a.fMarks.fEnglish;}
          if(subjects.Math)     {a.math = a.fMarks.fMath;}
          if(subjects.Envs)     {a.envs = a.fMarks.fEnvs;}
          if(subjects.GK)       {a.gk = a.fMarks.fGk;}
          if(subjects.Science)  {a.science = a.fMarks.fScience;}
          if(subjects.Geography)  {a.geography = a.fMarks.fGeography;}
          if(subjects.History)  {a.history = a.fMarks.fHistory;}
          if(subjects.Language) {a.language = a.fMarks.fLanguage;}

          a.total = 
         ( subjects.Bengali ? (a.bengali != "AB" ? parseInt(a.bengali) : 0) : 0) +
          (subjects.English ? (a.english != "AB" ? parseInt(a.english) : 0):0) +
          (subjects.Math?     (a.math != "AB" ? parseInt(a.math) : 0):0) +
          (subjects.Envs ?    (a.envs != "AB" ? parseInt(a.envs) : 0):0) +
          (subjects.GK ?      (a.gk != "AB" ? parseInt(a.gk) : 0):0) +
          (subjects.Science ? (a.science != "AB" ? parseInt(a.science) : 0):0) +
          (subjects.Geography?(a.geography != "AB" ? parseInt(a.geography) : 0):0) +
          (subjects.History ? (a.history != "AB" ? parseInt(a.history) : 0):0) +
          (subjects.Language?  (a.language != "AB" ? parseInt(a.language) : 0):0);
    })

} else if(exam===2) {
  users.forEach((a)=>{
    if(subjects.Bengali) {a.bengali = a.sMarks.sBengali;}
    if(subjects.English)  {a.english = a.sMarks.sEnglish;}
    if(subjects.Math)  {a.math = a.sMarks.sMath;}
    if(subjects.Envs) {a.envs = a.sMarks.sEnvs;}
    if(subjects.GK)       {a.gk = a.sMarks.sGk;}
    if(subjects.Science)  {a.science = a.sMarks.sScience;}
    if(subjects.Geography)  {a.geography = a.sMarks.sGeography;}
    if(subjects.History)  {a.history = a.sMarks.sHistory;}
    if(subjects.Language) {a.language = a.sMarks.sLanguage;}
    a.total = 
    ( subjects.Bengali ? (a.bengali != "AB" ? parseInt(a.bengali) : 0) : 0) +
     (subjects.English ? (a.english != "AB" ? parseInt(a.english) : 0):0) +
     (subjects.Math?     (a.math != "AB" ? parseInt(a.math) : 0):0) +
     (subjects.Envs ?    (a.envs != "AB" ? parseInt(a.envs) : 0):0) +
     (subjects.GK ?      (a.gk != "AB" ? parseInt(a.gk) : 0):0) +
     (subjects.Science ? (a.science != "AB" ? parseInt(a.science) : 0):0) +
     (subjects.Geography?(a.geography != "AB" ? parseInt(a.geography) : 0):0) +
     (subjects.History ? (a.history != "AB" ? parseInt(a.history) : 0):0) +
     (subjects.Language?  (a.language != "AB" ? parseInt(a.language) : 0):0);
})
}else if(exam===3){
  users.forEach((a)=>{
    if(subjects.Bengali) {a.bengali = a.tMarks.tBengali;}
    if(subjects.English)  {a.english = a.tMarks.tEnglish;}
    if(subjects.Math)  {a.math = a.tMarks.tMath;}
    if(subjects.Envs) {a.envs = a.tMarks.tEnvs;}
    if(subjects.GK)       {a.gk = a.tMarks.tGk;}
    if(subjects.Science)  {a.science = a.tMarks.tScience;}
    if(subjects.Geography)  {a.geography = a.tMarks.tGeography;}
    if(subjects.History)  {a.history = a.tMarks.tHistory;}
    if(subjects.Language) {a.language = a.tMarks.tLanguage;}
    a.total = 
    ( subjects.Bengali ? (a.bengali != "AB" ? parseInt(a.bengali) : 0) : 0) +
     (subjects.English ? (a.english != "AB" ? parseInt(a.english) : 0):0) +
     (subjects.Math?     (a.math != "AB" ? parseInt(a.math) : 0):0) +
     (subjects.Envs ?    (a.envs != "AB" ? parseInt(a.envs) : 0):0) +
     (subjects.GK ?      (a.gk != "AB" ? parseInt(a.gk) : 0):0) +
     (subjects.Science ? (a.science != "AB" ? parseInt(a.science) : 0):0) +
     (subjects.Geography?(a.geography != "AB" ? parseInt(a.geography) : 0):0) +
     (subjects.History ? (a.history != "AB" ? parseInt(a.history) : 0):0) +
     (subjects.Language?  (a.language != "AB" ? parseInt(a.language) : 0):0);
})
}

const pos =["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th"]

users.sort((a,b)=>{ return b.total - a.total});

users.forEach((a,i)=>{ a.position = pos[i] });

users.sort((a,b)=>{ return a.Roll - b.Roll});



  return (
    <>
   
      <div className="marksback">
        <div className="a4-Landscape" ref={compfiventRef}>
          <div className="header-marks">
            <h1>DINA PUBLIC SCHOOL</h1>
            <h3>First Term Exam Result - 2024</h3>
          </div>
          <table>
            <thead>
              <th>Roll</th>
              <th>Student Name</th>
            {subjects.Bengali &&  <th>Bengali</th>}
            { subjects.English && <th>English</th>}
              {subjects.Math &&<th>Math</th>}
             {subjects.Envs && <th>Envs</th>}
             {subjects.GK && <th>G. K.</th>}
             {subjects.Science && <th>Science</th>}
             {subjects.Geography && <th>Geography</th>}
             {subjects.History && <th>History</th>}
             {subjects.Language && <th>Arabic/Hindi</th>}
              <th>Total</th>
              <th>Position</th>
            </thead>
            <tbody>
              {currentpost.map((user, id) => (
                <tr key={id}>
                  <td>{user.Roll}</td>
                  <td>{user.studentName}</td>
                 {subjects.Bengali && <td>{user.bengali}</td>}
                 { subjects.English && <td>{user.english}</td>}
                 {subjects.Math && <td>{user.math}</td>}
                 {subjects.Envs &&  <td>{user.envs}</td>}
                 {subjects.GK && <td>{user.gk}</td>}
             {subjects.Science && <td>{user.science}</td>}
             {subjects.Geography && <td>{user.geography}</td>}
             {subjects.History && <td>{user.history}</td>}
                 {subjects.Language &&  <td>{user.language}</td>}
                  <td>{user.total}</td>
                  <td>{user.position}</td>
                  {editbtn && (
                    <div >
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setId(user._id);
                          setEditbox(true);
                        }}
                      >
                        Edit
                      </button>{" "}
                    </div>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="foot">
        <div className="cheackbox">
          <label htmlFor="edit-hide">Hide Edit Button</label>
          <input name="edit-hide" type="checkbox" onChange={cheackValue} />
          
        </div>

        <button className="print-btn" onClick={handlePrint}>
          Print
        </button>

        <Pagination
          totalpost={users.length}
          postperPage={postperPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>

      {editbox && <EditMarks subjects={subjects} nClass={nClass} exam ={exam} id={id} closewndo={() => setEditbox(false)} />}
    </>
  );
}

function Pagination({ totalpost, postperPage, setCurrentPage, currentPage }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalpost / postperPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((index) => (
        <button
          className={currentPage === index ? "active" : ""}
          key={index}
          onClick={() => setCurrentPage(index)}
        >
          {index}
        </button>
      ))}
    </div>
  );
}


 function EditMarks({ nClass, id, closewndo, exam, subjects }) {
  const [user, setUser] = useState([]);
 const [marks, setMarks] = useState([]);

 

  

console.log(id);
console.log(typeof(exam));

  const getUserbyid = async () => {
    const res = await axios.get(`${apiUrl}/${nClass}/${id}`);
 setUser(res.data[0]);
    exam=1 ? setMarks(res.data[0].fMarks) : exam=2 ? setMarks(res.data[0].sMarks ) : setMarks(res.data[0].tMarks );
  };




  const marksEntry = (e) => {
    setMarks({
      ...marks,
      ...user,
    [e.target.name]: e.target.value,
      
    });
  };

  
  const onSave = async (id) => {
    const doc = await axios.post(
      `${apiUrl}/${nClass}/${id}`,
      marks
    );
    console.log(doc);
    if (doc.status === 200) {
      toast.success("Student Details Updated Succesfully");
      closewndo();
    } else {
      alert("Somthing Went Wrong");
    }
  };


  useEffect(() => {

    getUserbyid();
  }, []);



  if(exam===1){return (<FirstTerm subjects={subjects} nClass={nClass} id={id} closewndo ={closewndo}/>)}
  else if(exam===2) {return(<SecondTerm subjects={subjects} nClass={nClass} id={id} closewndo ={closewndo}/> )}
else if(exam===3) {return( <ThirdTerm subjects={subjects} nClass={nClass} id={id} closewndo ={closewndo}/>)}

}

function FirstTerm({nClass, id, closewndo , subjects}) {
  const [user, setUser] = useState([]);

  const [marks, setMarks] = useState([]);
  




  const getUserbyid = async () => {
    const res = await axios.get(`${apiUrl}/${nClass}/${id}`);
 setUser(res.data[0]);
   setMarks(res.data[0].fMarks) 
  };

 


  const marksEntry = (e) => {
    setMarks({
      ...marks,
      ...user,
    [e.target.name]: e.target.value,
      
    });
  };

  
  const onSave = async (id) => {
    const doc = await axios.post(
      `${apiUrl}/${nClass}/${id}`,
      marks
    );
    console.log(doc);
    if (doc.status === 200) {
      toast.success("Student Details Updated Succesfully");
      closewndo();
    } else {
      alert("Somthing Went Wrong");
    }
  };


  useEffect(() => {

    getUserbyid();
  }, []);

  return(<>
    <div className="blur-back">
    <div className="edit-box">
      <div className="headline">
        <h2>Name : {user.studentName}</h2>
        <h2>Roll : {user.Roll}</h2>
        <h2>{user.Class}</h2>
        <p>First Term</p>
        <button className="btn-close" onClick={() => closewndo()}>
          X
        </button>
      </div>
    <div className="details">
    {subjects.Bengali &&   <div className="marksinput">
          <label htmlFor="fBengali">Bengali </label>
          <input
            name="fBengali"
            value={marks.fBengali}
            onChange={marksEntry}
          />
        </div>}
 
       {subjects.English && <div className="marksinput">
          <label htmlFor="fEnglish">English</label>
          <input
            name="fEnglish"
            value={marks.fEnglish}
            onChange={marksEntry}
          />
        </div>}
 
      {subjects.Math &&  <div className="marksinput">
          <label htmlFor="fMath">Math</label>
          <input name="fMath" value={marks.fMath} onChange={marksEntry} />
        </div>}
 
       {subjects.Envs && <div className="marksinput">
          <label htmlFor="fEnvs">Envs</label>
          <input name="fEnvs" value={marks.fEnvs} onChange={marksEntry} />
        </div>}

        {subjects.GK && <div className="marksinput">
          <label htmlFor="fGk">G. K.</label>
          <input name="fGk" value={marks.fGk} onChange={marksEntry} />
        </div>}
 
        {subjects.Science && <div className="marksinput">
          <label htmlFor="fScience">Science</label>
          <input name="fScience" value={marks.fScience} onChange={marksEntry} />
        </div>}

        {subjects.Geography && <div className="marksinput">
          <label htmlFor="fGeography">Geography</label>
          <input name="fGeography" value={marks.fGeography} onChange={marksEntry} />
        </div>}

        {subjects.History&& <div className="marksinput">
          <label htmlFor="fHistory">History</label>
          <input name="fHistory" value={marks.fHistory} onChange={marksEntry} />
        </div>}

       {subjects.Language && <div className="marksinput">
          <label htmlFor="fLanguage">Arabic/Hindi</label>
          <input name="fLanguage" value={marks.fLanguage} onChange={marksEntry} />
        </div>}
 
    
     
     </div>
 
      <div className="total">
   
        <p>Total : { ( subjects.Bengali ? (marks.fBengali != "AB" ? parseInt(marks.fBengali) : 0) : 0) +
   (subjects.English ? (marks.fEnglish != "AB" ? parseInt(marks.fEnglish) : 0):0) +
   (subjects.Math?     (marks.fMath != "AB" ? parseInt(marks.fMath) : 0):0) +
   (subjects.Envs ?    (marks.fEnvs != "AB" ? parseInt(marks.fEnvs) : 0):0) +
   (subjects.GK ?      (marks.fGk != "AB" ? parseInt(marks.fGk) : 0):0) +
   (subjects.Science ? (marks.fScience != "AB" ? parseInt(marks.fScience) : 0):0) +
   (subjects.Geography?(marks.fGeography != "AB" ? parseInt(marks.fGeography) : 0):0) +
   (subjects.History ? (marks.fHistory != "AB" ? parseInt(marks.fHistory) : 0):0) +
   (subjects.Language?  (marks.fanguage != "AB" ? parseInt(marks.fLanguage) : 0):0)} </p>
          
      
      </div>
 
      <button className="save-btn" onClick={() => onSave(user._id)}>
        Save
      </button>
    </div>
  </div>
  </>
   )
 }

function SecondTerm({nClass, id, closewndo, subjects}) {

  const [user, setUser] = useState([]);

  const [marks, setMarks] = useState([]);
  

console.log(id);
console.log(typeof(exam));

  const getUserbyid = async () => {
    const res = await axios.get(`${apiUrl}/${nClass}/${id}`);
 setUser(res.data[0]);
  setMarks(res.data[0].sMarks ) 
  }
  const marksEntry = (e) => {
    setMarks({
      ...marks,
      ...user,
    [e.target.name]: e.target.value,
      
    });
  };

  
  const onSave = async (id) => {
    const doc = await axios.post(
      `${apiUrl}/${nClass}/${id}`,
      marks
    );
    console.log(doc);
    if (doc.status === 200) {
      toast.success("Student Details Updated Succesfully");
      closewndo();
    } else {
      alert("Somthing Went Wrong");
    }
  };


  useEffect(() => {

    getUserbyid();
  }, []);
  return(
  <>
    <div className="blur-back">
    <div className="edit-box">
      <div className="headline">
        <h2>Name : {user.studentName}</h2>
        <h2>Roll : {user.Roll}</h2>
        <h2>{user.Class}</h2>
        <p>Second Term</p>
        <button className="btn-close" onClick={() => closewndo()}>
          X
        </button>
      </div>
     <div className="details">
    {subjects.Bengali &&   <div className="marksinput">
          <label htmlFor="sBengali">Bengali </label>
          <input
            name="sBengali"
            value={marks.sBengali}
            onChange={marksEntry}
          />
        </div>}
 
       {subjects.English && <div className="marksinput">
          <label htmlFor="sEnglish">English</label>
          <input
            name="sEnglish"
            value={marks.sEnglish}
            onChange={marksEntry}
          />
        </div>}
 
      {subjects.Math &&  <div className="marksinput">
          <label htmlFor="sMath">Math</label>
          <input name="sMath" value={marks.sMath} onChange={marksEntry} />
        </div>}
 
       {subjects.Envs && <div className="marksinput">
          <label htmlFor="sEnvs">Envs</label>
          <input name="sEnvs" value={marks.sEnvs} onChange={marksEntry} />
        </div>}
        
        {subjects.GK && <div className="marksinput">
          <label htmlFor="sGk">G. K.</label>
          <input name="sGk" value={marks.sGk} onChange={marksEntry} />
        </div>}
 
        {subjects.Science && <div className="marksinput">
          <label htmlFor="sScience">Science</label>
          <input name="sScience" value={marks.sScience} onChange={marksEntry} />
        </div>}

        {subjects.Geography && <div className="marksinput">
          <label htmlFor="sGeography">Geography</label>
          <input name="sGeography" value={marks.sGeography} onChange={marksEntry} />
        </div>}

        {subjects.History&& <div className="marksinput">
          <label htmlFor="sHistory">History</label>
          <input name="sHistory" value={marks.sHistory} onChange={marksEntry} />
        </div>}

       {subjects.Language && <div className="marksinput">
          <label htmlFor="sLanguage">Arabic/Hindi</label>
          <input name="sLanguage" value={marks.sLanguage} onChange={marksEntry} />
        </div>}
 
    </div>
      <div className="total">
   
        <p>Total : { ( subjects.Bengali ? (marks.sBengali != "AB" ? parseInt(marks.sBengali) : 0) : 0) +
   (subjects.English ? (marks.sEnglish != "AB" ? parseInt(marks.sEnglish) : 0):0) +
   (subjects.Math?     (marks.sMath != "AB" ? parseInt(marks.sMath) : 0):0) +
   (subjects.Envs ?    (marks.sEnvs != "AB" ? parseInt(marks.sEnvs) : 0):0) +
   (subjects.GK ?      (marks.sGk != "AB" ? parseInt(marks.sGk) : 0):0) +
   (subjects.Science ? (marks.sScience != "AB" ? parseInt(marks.sScience) : 0):0) +
   (subjects.Geography?(marks.sGeography != "AB" ? parseInt(marks.sGeography) : 0):0) +
   (subjects.History ? (marks.sHistory != "AB" ? parseInt(marks.sHistory) : 0):0) +
   (subjects.Language?  (marks.sanguage != "AB" ? parseInt(marks.sLanguage) : 0):0)} </p>
          
      
      </div>

      <button className="save-btn" onClick={() => onSave(user._id)}>
        Save
      </button>
    </div>
  </div> 
  </>
  )
}

function ThirdTerm({nClass, id, closewndo, subjects}) {

  const [user, setUser] = useState([]);

  const [marks, setMarks] = useState([]);
  

console.log(id);
console.log(typeof(exam));

  const getUserbyid = async () => {
    const res = await axios.get(`${apiUrl}/${nClass}/${id}`);
 setUser(res.data[0]);
  setMarks(res.data[0].tMarks );
  };

  const marksEntry = (e) => {
    setMarks({
      ...marks,
      ...user,
    [e.target.name]: e.target.value,
      
    });
  };

  
  const onSave = async (id) => {
    const doc = await axios.post(
      `${apiUrl}/${nClass}/${id}`,
      marks
    );
    console.log(doc);
    if (doc.status === 200) {
      toast.success("Student Details Updated Succesfully");
      closewndo();
    } else {
      alert("Somthing Went Wrong");
    }
  };


  useEffect(() => {

    getUserbyid();
  }, []);
  return(
  <>
    <div className="blur-back">
    <div className="edit-box">
      <div className="headline">
        <h2>Name : {user.studentName}</h2>
        <h2>Roll : {user.Roll}</h2>
        <h2>{user.Class}</h2>
        <p>Third Term</p>
        <button className="btn-close" onClick={() => closewndo()}>
          X
        </button>
      </div>
      <div className="details">
    {subjects.Bengali &&   <div className="marksinput">
          <label htmlFor="tBengali">Bengali </label>
          <input
            name="tBengali"
            value={marks.tBengali}
            onChange={marksEntry}
          />
        </div>}
 
       {subjects.English && <div className="marksinput">
          <label htmlFor="tEnglish">English</label>
          <input
            name="tEnglish"
            value={marks.tEnglish}
            onChange={marksEntry}
          />
        </div>}
 
      {subjects.Math &&  <div className="marksinput">
          <label htmlFor="tMath">Math</label>
          <input name="tMath" value={marks.tMath} onChange={marksEntry} />
        </div>}
 
       {subjects.Envs && <div className="marksinput">
          <label htmlFor="tEnvs">Envs</label>
          <input name="tEnvs" value={marks.tEnvs} onChange={marksEntry} />
        </div>}
        
        {subjects.GK && <div className="marksinput">
          <label htmlFor="tGk">G. K.</label>
          <input name="tGk" value={marks.tGk} onChange={marksEntry} />
        </div>}
 
        {subjects.Science && <div className="marksinput">
          <label htmlFor="tScience">Science</label>
          <input name="tScience" value={marks.tScience} onChange={marksEntry} />
        </div>}

        {subjects.Geography && <div className="marksinput">
          <label htmlFor="tGeography">Geography</label>
          <input name="tGeography" value={marks.tGeography} onChange={marksEntry} />
        </div>}

        {subjects.History&& <div className="marksinput">
          <label htmlFor="tHistory">History</label>
          <input name="tHistory" value={marks.tHistory} onChange={marksEntry} />
        </div>}

       {subjects.Language && <div className="marksinput">
          <label htmlFor="tLanguage">Arabic/Hindi</label>
          <input name="tLanguage" value={marks.tLanguage} onChange={marksEntry} />
        </div>}
 
    </div>

      <div className="total">
   
        <p>Total :  { ( subjects.Bengali ? (marks.tBengali != "AB" ? parseInt(marks.tBengali) : 0) : 0) +
   (subjects.English ? (marks.tEnglish != "AB" ? parseInt(marks.tEnglish) : 0):0) +
   (subjects.Math?     (marks.tMath != "AB" ? parseInt(marks.tMath) : 0):0) +
   (subjects.Envs ?    (marks.tEnvs != "AB" ? parseInt(marks.tEnvs) : 0):0) +
   (subjects.GK ?      (marks.tGk != "AB" ? parseInt(marks.tGk) : 0):0) +
   (subjects.Science ? (marks.tScience != "AB" ? parseInt(marks.tScience) : 0):0) +
   (subjects.Geography?(marks.tGeography != "AB" ? parseInt(marks.tGeography) : 0):0) +
   (subjects.History ? (marks.tHistory != "AB" ? parseInt(marks.tHistory) : 0):0) +
   (subjects.Language?  (marks.tanguage != "AB" ? parseInt(marks.tLanguage) : 0):0)} </p>
          
      
      </div>

      <button className="save-btn" onClick={() => onSave(user._id)}>
        Save
      </button>
    </div>
  </div>
     
   </>
 );
}


