const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const ClassOneSchema = new Schema({
    studentName: String, 
    fatherName: String, 
    Adress: String, 
    MobileString: String,
    Class: String, 
    Roll: String, 
    Session: String, 
    Attendence: String,
   fMarks :{ 
    fBengali: String,
    fEnglish: String,
    fMath: String,
    fGk: String,
    fScience: String,
    fThirdLanguage: String,
    fTotal: String,
    fPosition: String}
    
});




module.exports = mongoose.model('class1_students', ClassOneSchema);
