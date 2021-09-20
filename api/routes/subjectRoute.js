'use strict';
module.exports = function(app) {
    var subject = require('../controllers/subjectControllers');

    // todoList Routes
    app.route('/subject/')
        .post(subject.addSubject);

    app.route('/subject/:subject_id')
        .get(subject.viewSubjectById);

    app.route('/subject/name/:subject_name')
        .get(subject.viewSubjectByName);
};