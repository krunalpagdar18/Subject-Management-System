'use strict';


var mongoose = require('mongoose'),
    Subject = mongoose.model('Subject');
var express = require('express'),
    app = express();

exports.addSubject = function(req, res) {
    var new_subject = new Subject(req.body);
    new_subject.save(function(err, subject) {
        if (err)
            res.send(err);
        res.json(subject);
    });
};

exports.viewSubject = function(req, res) {
    Subject.find({}, function(err, subject) {
        console.log('aa');
        if (err)
            res.send(err);
        res.json(subject);
    });
};

exports.viewSubjectById = async(req, res) => {
    try {
        const _id = req.params.subject_id;
        const subjectdata = await Subject.findById(_id);
        console.log(subjectdata);

        if (!subjectdata) {
            return res.status(404).send();
        } else {
            res.send(subjectdata);
        }


    } catch (e) {
        res.send(e);

    }
};
exports.viewSubjectByName = async(req, res) => {
    try {
        const _name = req.params.subject_name;
        const subjectdata = await Subject.findOne({ subject_name: _name })
        if (!subjectdata) {
            return res.status(404).send();
        } else {
            res.send(subjectdata);
        }


    } catch (e) {
        res.send(e);

    }
};
/*app.get("/subject/:id", async(req, res) => {
    console.log('hh');
    try {
        const _id = req.params.id;
        console.log(_id);
        const subjectdata = await Subject.findById(_id);
        console.log(subjectdata);

        if (!subjectdata) {
            return res.status(404).send();
        } else {
            res.send(subjectdata);
        }


    } catch (e) {
        res.send(e);
        console.log(e);

    }
})*/