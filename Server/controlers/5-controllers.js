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
{ const{ studentName, fatherName, Adress, MobileNumber, Class, Roll, Session, Attendence, fBengali, fEnglish, fMath, fEnvs, fLanguage, fTotal, fPosition, } = req.body;
const Student = new class5_students({studentName, fatherName, Adress, MobileNumber, Class, Roll, Session,  Attendence, 
'fMarks.fBengali': fBengali,'fMarks.fEnglish' : fEnglish,'fMarks.fMath' : fMath,'fMarks.fEnvs' : fEnvs,'fMarks.fThirdLanguage' : fLanguage, 'fMarks.fTotal' : fTotal,'fMarks.fPosition' : fPosition  });
const doc = await Student.save();
res.status(201).json({ Student}); console.log(doc);  }

const updateStudent = async(req,res,next)=>
{  const _id = req.params.id;
const{ studentName,  fatherName,  Adress, MobileNumber, Class, Roll, Session, Attendence, } = req.body;
  const  doc = await class5_students.updateOne(({_id}),
{ studentName, fatherName, Adress, MobileNumber, Class, Roll, Session,  Attendence });
res.send(doc); console.log(doc); } 

const updateMarks = async(req,res,next)=>
{   const _id = req.params.id;

    const {fBengali, fEnglish, fMath, fEnvs, fLanguage,  fPosition,} = req.body;

    const ftl = (fBengali != "AB" ? parseInt(fBengali) : 0) +
    (fEnglish != "AB" ? parseInt(fEnglish) : 0) +
    (fMath != "AB" ? parseInt(fMath) : 0) +
    (fEnvs != "AB" ? parseInt(fEnvs) : 0)+
    (fThirdLanguage != "AB" ? parseInt(fThirdLanguage) : 0)
    try {
      doc = await class5_students.updateOne(({_id}),{'fMarks.fBengali': fBengali,'fMarks.fEnglish' : fEnglish,'fMarks.fMath' : fMath,'fMarks.fEnvs' : fEnvs,'fMarks.fThirdLanguage' : fLanguage, 'fMarks.fTotal' : ftl,'fMarks.fPosition' : fPosition });
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
