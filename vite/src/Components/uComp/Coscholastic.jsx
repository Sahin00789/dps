import React, { useEffect, useState } from 'react';
import { apiUrl } from '../../helper.jsx'


import axios from 'axios';

import { toast } from 'react-toastify';

import "../../Stylesheets/Marks-table.css"

export default function Coscholastic({nClass}) {
   const [users, setUsers] = useState([]);
   const [editbox, setEditbox] = useState(false);
   const [id, setId] = useState("");

   const getUser = async() =>{
      const res = await axios.get(`${apiUrl}/${nClass}`)
      setUsers(res.data.Students)
   }


console.log(users);
   useEffect(()=>{
      getUser()
   },[])

  return (
    <>
  
    <div>
    <div className="marksback">
        <div className="a4-Landscape width20">
          <div className="header-marks">
            <h1>DINA PUBLIC SCHOOL</h1>
            <h3>Co-Scolasic - 2024</h3>
          </div>
          <table>
            <thead ><tr>
              <th>Roll</th>
              <th>Student Name</th>
              <th >Work Education</th>
              <th >Art Education</th>
              <th >Health & Physical Education</th>
              <th >DISCIPLINE</th></tr>
            </thead>
            <tbody>
            {users.map((user, id)=>( <tr key={id}>
                  <td>{user.Roll}</td>
                  <td>{user.studentName}</td>
                  <td>{user.coscholastic.workEd}</td>
                  <td>{user.coscholastic.artEd}</td>
                  <td>{user.coscholastic.phyEd}</td>
                  <td>{user.coscholastic.discipline}</td>
                    <div >
                      <button className="edit-btn" onClick={() => {
                          setId(user._id);
                          setEditbox(true);
                        }}>
                        Edit
                      </button>
                    </div>
                  
                </tr> ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {editbox && <Marks nClass={nClass} id={id} closewndo={() => setEditbox(false)} />}
    </>
  )
}



function Marks({ nClass, id, closewndo }) {
  const [user, setUser] = useState([]);

  const [coscholastic, setCoscholastic] = useState([]);

console.log(id);

  const getUserbyid = async () => {
    const res = await axios.get(`${apiUrl}/${nClass}/${id}`);
 
    setUser(res.data[0]);
    setCoscholastic(res.data[0].coscholastic)
  };

  const marksEntry = (e) => {
    setCoscholastic({
      ...coscholastic,
      ...user,
    [e.target.name]: e.target.value,
      
    });
  };

  
  const onSave = async (id) => {
    const doc = await axios.post(
      `${apiUrl}/${nClass}/${id}`,
      coscholastic
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

  return (
    <>
      <div className="blur-back">
        <div className="edit-box">
          <div className="headline">
            <h2>Name : {user.studentName}</h2>
            <h2>Roll : {user.Roll}</h2>
            <h2>{user.Class}</h2>
            <button className="btn-close" onClick={() => closewndo()}>
              X
            </button>
          </div>
          <div className="details">
            <div className="marksinput">
              <label htmlFor="workEd">Work Education</label>
              <input
                name="workEd"
                value={coscholastic.workEd}
                onChange={marksEntry}
              />
            </div>

            <div className="marksinput">
              <label htmlFor="artEd">Art Education</label>
              <input
                name="artEd"
                value={coscholastic.artEd}
                onChange={marksEntry}
              />
            </div>

            <div className="marksinput">
              <label htmlFor="phyEd">Physical & Health Education</label>
              <input name="phyEd" value={coscholastic.phyEd} onChange={marksEntry} />
            </div>

            <div className="marksinput">
              <label htmlFor="discipline">DISCIPLINE</label>
              <input name="discipline" value={coscholastic.discipline} onChange={marksEntry} />
            </div>
         </div>
          <button className="save-btn" onClick={() => onSave(user._id)}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}