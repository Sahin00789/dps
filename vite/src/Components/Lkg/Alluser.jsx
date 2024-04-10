import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';


import NavBar from "../../navbar.jsx";
import Edituser from "./edituser.jsx";
import "../2Stylesheets/All.css";
import Adduser from "./Adduser.jsx";
import Features from "./features.jsx";

export default function Alluser() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [editbox, setEditbox] = useState(false);
  const [addbox, setAddbox] = useState(false);
  const [del, setdel] = useState(0);

  const getUsers = async () => {
    const res = await axios.get("http://127.0.0.1:5000/students/lkg");
    const doc1 = res.data.Students ;
    const doc = doc1.sort((a,b)=> a.Roll - b.Roll);
    setUsers(doc);
  };
  console.log(users);
  const onDelete = async (id, name) => {
    let result = confirm(`Are you sure To Delete : ${name}`);

    if (result) {
      await axios.delete(`http://127.0.0.1:5000/students/lkg/${id}`);
      toast.warn("Deleted");
      setdel(del + 1)
    } else {
      console.log("Not Deleted");
    }
  };

  useEffect(() => {
    getUsers();
  }, [editbox, addbox, del]);

  return (
    <>
      <NavBar />
      <Features />

      <div className="main-div">
        {users.map((user, id) => (
          
          <div key={id} className="card">
           
             <div className="card-head">
              <p>Class : {user.Class}</p>
              <h3>Roll : {user.Roll}</h3>


              </div>

              <div className="details-box">
             
            <div className="card-details">
              <p>Student Name : {user.studentName}</p>
              <p>Father Name : {user.fatherName}</p>
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
                onClick={() => onDelete(user._id, user.studentName)}
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
      {editbox && <Edituser id={id} closewndo={() => setEditbox(false)} />}

      {addbox && <Adduser closewndo={() => setAddbox(false)} />}
    </>
  );
}
