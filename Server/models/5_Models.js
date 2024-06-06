const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ClassFiveSchema = new Schema({
   studentName: String,
   fatherName: String,
   DOB: String,
   Adress: String,
   MobileNumber: String,
   Class: String,
   Roll: String,
   Session: String,
   Attendence: String,
   fMarks: {
      fBengali: String,
      fEnglish: String,
      fMath: String,
      fEnvs: String,
      fLanguage: String,

   },
   sMarks: {
      sBengali: String,
      sEnglish: String,
      sMath: String,
      sEnvs: String,
      sLanguage: String,

   },
   tMarks: {
      tBengali: String,
      tEnglish: String,
      tMath: String,
      tEnvs: String,
      tLanguage: String,

   },
   coscholastic: {
      workEd: String,
      artEd: String,
      phyEd: String,
      discipline: String,

   },
 photo : String

});


module.exports = mongoose.model('class5_students', ClassFiveSchema);