import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from '../../helper.jsx'

import "../../Stylesheets/All.css";
import "../../Stylesheets/add.css";

import { toast } from 'react-toastify';




export default function Alluser({nClass}) {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [editbox, setEditbox] = useState(false);
  const [addbox, setAddbox] = useState(false);
  const [del, setDel] = useState(0);

  const getUsers = async () => {
    const res = await axios.get(`${apiUrl}/${nClass}`);
    const doc1 = res.data.Students ;
    const doc = doc1.sort((a,b)=> a.Roll - b.Roll);
    setUsers(doc);
  };
  console.log(users);
  const onDelete = async (id, name) => {
    let result = confirm(`Are you sure To Delete : ${name} `);

    if (result) {
      await axios.delete(`${apiUrl}/${nClass}/${id}`);
      toast.error("Deleted");
      setDel(del + 1)
    } else {
      console.log("Not Deleted");
    }
  };

  useEffect(() => {
    getUsers();
  }, [editbox, addbox, del]);

  return (
    <>
    
  

      <div className="main-div">
        {users.map((user, id) => (
          
          <div key={id} className="card">
           
             <div className="card-head">
              <p>Class : {user.Class}</p>
              <h3>Roll : {user.Roll}</h3>


              </div>

              <div className="details-box">

              <div className="card-details">
                <img  src=  {user.photo? user.photo : "people.png"}   />
              </div>

              <div className="card-details">
              <p>Student Name : {user.studentName}</p>
              <p>Father Name : {user.fatherName}</p>
              <p>Date Of Birth : {user.DOB}</p>
             </div>
              <div className="card-details">
              <p>Address : {user.Adress}</p>
              <p>Mobile Number : {user.MobileNumber}</p>
            </div>
            <div className="card-details">
               
              <p>Session : {user.Session}</p>
              <p>Attendence : {user.Attendence}</p>
            </div>
            <div className="card-btn">
              <button
                id="Edit"
                onClick={() => {
                  setId(user._id);
                  setEditbox(true);
                }}
              >
                Edit
              </button>
              <button
                id="Delete"
                onClick={() => onDelete(user._id, user.studentName, )}
              >
                {" "}
                Delete{" "}
              </button>
              </div>
            </div>
          </div>
        ))}

        <button className="add-btn" onClick={() => setAddbox(true)}>
          Add Student
        </button>
      </div>
      {editbox && <Edituser nClass={nClass} id={id} closewndo={() => setEditbox(false)} />}

      {addbox && <Addusers  nClass={nClass} closewndo={() => setAddbox(false)} />}

    </>
  );
}

 function Addusers({ nClass, closewndo }) {
  const [reg, setReg] = useState([]);
const [postimage, setPostimage] = useState("");

const handlePhoto = async (e)=>{
  const file = e.target.files[0];
  const base64 = await convertToBase64(file);
setPostimage(base64);
console.log(postimage);
}

  const handleForm = async (e) => {
    setReg({
      ...reg,
      [e.target.name]: e.target.value,
      photo: postimage,
      fBengali: "",
      fEnglish: "",
      fMath: "",
      fEnvs: "",
      fLanguage: "",
      fGk : "",
      fHistory: "",
      fGeography: "",
      fScience: "",
     

      sBengali: "",
      sEnglish: "",
      sMath: "",
      sEnvs: "",
      sLanguage: "",
      sGk : "",
      sHistory: "",
      sGeography: "",
      sScience: "",

      tBengali: "",
      tEnglish: "",
      tMath: "",
      tEnvs: "",
      tLanguage: "",
      tGk : "",
      tHistory: "",
      tGeography: "",
      tScience: "",

      Session: 2024,
      Class: nClass.toUpperCase(),
    

      workEd: "",
      phyEd: "",
      artEd: "",
      discipline: "",
    });
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${apiUrl}/${nClass}/`,
      reg
    );
    console.log(response.status);
    if (response.status === 201) {
      toast.success("Student Added Succesfully");
      closewndo();
    } else {
      toast.alert("Somthing Went Wrong");
    }
  };

  return (
    <>
     
      <div className="blur-back">
        <div className="add-box">
          <div className="headline">
            <h2>Add Student </h2>
            <button className="btn-close" onClick={() => closewndo()}>
              X
            </button>
          </div>
          <div className="card-details">
                <label htmlFor="file-upload"> <img src={postimage ? postimage : "people.png"}/></label>
                <input type="file" label="image" name="myFile" id="file-upload" accept=".jpeg, .png, .jpg" style={{display : "none"}} onChange={handlePhoto}/>
              </div>
          <div className="details">
            <div className="input-box">
              <label>Name</label>
              <input name="studentName" onChange={handleForm} />
            </div>
            <div className="input-box">
              <label>Father's Name</label>
              <input name="fatherName" onChange={handleForm} />
            </div>
            <div className="input-box">
              <label>D.O.B. </label>
              <input type="date" name="DOB" onChange={handleForm} />
            </div>
            <div className="input-box">
              <label>Adress</label>
              <input name="Adress" onChange={handleForm} />
            </div>
            <div className="input-box">
              <label>Mobile Number</label>
              <input name="MobileNumber" onChange={handleForm} />
            </div>
            <div className="input-box">
              <label>Class </label>
              <input name="Class" value={nClass.toUpperCase()}></input>
            </div>
            <div className="input-box">
              <label>Roll Number</label>
              <input name="Roll" type="number" onChange={handleForm} />
            </div>

            <div className="input-box">
              <label>Attendence</label>
              <input name="Attendence" type="number" onChange={handleForm} />
            </div>
          </div>
          <button className="save-btn" type="submit" onClick={handleSubmit}>
            Register
          </button>
        </div>
      </div>
    </>
  );
}


function convertToBase64(file){
  return new Promise((resolve, reject)=>{
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload =()=>{
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) =>{
      reject(error)
    }
  })

}

function Edituser({nClass, id, closewndo}) {
  
  const [user, setUser] = useState([]);
  

  const handlePhoto = async (e)=>{
    const file = e.target.files[0];
    try {
      const base64 = await convertToBase64(file);
     
      setUser({ photo:base64 })
    console.log(image);
  
    } catch (error) {
      console.log(error);
    }
   
  }

  const getUserbyid = async ()=>{
      const res = await axios.get(`${apiUrl}/${nClass}/${id}`)
      
      setUser(res.data[0]);

  }

 

useEffect(()=>{
  getUserbyid()
},[])


  const handleForm = (e) => {
    
    setUser({ 
      ...user, 
     [e.target.name]: e.target.value,
    });
    
  }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    const response = await axios.put(`${apiUrl}/${nClass}/${id}`, user);
    
    if (response.status===200) {
       toast.success("Student Details Updated Succesfully");
       closewndo();
       
     } else {
      alert("Somthing Went Wrong")
     };
    
   
  }
  



  return (
  <div className='blur-back'>
   <div className="edit-box">
   <div className='headline-edit'><h2>Edit Student Details</h2>
         <button className='btn-close' onClick={()=>closewndo()}>X</button>
         </div>
         <div className="card-details">
              <label htmlFor="file-upload"> <img src={ user.photo ? user.photo : "people.png"}/></label>
              <input type="file" label="image" id="file-upload" accept=".jpeg, .png, .jpg" style={{display : "none"}} onChange={handlePhoto}/>
            </div>
         <div className='details'>
            <div className="input-box">
              <label>Name</label>
              <input name='studentName' onChange={handleForm} value={user.studentName}/>
              </div>
            <div className="input-box">
              <label>Father's Name</label>
              <input name='fatherName' onChange={handleForm} value={user.fatherName}/>
            </div>
            <div className="input-box">
            <label>D.O.B. </label>
            <input type="date" name="DOB" onChange={handleForm} />
          </div>
            <div className="input-box">
              <label>Adress</label>
              <input name='Adress' onChange={handleForm} value={user.Adress}/>
            </div>
            <div className="input-box">
              <label>Mobile Number</label>
              <input name='MobileNumber' onChange={handleForm} value={user.MobileNumber}/>
            </div>
            <div className="input-box">
            <label>Class </label>
            <input name="Class" value={"Class 5"}></input>
          </div>
            <div className="input-box">
              <label>Roll Number</label>
              <input name='Roll' type='number' onChange={handleForm} value={user.Roll}/>
            </div>
           
            <div className="input-box">
              <label>Attendence</label>
              <input name='Attendence' type='number' onChange={handleForm} value={user.Attendence}/>
            </div>
            </div>
            <button className="save-btn" type='submit' onClick={handleSubmit}> Update</button>
          </div>
    </div>
)
}