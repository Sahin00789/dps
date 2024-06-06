const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const ClassUkgSchema = new Schema({
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
    },
    sMarks: {
        sBengali: String,
        sEnglish: String,
        sMath: String,
        sGk: String,
    },
    tMarks: {
        tBengali: String,
        tEnglish: String,
        tMath: String,
        tGk: String,
    },
    coscholastic: {
        workEd: String,
        artEd: String,
        phyEd: String,
        discipline: String,

    },
    photo : String

});




module.exports = mongoose.model('Ukg_students', ClassUkgSchema);
