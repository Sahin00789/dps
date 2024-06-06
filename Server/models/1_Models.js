const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const ClassOneSchema = new Schema({
    studentName: String,
    fatherName: String,
    Adress: String,
    DOB: String,
    MobileNumber: String,
    Class: String,
    Roll: String,
    Session: String,
    Attendence: String,
    fMarks: {
        fBengali: String,
        fEnglish: String,
        fMath: String,
        fGk: String,
        fScience: String,
        fLanguage: String,
    },
    sMarks: {
        sBengali: String,
        sEnglish: String,
        sMath: String,
        sGk: String,
        sScience: String,
        sLanguage: String,
    },
    tMarks: {
        tBengali: String,
        tEnglish: String,
        tMath: String,
        tGk: String,
        tScience: String,
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




module.exports = mongoose.model('class1_students', ClassOneSchema);
