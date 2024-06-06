const Lkg_students = require('../models/Lkg_Models');

const getAllStudent = async (req,res,next)=>
{ const Students = await Lkg_students.find();
res.status(200).json({ Students}) }

const getByid = async(req,res,next)=>
{const _id = req.params.id; const doc = await Lkg_students.find({_id})
res.send(doc);}

const deleteStudent = async(req,res,next)=>
{   const _id = req.params.id;
     const doc = await Lkg_students.deleteOne({_id});
res.send(doc); console.log(_id);  }

const addStudent = async(req,res,next)=>
{ const{  studentName, fatherName, DOB, photo, Adress,  MobileNumber, Class, Roll, Session, Attendence, fBengali, fEnglish, fMath, fGk, sBengali, sEnglish, sMath, sGk, tBengali, tEnglish, tMath, tGk,workEd, artEd, phyEd, discipline } = req.body;
const Student = new Lkg_students({studentName, fatherName, photo, Adress,DOB, MobileNumber, Class, Roll, Session,  Attendence, 
  'fMarks.fBengali': fBengali,'fMarks.fEnglish' : fEnglish,'fMarks.fMath' : fMath,'fMarks.fGk' : fGk, 'sMarks.sBengali': sBengali,'sMarks.sEnglish' : sEnglish,'sMarks.sMath' : sMath,'sMarks.sGk' : sGk, 'tMarks.tBengali': tBengali,'tMarks.tEnglish' : tEnglish,'tMarks.tMath' : tMath,'tMarks.tGk' : tGk,'coscholastic.workEd' : workEd, 'coscholastic.phyEd': phyEd, 'coscholastic.artEd': artEd, 'coscholastic.discipline': discipline });
const doc = await Student.save();
res.status(201).json({ Student}); console.log(doc);  
console.log(req.body);
}

const updateStudent = async(req,res,next)=>
{  const _id = req.params.id;
const{ studentName,  fatherName, photo, Adress, MobileNumber, Class, Roll, Session, Attendence, } = req.body;
  const  doc = await Lkg_students.updateOne(({_id}),
{ studentName, fatherName, photo, Adress, MobileNumber, Class, Roll, Session,  Attendence });
res.send(doc); console.log(doc); } 

const updateMarks = async(req,res,next)=>
{   const _id = req.params.id;
    const {fBengali, fEnglish, fMath, fGk, sBengali, sEnglish, sMath, sGk, tBengali, tEnglish, tMath, tGk,workEd, artEd, phyEd, discipline} = req.body;
   
 doc = await Lkg_students.updateOne(({_id}),{'fMarks.fBengali': fBengali,'fMarks.fEnglish' : fEnglish,'fMarks.fMath' : fMath,'fMarks.fGk' : fGk, 'sMarks.sBengali': sBengali,'sMarks.sEnglish' : sEnglish,'sMarks.sMath' : sMath,'sMarks.sGk' : sGk, 'tMarks.tBengali': tBengali,'tMarks.tEnglish' : tEnglish,'tMarks.tMath' : tMath,'tMarks.tGk' : tGk,'coscholastic.workEd' : workEd, 'coscholastic.phyEd': phyEd, 'coscholastic.artEd': artEd, 'coscholastic.discipline': discipline  });
  res.send(doc); console.log(doc);  }


  exports.getAllStudent = getAllStudent;

  exports.getByid = getByid;

  exports.deleteStudent = deleteStudent;

  exports.addStudent = addStudent;

exports.updateStudent = updateStudent;

exports.updateMarks = updateMarks;
