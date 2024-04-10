import React, { useState } from "react";
import "../2Stylesheets/add.css";
import axios from "axios";
import { toast } from 'react-toastify';

import NavBar from "../../navbar.jsx";

export default function Adduser({ closewndo }) {
  const [reg, setReg] = useState([]);

  const handleForm = (e) => {
    setReg({
      ...reg,
      [e.target.name]: e.target.value,
      fBengali: "",
      fEnglish: "",
      fMath: "",
      fScience: "",
      fThirdLanguage: "",
      ftotal: "",
      fposition: "",
      Session: 2024,
      Class: "Class 1",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://127.0.0.1:5000/students/one",
      reg
    );
    console.log(response.status);
    if (response.status === 201) {
      toast.success("Student Added Succesfully");
      closewndo();
    } else {
      alert("Somthing Went Wrong");
    }
    
  };

  return (
    <>
      <NavBar />

      <div className="blur-back">
        <div className="edit-box">
          <div className="headline">
            <h2>Add Student </h2>
            <button className="btn-close" onClick={() => closewndo()}>
              X
            </button>
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
              <label>Adress</label>
              <input name="Adress" onChange={handleForm} />
            </div>
            <div className="input-box">
              <label>Mobile Number</label>
              <input name="MobileNumber" onChange={handleForm} />
            </div>
            <div className="input-box">
              <label>Class </label>
              <input name="Class" value={"Class 1"}></input>
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
