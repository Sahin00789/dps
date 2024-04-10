const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClassLkgSchema = new Schema({
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
    fGk: String,
    fTotal: String,
    fPosition: String }
    
});



module.exports = mongoose.model('Lkg_students', ClassLkgSchema);
