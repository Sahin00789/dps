import React, { useEffect, useState } from 'react'
import "../2Stylesheets/add.css"
import axios from 'axios';
import { toast } from 'react-toastify';


function Edituser({id, closewndo}) {
  
    const [user, setUser] = useState([]);
    

    const getUserbyid = async ()=>{
        const res = await axios.get(`http://127.0.0.1:5000/students/two/${id}`)
        
        console.log(res);
        setUser(res.data[0]);

    }

   


  useEffect(()=>{
    getUserbyid()
},[])
    const handleForm = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value });
       
    }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      const response = await axios.put(`http://127.0.0.1:5000/students/two/${id}`, user);
      
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
                <label>Adress</label>
                <input name='Adress' onChange={handleForm} value={user.Adress}/>
              </div>
              <div className="input-box">
                <label>Mobile Number</label>
                <input name='MobileNumber' onChange={handleForm} value={user.MobileNumber}/>
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

export default Edituser
