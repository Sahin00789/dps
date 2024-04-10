import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../navbar";
import "../2Stylesheets/Marks-table.css";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

import Editmarks from "./FirstTermMarksEdit.jsx";

export default function marks() {
  const [users, setUsers] = useState([]);
  const [editbox, setEditbox] = useState(false);
  const [id, setId] = useState("");
  const [editbtn, setEditbtn] = useState(true);
  const [currentpost, setCurrentpost] = useState([]);
  const [position, setPosition] = useState(false);

  // start Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostperPage] = useState(2);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const cheackValue = (e) => {
    setEditbtn(!e.target.checked);
  };
  const cheackValue1 = (e) => {
    setPosition(e.target.checked);
  };
console.log(position);
  const getUser = async () => {
    const res = await axios.get("http://127.0.0.1:5000/students/two/");
    const doc1 = res.data.Students;
    console.log(res);
  let doc2;
   if (position) {
   doc2 = doc1.sort((b, a) => a.fMarks.total - b.fMarks.total);
  setUsers(doc2)
   } else {
    doc2 = doc1.sort((a, b) => a.Roll - b.Roll);
  setUsers(doc2)
   }
    
   

    const lastpostindex = currentPage * postperPage;
    const firstpostindex = lastpostindex - postperPage;

    const doc = doc2.slice(firstpostindex, lastpostindex);
    setCurrentpost(doc);
  };

  useEffect(() => {
    getUser();
  }, [editbox, currentPage, position]);

  return (
    <>
      <Navbar />
      <div className="marksback">
        <div className="a4-Landscape" ref={componentRef}>
          <div className="header-marks">
            <h1>DINA PUBLIC SCHOOL</h1>
            <h3>First Term Exam Result - 2024</h3>
          </div>
          <table>
          <thead>
              <th>Roll</th>
              <th>Student Name</th>
              <th>Bengali</th>
              <th>English</th>
              <th>Math</th>
              <th>Science</th>
              <th>G.K.</th>
              <th>Arabic/Hindi</th>
              <th>Total</th>
              <th>Position</th>
            </thead>
            <tbody>
              {currentpost.map((user, id) => (
                <tr key={id}>
                  <td>{user.Roll}</td>
                  <td>{user.studentName}</td>
                  <td className="pink">{user.fMarks.fBengali}</td>
                  <td>{user.fMarks.fEnglish}</td>
                  <td className="pink">{user.fMarks.fMath}</td>
                  <td>{user.fMarks.fScience}</td>
                  <td className="pink">{user.fMarks.fGk}</td>
                  <td>{user.fMarks.fThirdLanguage}</td>
                  <td className="pink">{user.fMarks.fTotal}</td>
                  <td>{user.fMarks.fPosition}</td>
                  {editbtn && (
                    <div>
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
          <label htmlFor="postionsort">Position Sort</label>
          <input name="positionsort" type="checkbox" onChange={cheackValue1} />
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

      {editbox && <Editmarks id={id} closewndo={() => setEditbox(false)} />}
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
