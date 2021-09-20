var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Subject = require('./api/models/subjectModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Subjects');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.post("/Subject", (req, res) => {

    const subject = new Subject(req.body);
    // console.log(req.body);
    subject.save().then(() => {
            res.send(subject);
            //console.log(req.body);
        }).catch((e) => {
            res.send(e);
        })
        // res.send("Subject can be added now ");
})


var routes = require('./api/routes/subjectRoute'); //importing route
routes(app); //register the route


app.listen(port);


//console.log('todo list RESTful API server started on: ' + port);