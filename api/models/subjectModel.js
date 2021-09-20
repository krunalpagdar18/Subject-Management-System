'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var subjectSchema = new Schema({
    subject_id: {
        type: Number,
        required: 'Kindly enter the name of the subject'
    },
    subject_name: {
        type: String,
        required: 'Kindly enter the name of the subject'
    },
    subject_code: {
        type: String,
        required: 'Kindly enter the code of the subject'
    },
    faculty_name: {
        type: String,
        required: 'Kindly enter the name of the faculty'
    }
});

module.exports = mongoose.model('Subject', subjectSchema);