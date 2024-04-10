const express = require('express')
const class1_students = require('../models/1_Models');

const getAllStudent = async (req,res,next)=>
{ const Students = await class1_students.find({});
res.status(200).json({ Students}) }

const getByid = async(req,res,next)=>
{const _id = req.params.id; const doc = await class1_students.find({_id})
res.send(doc);}

const deleteStudent = async(req,res,next)=>
{   const _id = req.params.id;
     const doc = await class1_students.deleteOne({_id});
res.send(doc); console.log(_id);  }

const addStudent = async(req,res,next)=>
{ const{ studentName, fatherName, Adress, MobileNumber, Class, Roll, Session, Attendence, fBengali, fEnglish, fMath, fScience, fTotal, fPosition, fThirdLanguage, fGk } = req.body;
const Student = new class1_students({studentName, fatherName, Adress, MobileNumber, Class, Roll, Session,  Attendence, 
'fMarks.fBengali': fBengali,'fMarks.fEnglish' : fEnglish,'fMarks.fMath' : fMath,'fMarks.fScience' : fScience, 'fMarks.fThirdLanguage' : fThirdLanguage,'fMarks.fGk' : fGk,'fMarks.fTotal' : fTotal,'fMarks.fPosition' : fPosition });
const doc = await Student.save();
res.status(201).json({ Student}); console.log(doc);  }

const updateMarks = async(req,res,next)=>
{   const _id = req.params.id;
    const { fBengali, fEnglish, fMath, fScience, fPosition, fThirdLanguage, fGk} = req.body;
     const ftl =(fBengali != "AB" ? parseInt(fBengali) : 0) +
     (fEnglish != "AB" ? parseInt(fEnglish) : 0) +
     (fMath != "AB" ? parseInt(fMath) : 0) +
     (fScience != "AB" ? parseInt(fScience) : 0)+
     (fGk != "AB" ? parseInt(fGk) : 0)+
     (fThirdLanguage != "AB" ? parseInt(fThirdLanguage) : 0)

 doc = await class1_students.updateOne(({_id}),{'fMarks.fBengali': fBengali,'fMarks.fEnglish' : fEnglish,'fMarks.fMath' : fMath,'fMarks.fScience' : fScience, 'fMarks.fThirdLanguage' : fThirdLanguage,'fMarks.fGk' : fGk,
 'fMarks.fTotal' : ftl,
 'fMarks.fPosition' : fPosition});
  res.send(doc); console.log(ftl);  }


const updateStudent = async(req,res,next)=>
{  const _id = req.params.id;
const{ studentName,  fatherName,  Adress, MobileNumber, Class, Roll, Session, Attendence, } = req.body;
  const  doc = await class1_students.updateOne(({_id}),
{ studentName, fatherName, Adress, MobileNumber, Class, Roll, Session,  Attendence });
res.send(doc); console.log(doc); } 



  exports.getAllStudent = getAllStudent;

  exports.getByid = getByid;

  exports.deleteStudent = deleteStudent;

  exports.addStudent = addStudent;

exports.updateStudent = updateStudent;

exports.updateMarks = updateMarks;
