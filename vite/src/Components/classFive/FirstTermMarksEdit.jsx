import React, { useEffect, useState } from "react";
import "../2Stylesheets/marksEdit.css";
import axios from "axios";
import { toast } from 'react-toastify';

export default function marks({ id, closewndo }) {
  const [user, setUser] = useState([]);

  const [marks, setMarks] = useState([]);

console.log(id);

  const getUserbyid = async () => {
    const res = await axios.get(`http://127.0.0.1:5000/students/five/${id}`);
 
    setUser(res.data[0]);
    setMarks(res.data[0].fMarks );
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
      `http://127.0.0.1:5000/students/five/${id}`,
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
              <label htmlFor="fBengali">Bengali </label>
              <input
                name="fBengali"
                value={marks.fBengali}
                onChange={marksEntry}
              />
            </div>

            <div className="marksinput">
              <label htmlFor="fEnglish">English</label>
              <input
                name="fEnglish"
                value={marks.fEnglish}
                onChange={marksEntry}
              />
            </div>

            <div className="marksinput">
              <label htmlFor="fMath">Math</label>
              <input name="fMath" value={marks.fMath} onChange={marksEntry} />
            </div>

            <div className="marksinput">
              <label htmlFor="fEnvs">Envs</label>
              <input name="fEnvs" value={marks.fEnvs} onChange={marksEntry} />
            </div>

            <div className="marksinput">
              <label htmlFor="fLanguage">Arabic/Hindi</label>
              <input name="fLanguage" value={marks.fThirdLanguage} onChange={marksEntry} />
            </div>

            <div className="marksinput" >
              <label htmlFor="fPosition">Position</label>
              <input name="fPosition" value={marks.fPosition} onChange={marksEntry} />
              </div>
         
         </div>

          <div className="total">
       
            <p>Total : {(marks.fBengali != "AB" ? parseInt(marks.fBengali) : 0) +
              (marks.fEnglish != "AB" ? parseInt(marks.fEnglish) : 0) +
              (marks.fMath != "AB" ? parseInt(marks.fMath) : 0) +
              (marks.fEnvs != "AB" ? parseInt(marks.fEnvs) : 0)+
              (marks.fThirdLanguage != "AB" ? parseInt(marks.fThirdLanguage) : 0)
               } </p>
              
          
          </div>

          <button className="save-btn" onClick={() => onSave(user._id)}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
