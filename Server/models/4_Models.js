const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const ClassFourSchema = new Schema({
    studentName: String, 
    fatherName: String, 
    Adress: String, 
    MobileString: String,
    Class: String, 
    Roll: String, 
    Session: String, 
    Attendence: String,
   fMarks :{ fBengali: String,
    fEnglish: String,
    fMath: String,
    fEnvs: String,
    fHistory: String,
    fGeography:String,
    fThirdLanguage: String,
    fTotal: String,
    fPosition: String }
    
});




module.exports = mongoose.model('class4_students', ClassFourSchema);
