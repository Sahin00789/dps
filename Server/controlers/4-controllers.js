const class4_students = require('../models/4_Models');

const getAllStudent = async (req,res,next)=>
{ const Students = await class4_students.find();
res.status(200).json({ Students}) }

const getByid = async(req,res,next)=>
{const _id = req.params.id; const doc = await class4_students.find({_id})
res.send(doc);}

const deleteStudent = async(req,res,next)=>
{   const _id = req.params.id;
     const doc = await class4_students.deleteOne({_id});
res.send(doc); console.log(_id);  }

const addStudent = async(req,res,next)=>
{ const{ studentName, fatherName,  photo, Adress, DOB, MobileNumber, Class, Roll, Session, Attendence, fBengali, fEnglish, fMath, fEnvs, fHistory, fGeography, fLanguage,sBengali, sEnglish, sMath, sEnvs, sHistory, sGeography, sLanguage, tBengali, tEnglish, tMath, tEnvs, tHistory, tGeography, tLanguage, workEd, artEd, phyEd, discipline } = req.body;
const Student = new class4_students({studentName, fatherName,  photo, Adress, DOB, MobileNumber, Class, Roll, Session,  Attendence, 
  'fMarks.fBengali': fBengali,'fMarks.fEnglish' : fEnglish,'fMarks.fMath' : fMath,'fMarks.fEnvs' : fEnvs, 'fMarks.fHistory': fHistory, 'fMarks.fGeography': fGeography, 'fMarks.fLanguage': fLanguage,'sMarks.sBengali': sBengali,'sMarks.sEnglish' : sEnglish,'sMarks.sMath' : sMath,'sMarks.sEnvs' : sEnvs, 'sMarks.sHistory': sHistory, 'sMarks.sGeography': sGeography, 'sMarks.sLanguage': sLanguage,'tMarks.tBengali': tBengali,'tMarks.tEnglish' : tEnglish,'tMarks.tMath' : tMath,'tMarks.tEnvs' : tEnvs, 'tMarks.tHistory': tHistory, 'tMarks.tGeography': tGeography, 'tMarks.tLanguage': tLanguage,'coscholastic.workEd' : workEd, 'coscholastic.phyEd': phyEd, 'coscholastic.artEd': artEd, 'coscholastic.discipline': discipline  });
const doc = await Student.save();
res.status(201).json({ Student});console.log(doc);  }

const updateStudent = async(req,res,next)=>
{  const _id = req.params.id;
const{ studentName,  fatherName,  photo, Adress, MobileNumber, Class, Roll, Session, Attendence, } = req.body;
  const  doc = await class4_students.updateOne(({_id}),
{ studentName, fatherName, photo, Adress, MobileNumber, Class, Roll, Session,  Attendence });
res.send(doc); console.log(doc); } 

const updateMarks = async(req,res,next)=>
{   const _id = req.params.id;
  
    const { fBengali, fEnglish, fMath, fEnvs, fHistory, fGeography, fLanguage,sBengali, sEnglish, sMath, sEnvs, sHistory, sGeography, sLanguage, tBengali, tEnglish, tMath, tEnvs, tHistory, tGeography, tLanguage, workEd, artEd, phyEd, discipline } = req.body;
 doc = await class4_students.updateOne(({_id}),{'fMarks.fBengali': fBengali,'fMarks.fEnglish' : fEnglish,'fMarks.fMath' : fMath,'fMarks.fEnvs' : fEnvs, 'fMarks.fHistory': fHistory, 'fMarks.fGeography': fGeography, 'fMarks.fLanguage': fLanguage,'sMarks.sBengali': sBengali,'sMarks.sEnglish' : sEnglish,'sMarks.sMath' : sMath,'sMarks.sEnvs' : sEnvs, 'sMarks.sHistory': sHistory, 'sMarks.sGeography': sGeography, 'sMarks.sLanguage': sLanguage,'tMarks.tBengali': tBengali,'tMarks.tEnglish' : tEnglish,'tMarks.tMath' : tMath,'tMarks.tEnvs' : tEnvs, 'tMarks.tHistory': tHistory, 'tMarks.tGeography': tGeography, 'tMarks.tLanguage': tLanguage,'coscholastic.workEd' : workEd, 'coscholastic.phyEd': phyEd, 'coscholastic.artEd': artEd, 'coscholastic.discipline': discipline  });
  res.send(doc); console.log(doc);  }


  exports.getAllStudent = getAllStudent;

  exports.getByid = getByid;

  exports.deleteStudent = deleteStudent;

  exports.addStudent = addStudent;

exports.updateStudent = updateStudent;

exports.updateMarks = updateMarks;
