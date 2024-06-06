const class5_students = require('../models/5_Models');

const getAllStudent = async (req,res,next)=>
{ const Students = await class5_students.find();
res.status(200).json({ Students}) }

const getByid = async(req,res,next)=>
{{const _id = req.params.id; const doc = await class5_students.find({_id})
res.send(doc);}}

const deleteStudent = async(req,res,next)=>
{   const _id = req.params.id;
     const doc = await class5_students.deleteOne({_id});
res.send(doc); console.log(_id);  }

const addStudent = async(req,res,next)=>
{ const{ studentName, fatherName, DOB, photo, Adress, MobileNumber, Class, Roll, Session, Attendence, fBengali, fEnglish, fMath, fEnvs, fLanguage, sBengali, sEnglish, sMath, sEnvs, sLanguage, tBengali, tEnglish, tMath, tEnvs, tLanguage, workEd, artEd, phyEd, discipline} = req.body;
const Student = new class5_students({studentName, fatherName, DOB, photo, Adress, MobileNumber, Class, Roll, Session,  Attendence, 
'fMarks.fBengali': fBengali,'fMarks.fEnglish' : fEnglish,'fMarks.fMath' : fMath,'fMarks.fEnvs' : fEnvs,'fMarks.fLanguage' : fLanguage,  'sMarks.sBengali': sBengali,'sMarks.sEnglish':sEnglish,'sMarks.sMath' : sMath,'sMarks.sEnvs':sEnvs,'sMarks.sLanguage' : sLanguage, 'tMarks.tBengali': tBengali,'tMarks.tEnglish' :tEnglish,'tMarks.tMath' : tMath,'tMarks.tEnvs' : tEnvs,'tMarks.tLanguage' : tLanguage, 'coscholastic.workEd' : workEd, 'coscholastic.phyEd': phyEd, 'coscholastic.artEd': artEd, 'coscholastic.discipline': discipline });
const doc = await Student.save();
res.status(201).json({ Student}); console.log(doc); 

}

const updateStudent = async(req,res,next)=>
{  const _id = req.params.id;
const{ studentName,  fatherName,DOB, photo, Adress, MobileNumber, Class, Roll, Session, Attendence, } = req.body;
  const  doc = await class5_students.updateOne(({_id}),
{ studentName, fatherName, DOB, photo, Adress, MobileNumber, Class, Roll, Session,  Attendence });
res.status(200).json({ doc }); console.log(doc); 
  console.log(req.body);
} 

const updateMarks = async(req,res,next)=>
{   const _id = req.params.id;

    const {fBengali, fEnglish, fMath, fEnvs, fLanguage,   sBengali, sEnglish, sMath, sEnvs, sLanguage, tBengali, tEnglish, tMath, tEnvs, tLanguage, workEd, artEd, phyEd, discipline} = req.body;

    try {
     doc = await class5_students.updateOne(({_id}),{'fMarks.fBengali': fBengali,'fMarks.fEnglish' : fEnglish,'fMarks.fMath' : fMath,'fMarks.fEnvs' : fEnvs,'fMarks.fLanguage' : fLanguage, 'sMarks.sBengali': sBengali,'sMarks.sEnglish' :sEnglish,'sMarks.sMath' : sMath,'sMarks.sEnvs' : sEnvs,'sMarks.sLanguage' : sLanguage, 'tMarks.tBengali': tBengali,'tMarks.tEnglish' :tEnglish,'tMarks.tMath' : tMath,'tMarks.tEnvs' : tEnvs,'tMarks.tLanguage' : tLanguage, 'coscholastic.workEd' : workEd, 'coscholastic.phyEd': phyEd, 'coscholastic.artEd': artEd, 'coscholastic.discipline': discipline  });
      res.send(doc); console.log(doc); 
    } catch (error) {
      console.log(Error);
    }
 }


  exports.getAllStudent = getAllStudent;

  exports.getByid = getByid;

  exports.deleteStudent = deleteStudent;

  exports.addStudent = addStudent;

exports.updateStudent = updateStudent;

exports.updateMarks = updateMarks;
