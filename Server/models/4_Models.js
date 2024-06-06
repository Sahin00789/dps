const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const ClassFourSchema = new Schema({
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
        fEnvs: String,
        fHistory: String,
        fGeography: String,
        fLanguage: String,
    },
    sMarks: {
        sBengali: String,
        sEnglish: String,
        sMath: String,
        sEnvs: String,
        sHistory: String,
        sGeography: String,
        sLanguage: String,
    },
    tMarks: {
        tBengali: String,
        tEnglish: String,
        tMath: String,
        tEnvs: String,
        tHistory: String,
        tGeography: String,
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




module.exports = mongoose.model('class4_students', ClassFourSchema);
